"use client";

import { useRouter, useParams } from "next/navigation";

import ReactPlayer from "react-player";

import VideoEmbed from "@/app/components/VideoEmbed";

export default function Player() {
  const { source } = useParams();
  const router = useRouter();
  console.log(source);
  if (!source) {
    return <div></div>;
  }

  return (
    <main className="min-h-screen w-full bg-[#272827] py-10">
      <div className="bg-[#242525] max-7xl container mx-auto py-7 px-3 text-[#a4a19c]">
        <div className="flex justify-center">
          {/* <ReactPlayer url={source} controls={true} /> */}
          <VideoEmbed src={decodeURIComponent(source)} />
        </div>
      </div>
    </main>
  );
}
