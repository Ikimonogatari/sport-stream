"use client";
import { useParams, useRouter } from "next/navigation";
import axios from "axios";
import { useEffect, useState } from "react";

export default function MatchDetail() {
  const router = useRouter();
  const params = useParams();
  const { matchId } = params; // assuming the URL parameter is named 'plan'
  const [sources, setSources] = useState(null);

  useEffect(() => {
    if (matchId) {
      const fetchMatch = async () => {
        try {
          const response = await axios.get(
            `http://localhost:4000/matches/${matchId}/stream_sources`
          );
          setSources(response.data);
          console.log(response.data);
        } catch (error) {
          console.error("Error fetching match:", error);
        }
      };

      fetchMatch();
    }
  }, [matchId]);

  if (!sources) {
    return <div>Loading...</div>;
  }

  return (
    <main className="min-h-screen w-full bg-[#272827] py-10">
      <div className="bg-[#242525] max-7xl container mx-auto py-7 px-3 text-[#a4a19c]">
        <div className="flex flex-row gap-3">
          {sources.map((source, index) => (
            <a
              key={index}
              href={`/player?source=${encodeURIComponent(source.link)}`}
              className="px-4 py-2 min-w-[97px] bg-[#2d2f2f] hover:bg-[#a4a19c] hover:text-black transition-all duration-150 rounded-3xl"
            >
              Source {index + 1}
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
