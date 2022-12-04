import { type NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

// import { trpc } from "../utils/trpc";

const SignIn = ({
  providers,
}: {
  providers: {
    [key: string]: {
      id: string;
      name: string;
    };
  };
}) => {
  const router = useRouter();
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (session) {
    router.push("/");
  }

  return (
    <>
      {Object.values(providers).map((provider) => (
        <div key={provider?.name}>
          <button
            onClick={() => {
              signIn(provider?.id);
            }}
          >
            Sign in with {provider?.name}
          </button>
        </div>
      ))}
    </>
  );
};

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
export default SignIn;
