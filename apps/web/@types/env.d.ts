namespace NodeJS {
  interface ProcessEnv extends NodeJS.ProcessEnv {
    VERCEL_URL: string;
    NEXT_PUBLIC_URL: string;
    NEXT_PUBLIC_KAKAO_ID: string;
    NEXT_PUBLIC_KAKAO_SECRET: string;
    NEXT_PUBLIC_NAVER_ID: string;
    NEXT_PUBLIC_NAVER_SECRET: string;
    NEXT_PUBLIC_GOOGLE_ID: string;
    NEXT_PUBLIC_GOOGLE_SECRET: string;
  }
}
