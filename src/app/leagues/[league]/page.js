"use client";
import { useParams } from "next/navigation";
import axios from "axios";
import { useEffect, useState } from "react";
import MatchListLayout from "@/app/components/MatchListLayout";

export default function LeaguePage() {
  const params = useParams();
  const { league } = params;
  const [matches, setMatches] = useState(null);
  const [error, setError] = useState(false);
  console.log(league);
  const decodedLeague = league ? decodeURIComponent(league) : "";
  console.log(decodedLeague);
  useEffect(() => {
    if (!decodedLeague) return;

    const fetchMatches = async () => {
      try {
        const response = await axios.get(`/api/proxy/matches/by-league`, {
          params: { league_name: decodedLeague },
        });
        const sortedMatches = response.data.sort(
          (a, b) => new Date(a.datetime) - new Date(b.datetime)
        );
        setMatches(sortedMatches);
      } catch (error) {
        console.error("Error fetching matches:", error);
        setError(true);
      }
    };

    fetchMatches();
  }, [decodedLeague]);

  return (
    <MatchListLayout>
      <div className="flex flex-col w-full px-3">
        <div className="bg-[#20926d] px-3 py-1">
          <span className="text-white"> {decodedLeague} Matches </span>
        </div>
        <div className="flex flex-col p-3 gap-3">
          <span className="text-base sm:text-xl md:text-2xl">
            {decodedLeague} streams schedule
          </span>
          <span className="text-xs md:text-sm">
            Watch {decodedLeague} games live, we offer multiple streams for
            every live game. Follow your favorite {decodedLeague} team on your
            smartphone, tablet, PC and any other connected device.
          </span>
          <div className="flex flex-col mt-5">
            {!error ? (
              !matches ? (
                <>Loading...</>
              ) : (
                matches.map((m, i) => (
                  <a
                    key={i}
                    target="_blank"
                    href={`/matches/${m.id}`}
                    className="px-4 py-3 w-full flex flex-col gap-1 2xl:gap-0 2xl:flex-row justify-between 2xl:items-center border-y-[1px] border-[#494b49]"
                  >
                    <div className="flex flex-row items-center justify-between 2xl:justify-start gap-1 sm:gap-3">
                      <div className="flex flex-row items-center gap-[10px] sm:gap-3">
                        {/* <Image
                              src={"/basketball.svg"}
                              width={14}
                              height={14}
                              alt="sports-d"
                              className="w-[10px] h-[10px] mt-[2px] sm:mt-0 sm:w-[14px] sm:h-[14px]"
                            /> */}
                        <div className="flex flex-col xl:flex-row xl:items-center gap-1 xl:gap-3">
                          <span className="text-sm sm:text-base">
                            {m.team1name}
                          </span>

                          <span className="text-[10px] sm:text-xs md:text-base">
                            ({m.description})
                          </span>
                        </div>
                      </div>
                      {m.isLive && (
                        <span className="block 2xl:hidden text-[8px] sm:text-sm bg-red-600 text-white rounded-full px-[6px] sm:px-3 pb-1">
                          Live
                        </span>
                      )}
                    </div>

                    <div className="flex flex-row items-center gap-3">
                      {m.isLive && (
                        <span className="text-sm hidden 2xl:block bg-red-600 text-white rounded-full px-3 pb-1">
                          Live
                        </span>
                      )}
                      <span className="text-[10px] sm:text-xs md:text-sm bg-[#2d2f2f] rounded-full px-3 py-1">
                        {m.datetime}
                      </span>
                    </div>
                  </a>
                ))
              )
            ) : (
              <>No matches found</>
            )}
          </div>
        </div>
      </div>
    </MatchListLayout>
  );
}
