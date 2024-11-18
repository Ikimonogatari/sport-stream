import Sidebar from "./Sidebar";
import axios from "axios";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function MatchListLayout({ children }) {
  const [leagues, setLeagues] = useState(null);

  useEffect(() => {
    const fetchLeagues = async () => {
      try {
        const response = await axios.get(`/api/proxy/leagues`);
        const sortedLeagues = response.data.sort((a, b) => {
          if (a.name === "NBA") return -1; // Move NBA to the top
          if (b.name === "NBA") return 1;
          return 0; // Keep original order for the rest
        });
        setLeagues(sortedLeagues);
        console.log(response);
      } catch (error) {
        console.error("Error fetching leagues:", error);
      }
    };

    fetchLeagues();
  }, []);

  const categories = [
    { name: "Soccer", icon: "/soccer.svg" },
    { name: "Volleyball", icon: "/volleyball.svg" },
    { name: "Basketball", icon: "/basketball.svg" },
    { name: "Tennis", icon: "/tennis.svg" },
    { name: "Motorsport", icon: "/racing.svg" },
    { name: "Hockey", icon: "/hockey.svg" },
  ];
  return (
    <main className="min-h-screen w-full bg-[#272827] sm:py-10">
      <div className="bg-[#242525] max-7xl container mx-auto py-7 px-3 text-[#b7b3ad] flex">
        <div className="min-w-[310px] hidden md:block">
          <Sidebar
            categories={categories}
            leagues={leagues}
            className={"md:max-w-[310px] w-full"}
          />
        </div>

        <div className="flex-1">{children}</div>
      </div>
    </main>
  );
}
