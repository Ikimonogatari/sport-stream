"use client";
import { useParams } from "next/navigation";
import VideoEmbed from "@/app/components/VideoEmbed";

export default function Player() {
  const params = useParams();
  const source = params?.source;

  if (!source) {
    return <div>No video source provided.</div>;
  }

  return (
    <main className="min-h-screen w-full bg-[#272827] py-10">
      <div className="bg-[#242525] max-7xl container mx-auto py-7 px-3 text-[#a4a19c]">
        <div className="flex justify-center">
          <VideoEmbed src={decodeURIComponent(source)} />
        </div>
      </div>
    </main>
  );
}
