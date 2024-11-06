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

  function formatShortDateToMongolian(dateString) {
    // Parse the date string into a Date object (UTC)
    const date = new Date(dateString);
    date.setHours(date.getHours() - 8);
    // Format the date to Mongolia's timezone (Asia/Ulaanbaatar)
    const options = {
      timeZone: "Asia/Ulaanbaatar",
      hour12: false, // 24-hour format
      weekday: "short",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    };

    const formatter = new Intl.DateTimeFormat("en-US", options);
    const formattedDate = formatter.format(date); // Formatted like "Thu, 11/07/2024, 04:00"

    // Log the formatted date for debugging
    console.log("Formatted Date:", formattedDate);

    // Adjusted regex to match "Thu, 11/07/2024, 04:00"
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

    // Map month and weekday to Mongolian
    const monthMongolian = months[parseInt(month) - 1]; // Convert from 0-indexed
    const weekdayMongolian =
      weekdays[
        ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].indexOf(weekday)
      ];

    // Return the final formatted date in Mongolian
    return `${monthMongolian} ${day}, ${weekdayMongolian} ${hour}:${minute}`;
  }

  return (
    <MatchListLayout>
      <div className="flex flex-col w-full px-3">
        <div className="bg-[#20926d] px-3 py-1">
          <span className="text-white">
            {sportsTranslations[decodedLeague] || decodedLeague}
          </span>
        </div>
        <div className="flex flex-col p-3 gap-3">
          <span className="text-base sm:text-xl md:text-2xl">
            Тоглолтуудын хуваарь -{" "}
            {sportsTranslations[decodedLeague] || decodedLeague}
          </span>
          <span className="text-xs md:text-sm">
            {sportsTranslations[decodedLeague] || decodedLeague}-н тоглолтуудыг
            шууд хүлээн авч үзээрэй. Бид тоглолт бүрд олон стримийн эх сурвалж
            санал болгодог ба өөрийн дуртай багийг цаг алдалгүй дэмжээрэй.
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
                        <span className="text-sm hidden 2xl:block bg-red-600 text-white rounded-full px-3 pb-1">
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
              <>No matches found</>
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
