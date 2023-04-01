import { SignInButton, SignOutButton, useUser } from "@clerk/nextjs";
import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import { api } from "~/utils/api";

const Home: NextPage = () => {
  const user = useUser();

  const { data, isLoading } = api.objects.getAll.useQuery();

  if (isLoading) return <div>Loading...</div>;

  if (!data) return <div>Something went wrong</div>;

  return (
    <>
      <Head>
        <title>Next.js, Three.js Portfolio</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/alphabet.svg" />
      </Head>
      <main className="flex h-screen justify-center">
        {/* <div className="h-full w-full md:max-w-7xl">
          <div className="flex border-b border-slate-400 p-4">
            {!user.isSignedIn && (
              <div className="flex justify-center">
                <SignInButton />
              </div>
            )}
            {!!user.isSignedIn && (
              <div className="flex justify-center">
                <SignOutButton />
              </div>
            )}
          </div>
          <div>
            {data?.map((object) => (
              <div key={object.id} className="p-2">
                {object.objectType}
              </div>
            ))}
          </div>
        </div> */}
      </main>
    </>
  );
};

export default Home;
