"use client"

import { signIn } from "next-auth/react"

export default function Login() {
  return (
    <div className="bg-green-500 text-white text-sm px-6 py-2 rounded-md ">
      <button onClick={() => signIn()}>Sign In</button>
    </div>
  )
}
