import Head from "next/head";
import Header from "../parts/Header";

export default function Home() {
  return (
    <div className="container mx-auto mt-4">
      <Head>
        <title>Kelas Online</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="container mx-auto pt-10">
        <Header />
      </section>
    </div>
  );
}