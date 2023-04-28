import prisma from '@smartodo/prisma';
import { TRPCError } from '@trpc/server';
import { type TCreateSchema } from '../schema/create.schema';

type CreateHandlerOptions = {
  ctx: {};
  input: TCreateSchema;
};

export const createHandler = async ({ input }: CreateHandlerOptions) => {
  const user = await prisma.user.create({
    data: input,
  });

  if (!user)
    throw new TRPCError({
      code: 'INTERNAL_SERVER_ERROR',
      message: '서버 에러',
    });

  return {
    data: {
      message: 'success',
    },
  };
};
