import React from 'react';
import { useRouter } from "next/router";
import Link from "next/link";
import Logo from '@/public/images/logo.svg';
import propTypes from 'prop-types'

export default function Header({ onLight }) {
  const router = useRouter();
  const linkColor = onLight ? "text-gray-900" : "text-white";
  const linkCTA = router.pathname.indexOf("/login") > -1 ? `${process.env.NEXT_PUBLIC_BASE_URL}/register` : `${process.env.NEXT_PUBLIC_BASE_URL}/login`;
  const textCTA = router.pathname.indexOf("/login") > -1 ? `Daftar` : `Masuk`;


  return (
    <header className="flex justify-between items-center">
      <div style={{ height: 54 }}>
        <Logo className={onLight ? "on-light" : "on-dark"}></Logo>
      </div>
      <ul className="flex">
        <li>
          <a href="/" className={[linkColor, "hover:text-teal-500 text-lg px-6 py-3 font-medium"].join(" ")}>Home</a>
        </li>
        <li>
          <Link href="/" className={[linkColor, "hover:text-teal-500 text-lg px-6 py-3 font-medium"].join(" ")}>Pricing</Link>
        </li>
        <li>
          <Link href="/" className={[linkColor, "hover:text-teal-500 text-lg px-6 py-3 font-medium"].join(" ")}>Features</Link>
        </li>
        <li>
          <Link href="/" className={[linkColor, "hover:text-teal-500 text-lg px-6 py-3 font-medium"].join(" ")}>Story</Link>
        </li>
        <li>
          <Link href={linkCTA} className="bg-indigo-700 hover:bg-indigo-800 transition-all duration-200 text-white hover:text-teal-500 text-lg px-6 py-3 font-medium ml-6">
            {textCTA}
          </Link>
        </li>
      </ul>
    </header>
  )
}

Header.propTypes = {
  onLight: propTypes.bool,
}