// components/Sidebar.js
import Link from "next/link";
import Image from "next/image";

export default function Sidebar({ categories, leagues }) {
  return (
    <div className="flex flex-col lg:max-w-[310px] border-r-[1px] border-[#42524d] w-full px-3">
      <div className="bg-[#20926d] px-3 py-1">
        <span className="text-white">Спортын төрлүүд</span>
      </div>
      <div className="grid grid-cols-3 gap-3 p-3">
        {categories.map((cat) => (
          <Link
            href={`/leagues/${cat.name}`}
            key={cat.name}
            className="rounded-sm flex justify-center items-center px-1 py-2 bg-[#20926d] cursor-pointer"
          >
            <Image src={cat.icon} width={24} height={24} alt="sports-icon" />
          </Link>
        ))}
      </div>
      <div className="flex flex-col px-3 mt-3">
        {leagues?.map((league, i) => (
          <div
            key={i}
            className="cursor-pointer text-sm p-2 border-t-[1px] border-[#494b49]"
          >
            <Link href={`/leagues/${league.name}`}>
              {sportsTranslations[league.name] || league.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
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
