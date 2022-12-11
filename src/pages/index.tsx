import { signIn, signOut, useSession } from "next-auth/react";
import { type APP_PAGE } from "../types/next-auth";
import { trpc } from "../utils/trpc";
import { DefaultTemplate, AuthenticatedTemplate } from "../components/templates";

const Home: APP_PAGE = () => {
  const { data: session } = useSession();
  const { data: exams } = trpc.users.getUserExams.useQuery();
  
  return (
    <DefaultTemplate title="Home" description="Home" keywords="Home">
      <AuthenticatedTemplate>
        {session ? (
          <>
            <div>
              <button onClick={() => signOut()}>Sign out</button>
            </div>
            <div>
              <h2>Exams</h2>
              <ul>
                {exams &&
                  exams.map((exam: { id: number; name: string }) => (
                    <li key={exam.id}>
                      <a href={`/exams/${exam.id}`}>{exam.name}</a>
                    </li>
                  ))}
              </ul>
            </div>
          </>
        ) : null}
      </AuthenticatedTemplate>
    </DefaultTemplate>
  );
};

Home.auth = true;

export default Home;
