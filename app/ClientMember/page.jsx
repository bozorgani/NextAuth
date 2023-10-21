"use client";
  
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
        <h1>member Client Session</h1>
        <p>{session?.user?.email}</p>
        <p>{session?.user?.role}</p>
    </div>
  )
}

export default Member