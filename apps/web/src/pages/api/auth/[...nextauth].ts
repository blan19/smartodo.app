import { type NextApiHandler } from 'next';
import { type Provider } from 'next-auth/providers';
import NextAuth, {
  type CallbacksOptions,
  type Profile,
  type NextAuthOptions,
  type Account,
} from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import KaKaoProvider from 'next-auth/providers/kakao';
import NaverProvider from 'next-auth/providers/naver';

const providers: Provider[] = [
  GoogleProvider({
    clientId: process.env.NEXT_PUBLIC_GOOGLE_ID,
    clientSecret: process.env.NEXT_PUBLIC_GOOGLE_SECRET,
  }),
  NaverProvider({
    clientId: process.env.NEXT_PUBLIC_NAVER_ID,
    clientSecret: process.env.NEXT_PUBLIC_NAVER_SECRET,
  }),
  KaKaoProvider({
    clientId: process.env.NEXT_PUBLIC_KAKAO_ID,
    clientSecret: process.env.NEXT_PUBLIC_KAKAO_SECRET,
  }),
];

const callbacks: Partial<CallbacksOptions<Profile, Account>> | undefined = {
  signIn: () => {
    return true;
  },
  jwt: (params) => {
    return params.token;
  },
  session: (params) => {
    return params.session;
  },
};

const nextAuthOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
  },
  providers,
  callbacks,
};

const NextAuthHandler: NextApiHandler = (req, res) =>
  NextAuth(req, res, nextAuthOptions);

export { nextAuthOptions };
export default NextAuthHandler;
