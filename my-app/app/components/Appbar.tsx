"use client"
import { signIn, signOut, useSession } from "next-auth/react";
function Appbar() {
    const session = useSession()
  return (
    <header className="w-full flex justify-between items-center p-4">
        <h1 className="text-lg font-bold">Muzer</h1>
        {session.data?.user && <button className="bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded-lg" onClick={() => signOut()}>Logout</button>}
        {!session.data?.user && <button className="bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded-lg" onClick={() => signIn()}>Sign in</button>} 
    </header>
  )
}
export default Appbar
