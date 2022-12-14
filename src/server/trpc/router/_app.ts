import { router } from "../trpc";
import { authRouter } from "./auth";
import { userRouter } from "./userRouter";

export const appRouter = router({
  auth: authRouter,
  users: userRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
