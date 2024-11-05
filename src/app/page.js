"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/leagues/Soccer");
  }, []);
  return <main className="min-h-screen w-full bg-[#272827] py-10"></main>;
}
