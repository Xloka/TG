import { type DefaultSession } from "next-auth";
import { type NextPage } from "next";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user?: {
      id: string;
    } & DefaultSession["user"];
  }
}


interface APP_PAGE extends NextPage {
  auth: boolean
}
