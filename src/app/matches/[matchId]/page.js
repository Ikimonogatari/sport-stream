"use client";
import { useParams } from "next/navigation";
import axios from "axios";
import { useEffect, useState } from "react";

export default function MatchDetail() {
  const params = useParams();
  const { matchId } = params; // Get matchId from URL parameters
  const [sources, setSources] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMatch = async () => {
      if (!matchId) return; // Exit early if no matchId
      try {
        setLoading(true);
        const response = await axios.get(
          `/api/proxy/matches/${matchId}/stream_sources`
        );
        setSources(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching match:", error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchMatch();
  }, [matchId]);

  if (loading) {
    return (
      <div className="min-h-screen w-full bg-[#272827] py-10">
        <div className="bg-[#242525] max-7xl container mx-auto py-7 px-7 text-lg text-[#a4a19c]">
          Уншиж байна...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen w-full bg-[#272827] py-10">
        <div className="bg-[#242525] max-7xl container mx-auto py-7 px-7 text-lg text-[#a4a19c]">
          Видео сурвалж олдсонгүй.
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen w-full bg-[#272827] py-10">
      <div className="bg-[#242525] max-7xl container mx-auto py-7 px-7 text-[#a4a19c]">
        <div className="flex flex-row flex-wrap gap-3">
          {sources.length > 0 ? (
            sources.map((source, index) => (
              <a
                key={index}
                href={
                  source.link.includes("https")
                    ? `https://sportstream.mn/player/${encodeURIComponent(
                        source.source
                      )}`
                    : `http://t.sportstream.mn/player/${encodeURIComponent(
                        source.source
                      )}`
                }
                className="px-4 py-2 min-w-[83px] bg-[#2d2f2f] hover:bg-[#a4a19c] hover:text-black transition-all duration-150 rounded-3xl"
              >
                Үзэх {index + 1}
              </a>
            ))
          ) : (
            <span className="text-lg">
              Одоогоор видео сурвалж олдсонгүй. (Тоглолт эхэлсэн бол 10 секунд
              хүлээгээд дахин refresh хийнэ үү)
            </span>
          )}
        </div>
      </div>
    </main>
  );
}
