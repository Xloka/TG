import { type NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { DefaultTemplate } from "../../components/templates";

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
    <DefaultTemplate title="Sign in" description="Sign in" keywords="Sign in">
      <div className="-mt-56 flex min-h-screen flex-col items-center justify-center py-2 sm:px-6 lg:px-8">
        <h1 className="mb-4 text-4xl font-bold">TEST/GENE</h1>
        <h1 className="mb-4 text-2xl font-bold">Sign in to your account</h1>
        {Object.values(providers).map((provider) => (
          <div key={provider?.name}>
            <button
              className="bg-white-500 rounded border-2 border-solid border-black py-2 px-4 font-bold text-black hover:bg-gray-300
            dark:border-gray-700
            dark:bg-gray-800
            dark:text-white
            dark:hover:bg-gray-700
            "
              onClick={() => {
                signIn(provider?.id);
              }}
            >
              Using {provider?.name}
            </button>
          </div>
        ))}
      </div>
    </DefaultTemplate>
  );
};

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
export default SignIn;
