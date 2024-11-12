"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "./components/Sidebar";
import { Helmet } from "react-helmet";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "SportStream",
//   description: "Free sport streaming",
// };

export default function RootLayout({ children }) {
  const [leagues, setLeagues] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false); // State to control sidebar on mobile

  const toggleSidebar = () => {
    setSidebarOpen((prevState) => !prevState);
  };

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
  ];
  return (
    <html lang="en">
      <body className={`${inter.className} w-full h-full`}>
        <Helmet>
          <title>SportStream - Спортын шууд дамжуулалт</title>
        </Helmet>
        <Navbar toggleSidebar={toggleSidebar} />
        <div className="flex flex-row min-h-screen">
          <Sidebar
            className={`absolute md:hidden w-full z-50 bg-[#242525] mt-4 transition-transform duration-300 ease-in-out ${
              sidebarOpen ? "translate-x-0" : "-translate-x-full"
            }`}
            toggleSidebar={toggleSidebar}
            categories={categories}
            leagues={leagues}
          />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
