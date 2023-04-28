import { getServerSession } from 'next-auth';
import * as trpcNext from '~/server/adapters/next';
import { createContext as createTrpcContext } from '~/server/context';
import { appRouter } from '~/server/routers/_app';
import { nextAuthOptions } from '../auth/[...nextauth]';

export default trpcNext.createNextApiHandler({
  router: appRouter,
  /**
   * @link https://trpc.io/docs/context
   */
  createContext: ({ req, res }) => {
    const sessionGetter = () => getServerSession(req, res, nextAuthOptions);

    return createTrpcContext({ req, res }, sessionGetter);
  },
  /**
   * @link https://trpc.io/docs/error-handling
   */
  onError({ error }) {
    if (error.code === 'INTERNAL_SERVER_ERROR') {
      console.error('Something went wrong', error);
    }
  },
  /**
   * Enable query batching
   */
  batching: {
    enabled: true,
  },
  /**
   * @link https://trpc.io/docs/caching#api-response-caching
   */
  // responseMeta({ ctx, paths, type, errors }) {},
});
