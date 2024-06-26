import { DefaultSession } from "next-auth";
import { User } from "next-auth/core/types";

export interface AuthResponse {
  access_token: string;
  user: User & DefaultSession["user"];
}

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session extends AuthResponse {}
}
