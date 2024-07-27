"use client";

import Image from "next/image";
import axios from "axios";
import { useEffect, useState } from "react";
import VideoEmbed from "./components/VideoEmbed";

export default function Home() {
  const [matches, setMatches] = useState([]);
  const [category, setCategory] = useState("Basketball");

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/matches/by-league`,
          {
            params: {
              league_name: category,
            },
          }
        );
        setMatches(response.data);
      } catch (error) {
        console.error("Error fetching matches:", error);
      }
    };

    fetchMatches();
  }, [category]);

  const categories = [
    { name: "Soccer", icon: "/soccer.svg" },
    { name: "Volleyball", icon: "/volleyball.svg" },
    { name: "Basketball", icon: "/basketball.svg" },
  ];

  return (
    <main className="min-h-screen w-full bg-[#272827] py-10">
      <div className="bg-[#242525] max-7xl container mx-auto py-7 px-3 text-[#b7b3ad]">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-0 mt-7">
          <div className="flex flex-col lg:max-w-[310px] border-r-[1px] border-[#42524d] w-full px-3">
            <div className="bg-[#20926d] px-3 py-1">
              <span className="text-white">Choose Sport</span>
            </div>
            <div className="grid grid-cols-3 gap-3 p-3">
              {categories.map((cat) => (
                <div
                  key={cat.name}
                  className="rounded-sm flex justify-center items-center px-1 py-2 bg-[#20926d] cursor-pointer"
                  onClick={() => setCategory(cat.name)}
                >
                  <Image
                    src={cat.icon}
                    width={24}
                    height={24}
                    alt="sports-icon"
                    className="mx-auto"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col w-full px-3">
            <VideoEmbed
              src={
                "https://1stream.eu/title-game/olympic-paris-2024/cnbc-live-stream/9285?embed=1"
              }
            />
            <div className="bg-[#20926d] px-3 py-1">
              <span className="text-white"> {category} Matches </span>
            </div>
            <div className="flex flex-col p-3 gap-3">
              <span className="text-base sm:text-xl md:text-2xl">
                {category} streams schedule
              </span>
              <span className="text-xs md:text-sm">
                Watch {category} games live, we offer multiple streams for every
                live game. Follow your favorite {category} team on your
                smartphone, tablet, PC and any other connected device.
              </span>
              <div className="flex flex-col mt-5">
                {matches.map((m, i) => (
                  <a
                    key={i}
                    target="_blank"
                    href={`/matches/${m.id}`}
                    className="px-4 py-3 w-full flex flex-col gap-1 md:gap-0 md:flex-row justify-between md:items-center border-y-[1px] border-[#494b49]"
                  >
                    <div className="flex flex-row items-center justify-between md:justify-start gap-1 sm:gap-3">
                      <div className="flex flex-row items-center gap-1 sm:gap-3">
                        <Image
                          src={"/basketball.svg"}
                          width={14}
                          height={14}
                          alt="sports-d"
                          className="w-[10px] h-[10px] mt-[2px] sm:mt-0 sm:w-[14px] sm:h-[14px]"
                        />
                        <span className="text-sm sm:text-base">
                          {m.team1name}
                        </span>
                      </div>
                      {m.isLive && (
                        <span className="block md:hidden text-[8px] sm:text-sm bg-red-600 text-white rounded-full px-[6px] sm:px-3 pb-1">
                          Live
                        </span>
                      )}
                    </div>

                    <div className="flex flex-row items-center gap-3">
                      {m.isLive && (
                        <span className="text-sm hidden md:block bg-red-600 text-white rounded-full px-3 pb-1">
                          Live
                        </span>
                      )}
                      <span className="text-sm bg-[#2d2f2f] rounded-full px-3 py-1">
                        {m.datetime}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
