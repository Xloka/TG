import { signIn, signOut, useSession } from "next-auth/react";
import { type APP_PAGE } from "../types/next-auth";
import { trpc } from "../utils/trpc";
import { DefaultTemplate } from "../components/templates";

const Home: APP_PAGE = () => {
  const { data: session } = useSession();
  const { data: exams } = trpc.users.getUserExams.useQuery();

  return (
    <DefaultTemplate title="Home" description="Home" keywords="Home">
      <div>
        {session ? (
          <>
            <div>
              Signed in as {session.user?.email} <br />
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
        ) : (
          <>
            Not signed in <br />
            <button onClick={() => signIn()}>Sign in</button>
          </>
        )}
      </div>
    </DefaultTemplate>
  );
};

Home.auth = true;

export default Home;
