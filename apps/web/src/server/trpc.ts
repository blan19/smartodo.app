import { initTRPC } from '@trpc/server';
import { createContextInner } from './context';

/**
 * @description
 *
 * 컨텍스트는 모든 tRPC 프로시저가 액세스할 수 있는 데이터를 가지고 있습니다.
 * 데이터베이스 연결 또는 인증 정보와 같은 것을 사용하기 위해 컨텍스트를 사용합니다.
 *
 * @ref
 * https://trpc.io/docs/server/context
 */

const t = initTRPC.context<typeof createContextInner>().create();

export const router = t.router;
export const mergeRouters = t.mergeRouters;
export const middleware = t.middleware;
export const publicProcedure = t.procedure;
