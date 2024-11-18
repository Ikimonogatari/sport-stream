import React from "react";
import Image from "next/image";

function Navbar({ toggleSidebar }) {
  return (
    <div className="bg-[#265ea3] w-full">
      <div className="container mx-auto px-7 py-7 flex flex-row justify-between items-center gap-5 text-sm text-white">
        <a href="/" className="text-xl sm:text-2xl font-bold">
          SportStream.mn
        </a>
        <button onClick={toggleSidebar}>
          <Image
            src={"/menu.svg"}
            width={24}
            height={24}
            alt=""
            className={"block md:hidden"}
          />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
