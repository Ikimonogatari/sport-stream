// components/Sidebar.js
import Link from "next/link";
import Image from "next/image";

export default function Sidebar({ categories, leagues }) {
  return (
    <div className="flex flex-col lg:max-w-[310px] border-r-[1px] border-[#42524d] w-full px-3">
      <div className="bg-[#20926d] px-3 py-1">
        <span className="text-white">Choose Sport</span>
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
            <Link href={`/leagues/${league.name}`}>{league.name}</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
