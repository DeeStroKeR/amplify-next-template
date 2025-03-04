import { createAuthRouteHandlers } from "@/utils/data-server-utils";

export const GET = createAuthRouteHandlers({
  redirectOnSignInComplete: "/home",
  redirectOnSignOutComplete: "/sign-in",
});