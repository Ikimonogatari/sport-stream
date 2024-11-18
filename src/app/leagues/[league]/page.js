"use client";
import { useParams } from "next/navigation";
import axios from "axios";
import { useEffect, useState } from "react";
import MatchListLayout from "@/app/components/MatchListLayout";
import Image from "next/image";

export default function LeaguePage() {
  const params = useParams();
  const { league } = params;
  const [matches, setMatches] = useState(null);
  const [filteredMatches, setFilteredMatches] = useState(null); // State to hold filtered matches
  const [error, setError] = useState(false);
  const [searchQuery, setSearchQuery] = useState(""); // State for search query

  const decodedLeague = league ? decodeURIComponent(league) : "";

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
        setFilteredMatches(sortedMatches); // Set all matches initially
      } catch (error) {
        console.error("Error fetching matches:", error);
        setError(true);
      }
    };

    fetchMatches();
  }, [decodedLeague]);

  // Function to format date in Mongolian
  function formatShortDateToMongolian(dateString) {
    const date = new Date(dateString);
    date.setHours(date.getHours() - 8);
    const options = {
      timeZone: "Asia/Ulaanbaatar",
      hour12: false,
      weekday: "short",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    };

    const formatter = new Intl.DateTimeFormat("en-US", options);
    const formattedDate = formatter.format(date);

    const regex = /^([A-Za-z]+), (\d{2})\/(\d{2})\/(\d{4}), (\d{2}):(\d{2})$/;
    const match = formattedDate.match(regex);

    if (!match) {
      throw new Error(`Date format is not as expected. Got: ${formattedDate}`);
    }

    const [, weekday, month, day, year, hour, minute] = match;

    const months = [
      "1 сарын",
      "2 сарын",
      "3 сарын",
      "4 сарын",
      "5 сарын",
      "6 сарын",
      "7 сарын",
      "8 сарын",
      "9 сарын",
      "10 сарын",
      "11 сарын",
      "12 сарын",
    ];

    const weekdays = ["Даваа", "Мягмар", "Лхагва", "Пүрэв", "Бямба", "Ням"];

    const monthMongolian = months[parseInt(month) - 1];
    const weekdayMongolian =
      weekdays[
        ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].indexOf(weekday)
      ];

    return `${monthMongolian} ${day}, ${weekdayMongolian} ${hour}:${minute}`;
  }

  // Update filtered matches based on search query
  const handleSearch = (query) => {
    setSearchQuery(query);
    const filtered = matches?.filter((match) => {
      const searchLower = query.toLowerCase();
      return (
        match.team1name.toLowerCase().includes(searchLower) ||
        match.team2name.toLowerCase().includes(searchLower) ||
        match.description?.toLowerCase().includes(searchLower) ||
        match.datetime.includes(searchLower)
      );
    });
    setFilteredMatches(filtered);
  };

  return (
    <MatchListLayout>
      <div className="flex flex-col w-full">
        <div className="bg-[#265ea3] px-3 py-1">
          <span className="text-white text-lg font-semibold">
            {sportsTranslations[decodedLeague] || decodedLeague}
          </span>
        </div>
        <div className="pt-6 px-3 text-[#b7b3ad] flex flex-row items-center gap-4">
          <a
            href="https://www.facebook.com/lahiunnnn?rdid=f6rsfWFxpibZ4Z4b"
            target="_blank"
            className="w-full"
          >
            <Image
              alt=""
              src={"/banner1.jpg"}
              width={300}
              height={100}
              className="w-full aspect-[620/330]"
            />
          </a>
          <a
            href="https://www.facebook.com/eeneexbet?rdid=EfXgbWEC0iSfmPVW"
            target="_blank"
            className="w-full"
          >
            <Image
              alt=""
              src={"/banner2.jpg"}
              width={300}
              height={100}
              className="w-full aspect-[620/330]"
            />
          </a>
        </div>
        <div className="flex flex-col py-3 sm:p-3 gap-3">
          <span className="text-xs md:text-sm">
            {sportsTranslations[decodedLeague] || decodedLeague}-н тоглолтуудыг
            шууд хүлээн авч үзээрэй. Бид тоглолт бүрд олон стримийн эх сурвалж
            санал болгодог ба өөрийн дуртай багийг цаг алдалгүй дэмжээрэй.
          </span>
          <div className="flex flex-row items-center p-3 mt-4 gap-2 text-sm border border-white/30  rounded-md bg-inherit">
            <Image
              src={"/search-icon.png"}
              alt=""
              width={20}
              height={20}
              className="w-5 h-5"
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              placeholder="Хайх"
              className="outline-none bg-inherit"
            />
          </div>
          <div className="flex flex-col mt-5">
            {!error ? (
              filteredMatches?.length === 0 ? (
                <>Тоглолт олдсонгүй</>
              ) : (
                filteredMatches?.map((m, i) => (
                  <a
                    key={i}
                    target="_blank"
                    href={`/matches/${m.id}`}
                    className="px-4 py-3 w-full flex flex-col gap-1 2xl:gap-0 2xl:flex-row justify-between 2xl:items-center border-y-[1px] border-[#494b49]"
                  >
                    <div className="flex flex-row items-center justify-between 2xl:justify-start gap-1 sm:gap-3">
                      <div className="flex flex-row items-center gap-[10px] sm:gap-3">
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
                          Шууд
                        </span>
                      )}
                    </div>

                    <div className="flex flex-row items-center gap-3">
                      {m.isLive && (
                        <span className="text-sm hidden 2xl:block bg-red-600 text-white rounded-full px-3">
                          Шууд
                        </span>
                      )}
                      <span className="text-[10px] sm:text-xs md:text-sm bg-[#2d2f2f] rounded-full px-3 py-1">
                        {formatShortDateToMongolian(m.datetime)}
                      </span>
                    </div>
                  </a>
                ))
              )
            ) : (
              <>Тоглолт олдсонгүй</>
            )}
          </div>
        </div>
      </div>
    </MatchListLayout>
  );
}

const sportsTranslations = {
  Basketball: "Сагсан бөмбөг",
  Soccer: "Хөлбөмбөг",
  Volleyball: "Гар бөмбөг",
  "American Football": "Америк хөлбөмбөг",
  Tennis: "Теннис",
  Boxing: "Бокс",
  Fight: "Тулаан",
  Motorsport: "Мотоспорт",
  "Horse Racing": "Морин уралдаан",
  Rugby: "Регби",
  Cycling: "Дугуйн спорт",
  Golf: "Гольф",
  Snooker: "Снукер",
  "Water Sports": "Усны спорт",
  "Summer Sports": "Зуны спорт",
  "Beach Soccer": "Элсний хөлбөмбөг",
  Handball: "Гар бөмбөг",
  Athletics: "Хөнгөн атлетик",
  "Beach Volleyball": "Элсний волейбол",
  Badminton: "Бадминтон",
  Tabletennis: "Ширээний теннис",
  Rowing: "Сэлүүрт завь",
  Futsal: "Футзал",
  "Winter Sports": "Өвлийн спорт",
  Curling: "Кёрлинг",
  Hockey: "Хоккей",
};
