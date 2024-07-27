"use client";
import { useRouter, useSearchParams } from "next/navigation";
import ReactPlayer from "react-player";
import { useEffect, useState } from "react";
import VideoEmbed from "../components/VideoEmbed";

export default function Player() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [source, setSource] = useState(null);

  useEffect(() => {
    const sourceParam = searchParams.get("source");
    if (sourceParam) {
      setSource(decodeURIComponent(sourceParam));
    } else {
      router.push("/"); // Redirect to home if no source is provided
    }
  }, [searchParams, router]);

  if (!source) {
    return <div>Loading...</div>;
  }

  return (
    <main className="min-h-screen w-full bg-[#272827] py-10">
      <div className="bg-[#242525] max-7xl container mx-auto py-7 px-3 text-[#a4a19c]">
        {/* <div className="flex justify-center">
          <ReactPlayer url={source} controls={true} />
        </div> */}
        <div className="flex justify-center">
          <VideoEmbed src={source} />
        </div>
      </div>
    </main>
  );
}