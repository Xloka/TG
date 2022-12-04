import Head from "next/head";
import { signIn, signOut, useSession } from "next-auth/react";
import { type APP_PAGE } from "../types/next-auth";
import { useQuery } from "@tanstack/react-query";
import { trpc } from "../utils/trpc";

const Home: APP_PAGE = () => {
  const { data: session } = useSession();
  const { data: exams } = trpc.users.getUserExams.useQuery();

  return <>
    <Head>
      <title>Home</title>
    </Head>
    <div>
      <h1>Home</h1>
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
                {exams?.map((exam:{
                  id: string;
                  name: string;
                }) => (
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
    </div>
  </>;
};

Home.auth = true;

export default Home;
