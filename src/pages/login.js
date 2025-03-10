import React, { useEffect } from 'react';
import Header from "@/src/parts/Header";
import Head from "next/head";
import Footer from "@/src/parts/Footer";
import LoginForm from "@/src/parts/LoginForm";

export default function Login() {
  useEffect(() => {
    window.scroll(0, 0);
  }, [])

  return (
    <>
      <Head>
        <title>Micro | Login</title>
      </Head>

      <section className="container mx-auto pt-10">
        <Header onLight />
      </section>
      <section className="container mx-auto pt-10">
        <LoginForm />
      </section>
      <section className="mt-24 bg-indigo-1000 py-12">
        <Footer />
      </section>
    </>
  )
}
