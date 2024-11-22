"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "./components/Sidebar";
import { Helmet } from "react-helmet";
import { usePathname } from "next/navigation"; // To access the current route

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [leagues, setLeagues] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false); // State to control sidebar on mobile
  const pathname = usePathname(); // Hook to get the current route

  const toggleSidebar = () => {
    setSidebarOpen((prevState) => !prevState);
  };

  // Fetch leagues (as per your current logic)
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

  // Categories for your sidebar
  const categories = [
    { name: "Soccer", icon: "/soccer.svg" },
    { name: "Volleyball", icon: "/volleyball.svg" },
    { name: "Basketball", icon: "/basketball.svg" },
  ];

  // Track page views for Google Analytics
  useEffect(() => {
    const GA_MEASUREMENT_ID = "G-H5H3F85W88"; // Hardcoded Google Analytics Measurement ID

    if (GA_MEASUREMENT_ID && window.gtag) {
      window.gtag("config", GA_MEASUREMENT_ID, {
        page_path: pathname, // Set current path
      });
    }
  }, [pathname]); // Re-run the effect on route change

  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Helmet>
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=G-H5H3F85W88`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-H5H3F85W88');
              `,
            }}
          />
        </Helmet>

        <title>SportStream - Спортын шууд дамжуулалт</title>
      </head>
      <body className={`${inter.className} w-full h-full`}>
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
