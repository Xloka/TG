import { router, publicProcedure, protectedProcedure } from "../trpc";

export const userRouter = router({
  getUser: publicProcedure.query(({ ctx }) => {
    return ctx.session;
  }),
  getUserExams: protectedProcedure.query(({ ctx }) => {
    return ctx.prisma.user.findUnique({
        where: {
            id: ctx.session?.user.id
        }
    }).exams();
  }),
});
