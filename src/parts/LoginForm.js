import React from 'react';
import users from '@/src/constants/api/users';
import { setAuthorizationHeader } from "../configs/axios";
import { useRouter } from "next/router";
import useForm from "../helpers/hooks/useForm";

// Redux
import { useDispatch } from "react-redux";
import { populateProfile } from '@/src/store/actions/users';

export default function LoginForm() {
  const [{ email, password }, setState] = useForm({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

  const router = useRouter();

  async function submit(e) {
    e.preventDefault();
    try {
      const user = await users.login({ email, password })
      setAuthorizationHeader(user.data.token);

      const detail = await users.details();
      localStorage.setItem("BWAMICRO:token", JSON.stringify({
        ...user.data, email: email
      }));

      // Menyimpan data payload ke redux
      dispatch(populateProfile(detail.data))

      const production = process.env.NEXT_PUBLIC_FRONTPAGE_URL === "https://micro.vercel.app" ? "Domain = micro.vercel.app" : "";

      const redirect = localStorage.getItem("BWAMICRO:redirect")
      const userCookie = {
        name: detail.data.name,
        avatar: detail.data.avatar,
      }

      const expires = new Date(
        new Date().getTime() + 7 * 24 * 60 * 60 * 1000
      )

      document.cookie = `BWAMICRO:user=${JSON.stringify(userCookie)}; expires=${expires.toUTCString()}; path:/; ${production}`;
      router.push(redirect || "/")
    } catch (error) {
      console.log("error :", error)
    }
  }

  return (
    <div className="flex justify-center items-center pb-24">
      <div className="w-3/12">
        <h1 className="text-4xl text-gray-900 mb-6">
          <span className="font-bold">Continue</span> Study, <br />Finish your <span className="font-bold">Goals</span>
        </h1>
        <form onSubmit={submit} action="">
          <div className="flex flex-col mb-4">
            <label htmlFor="email" className="text-lg mb-2">Email Address</label>
            <input name="email" type="email" className="bg-white focus:outline-none border w-full px-6 py-3 border-gray-600 focus:border-teal-500"
              placeholder="Your email address" value={email} onChange={setState} />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="password" className="text-lg mb-2">Password Address</label>
            <input name="password" type="password" className="bg-white focus:outline-none border w-full px-6 py-3 border-gray-600 focus:border-teal-500" placeholder="Your password address" value={password} onChange={setState} />
          </div>
          <button type="submit" className="bg-orange-500 hover:bg-orange-400 transition-all duration-200 focus:outline-none shadow-inner text-white px-6 py-3 mt-4 w-full">Daftar Now</button>
        </form>
      </div>

      <div className="w-1/12"></div>

      <div className="w-5/12 flex justify-end pt-24 pr-16">
        <div className="relative" style={{ width: 369, height: 440 }}>
          <div className="absolute border-indigo-700 border-2 -mt-8 -ml-16 left-0" style={{ width: 324, height: 374 }}></div>
          <div className="absolute w-full -mb-8 -ml-8">
            <img src="/images/tamara.jpg" alt="Hero Banner" />
          </div>
          <div className="absolute z-10 bottom-0 right-0 bg-white py-3 px-4 -mr-12" style={{ width: 290 }}>
            <p className="text-gray-900 mb-2">Metode belajar yang santai seperti nonton drakor di Netflix</p>
            <div className="text-gray-600">Alyssa, Apps Developer</div>
          </div>
        </div>
      </div>
    </div>
  )
}
