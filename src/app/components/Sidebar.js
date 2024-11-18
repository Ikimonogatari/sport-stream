import Link from "next/link";
import Image from "next/image";

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

const iconMapping = {
  NBA: "nba.svg",
  NHL: "nhl.svg",
  MLB: "mlb.svg",
  NFL: "nfl.svg",
  MLS: "mls.png",
  Basketball: "basketball-d.svg",
  Soccer: "soccer-d.svg",
  Volleyball: "volleyball-d.svg",
  "American Football": "american-football-d.svg",
  Tennis: "tennis-d.svg",
  Boxing: "boxing-d.svg",
  Fight: "fight-d.svg",
  Motorsport: "racing-d.svg",
  "Horse Racing": "horse-racing-d.svg",
  Rugby: "rugby-d.svg",
  Cycling: "cycling-d.svg",
  Golf: "golf-d.svg",
  Snooker: "snooker-d.svg",
  "Water Sports": "water-sport-d.svg",
  "Summer Sports": "summer-sport-d.svg",
  "Beach Soccer": "beach-soccer-d.svg",
  Handball: "handball-d.svg",
  Athletics: "summer-sport-d.svg",
  "Beach Volleyball": "beach-volleyball-d.svg",
  Badminton: "badminton-d.svg",
  Tabletennis: "tabletennis-d.svg",
  Rowing: "rowing-d.svg",
  Futsal: "futsal-d.svg",
  "Winter Sports": "winter-sports-d.svg",
  Curling: "curling-d.svg",
  Hockey: "hockey-d.svg",
};

export default function Sidebar({
  categories,
  leagues,
  className,
  toggleSidebar,
}) {
  return (
    <div
      className={`flex flex-col ${className} border-r-[1px] border-[#42524d] px-3 text-white`}
    >
      <div className="bg-[#265ea3] px-3 py-1">
        <span className="font-semibold text-lg">Спортын төрлүүд</span>
      </div>
      <div className="grid grid-cols-3 gap-3 p-3">
        {categories.map((cat) => (
          <Link
            onClick={toggleSidebar}
            href={`/leagues/${cat.name}`}
            key={cat.name}
            className="rounded-sm flex justify-center items-center px-1 py-2 bg-[#265ea3] cursor-pointer"
          >
            <Image
              src={`/${iconMapping[cat.name]}`}
              width={24}
              height={24}
              alt={`${cat.name}-icon`}
            />
          </Link>
        ))}
      </div>
      <div className="flex flex-col px-3 mt-3">
        {leagues?.map((league, i) => (
          <div
            onClick={toggleSidebar}
            key={i}
            className="flex flex-row items-center gap-3 cursor-pointer text-sm p-2 border-t-[1px] border-[#494b49]"
          >
            <Image
              src={`/${iconMapping[league.name]}`}
              width={14}
              height={14}
              alt={``}
            />
            <Link href={`/leagues/${league.name}`}>
              {sportsTranslations[league.name] || league.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
