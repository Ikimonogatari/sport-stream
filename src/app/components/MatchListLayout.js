import Sidebar from "./Sidebar";
import axios from "axios";
import { useEffect, useState } from "react";
// components/MainLayout.js

export default function MatchListLayout({ children }) {
  const [category, setCategory] = useState("Soccer");
  const [leagues, setLeagues] = useState(null);

  useEffect(() => {
    const fetchLeagues = async () => {
      try {
        const response = await axios.get(`/api/proxy/leagues`);
        setLeagues(response.data);
        console.log(response);
      } catch (error) {
        console.error("Error fetching leagues:", error);
      }
    };

    fetchLeagues();
  }, [category]);

  const categories = [
    { name: "Soccer", icon: "/soccer.svg" },
    { name: "Volleyball", icon: "/volleyball.svg" },
    { name: "Basketball", icon: "/basketball.svg" },
  ];
  return (
    <main className="min-h-screen w-full bg-[#272827] py-10">
      <div className="bg-[#242525] max-7xl container mx-auto py-7 px-3 text-[#b7b3ad] flex">
        <Sidebar categories={categories} leagues={leagues} />

        <div className="flex-1">{children}</div>
      </div>
    </main>
  );
}
