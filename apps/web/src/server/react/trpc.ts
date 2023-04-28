import type { NextPageContext } from 'next/types';
import superjson from 'superjson';
import { httpBatchLink } from '../client/links/httpBatchLink';
import { loggerLink } from '../client/links/loggerLink';
import { createTRPCNext } from '../next';
import type { inferRouterInputs, inferRouterOutputs, Maybe } from '../';
import type { AppRouter } from '../routers/_app';

/**
 * @ref https://trpc.io/docs/v10/react#2-create-trpc-hooks
 */
export const trpc = createTRPCNext<
  AppRouter,
  NextPageContext,
  'ExperimentalSuspense'
>({
  config({ ctx }) {
    const url =
      typeof window !== 'undefined'
        ? '/api/trpc'
        : process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}/api/trpc`
        : `${process.env.NEXT_PUBLIC_URL}/api/trpc`;

    /**
     * @link https://trpc.io/docs/ssr
     */
    return {
      /**
       * @link https://trpc.io/docs/links
       */
      links: [
        loggerLink({
          enabled: (opts) =>
            !!process.env.NEXT_PUBLIC_DEBUG ||
            (opts.direction === 'down' && opts.result instanceof Error),
        }),
        httpBatchLink({
          url,
          /**
           * 매 요청시 trpc의 fetch를 커스텀합니다
           * @link https://trpc.io/docs/ssr
           */
          headers() {
            if (!ctx?.req?.headers) {
              return {};
            }
            // 헤더 커스텀이 필요한 경우 사용

            const { ...headers } = ctx.req.headers;
            return headers;
          },
        }),
      ],
      /**
       * @link https://react-query.tanstack.com/reference/QueryClient
       */
      queryClientConfig: {
        defaultOptions: {
          queries: {
            staleTime: 1000,
          },
        },
      },
      /**
       * @ref https://trpc.io/docs/data-transformers
       */
      transformer: superjson,
    };
  },
  /**
   * @ref https://trpc.io/docs/ssr
   */
  ssr: false,
});

export const transformer = superjson;

export type RouterInputs = inferRouterInputs<AppRouter>;
export type RouterOutputs = inferRouterOutputs<AppRouter>;
