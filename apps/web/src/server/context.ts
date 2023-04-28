import { type CreateNextContextOptions } from '@trpc/server/adapters/next';
import {
  type NextApiRequest,
  type GetServerSidePropsContext,
  type NextApiResponse,
} from 'next';
import { type Session, getServerSession } from 'next-auth';
import { nextAuthOptions } from '../pages/api/auth/[...nextauth]';

type CreateContextOptions =
  | CreateNextContextOptions
  | GetServerSidePropsContext;

export type CreateInnerContextOptions = {
  session: Session | null;
} & Partial<CreateContextOptions>;

export type GetSessionFn =
  | ((_options: {
      req: GetServerSidePropsContext['req'] | NextApiRequest;
      res: GetServerSidePropsContext['res'] | NextApiResponse;
    }) => Promise<Session | null>)
  | (() => Promise<Session | null>);

const DEFAULT_SESSION_GETTER: GetSessionFn = ({ req, res }) =>
  getServerSession(req, res, nextAuthOptions);

/**
 * Inner context.
 * @see https://trpc.io/docs/context#inner-and-outer-context
 */
export async function createContextInner(opts: CreateInnerContextOptions) {
  return {
    ...opts,
  };
}
/**
 * Outer context.
 * @see https://trpc.io/docs/context#inner-and-outer-context
 */
export async function createContext(
  { req, res }: CreateContextOptions,
  sessionGetter: GetSessionFn = DEFAULT_SESSION_GETTER
) {
  const session = await sessionGetter({ req, res });

  const contextInner = await createContextInner({ session });

  return {
    ...contextInner,
    req,
    res,
  };
}

export type TRPCContext = Awaited<ReturnType<typeof createContext>>;
