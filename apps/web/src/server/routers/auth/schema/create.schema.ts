import { z } from 'zod';

export const ZCreateSchema = z.object({
  email: z.string(),
  nickname: z.string(),
  name: z.string(),
});

export type TCreateSchema = z.infer<typeof ZCreateSchema>;
