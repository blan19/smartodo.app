namespace NodeJS {
  interface ProcessEnv extends NodeJS.ProcessEnv {
    VERCEL_URL: string;
    NEXT_PUBLIC_URL: string;
  }
}
