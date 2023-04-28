import { publicProcedure, router } from '../../trpc';
import { ZCreateSchema } from './schema';
import { createHandler } from './handler';

export const authRouter = router({
  create: publicProcedure
    .input(ZCreateSchema)
    .mutation(async ({ ctx, input }) => {
      return createHandler({ ctx, input });
    }),
});
