"use client";

import { getServerSession } from "next-auth"
import { options } from "../api/auth/[...nextauth]/options"
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

// eslint-disable-next-line @next/next/no-async-client-component
const Member = async () => {
  const { data: session } = useSession({
    required : true,
    onUnauthenticated() {
      redirect("/api/auth/signin?callbackUrl=/ClientMember");
    },
  });

  return (
    <div>
        <h1>member client session</h1>
        <p>{session?.user?.email}</p>
        <p>{session?.user?.role}</p>
    </div>
  )
}

export default Member