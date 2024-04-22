import React from "react";

function Navbar() {
  return (
    <div className="bg-[#20926d] w-full">
      <div className="max-w-7xl container mx-auto px-7 py-7 flex flex-row justify-center items-center gap-5 text-sm text-[#c9d6d5]">
        <a href="/" className="absolute left-7 text-2xl font-bold">
          SportStream.mn
        </a>
        <a>NBA STREAMS</a>
        <a>NHL STREAMS</a>
        <a>MLB STREAMS</a>
        <a>MMA STREAMS</a>
        <a>BOXING STREAMS</a>
        <a>NFL STREAMS</a>
        <a>CFG STREAMS</a>
        <a>MOTOR SPORTS</a>
      </div>
    </div>
  );
}

export default Navbar;
