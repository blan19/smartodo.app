import { test, describe, expect, beforeEach } from 'vitest';
import { createContextInner } from '../../../context';
import { appRouter, type AppRouter } from '../../_app';
import { type inferProcedureInput } from '../../../';

describe('/auth/create', () => {
  let ctx;
  let caller;

  beforeEach(async () => {
    ctx = await createContextInner({ session: null });
    caller = appRouter.createCaller(ctx);
  });

  test('유저를 생성합니다.', async () => {
    const input: inferProcedureInput<AppRouter['auth']['create']> = {
      name: '박준서',
      nickname: 'blan19',
      email: 'blan19@naver.com',
    };

    const user = await caller.auth.create(input);

    expect(user).toMatchObject({ data: { message: 'success' } });
  });
});
