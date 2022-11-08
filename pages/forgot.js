import Head from "next/head";
import Link from "next/link";
import Forgot from "../components/Forgot";

export default function Login() {
  return (
    <>
      <Head>
        <title>Nesoi Life Science</title>
        <meta name="description" content="Powered by NESOI" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="flex flex-col items-center justify-center min-h-screen md:min-h-fit py-10 bg-grey-100">
        <main className="flex flex-col items-center justify-center w-full flex-1 px-2  md:max-w-4xl md:px-20 lg:2/3 text-center">
          <div className="bg-white rounded-2xl shadow-2xl flex flex-col md:flex-row justify-center">
            <div className="w-full p-1 md:p-5">
              <div className="text-left text-2xl font-bold hidden md:block"></div>

              <div className="py-10">
                <Forgot />
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
}
