import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-[#272827] py-10">
      <div className="bg-[#242525] max-7xl container mx-auto py-7 px-3 text-[#b7b3ad]">
        <span className=" border-b-[1px] border-[#b7b3ad] w-full">
          Your current time zone: 09:10 (UTC)
        </span>
        <div className="flex flex-row mt-7">
          <div className="flex flex-col max-w-[310px] border-r-[1px] border-[#42524d] w-full px-3">
            <div className="bg-[#20926d] px-3 py-1">
              <span className="text-white">Choose Sport / Reddit Links</span>
            </div>
            <div className="grid grid-cols-5 gap-3 p-3">
              <div className="rounded-sm flex justify-center items-center px-1 py-2 bg-[#20926d]">
                <Image
                  src={"/soccer.svg"}
                  width={24}
                  height={24}
                  alt="sports-icon"
                  className="mx-auto"
                />
              </div>
              <div className="rounded-sm flex justify-center items-center px-1 py-2 bg-[#20926d]">
                <Image
                  src={"/american-football.svg"}
                  width={24}
                  height={24}
                  alt="sports-icon"
                  className="mx-auto"
                />
              </div>
              <div className="rounded-sm flex justify-center items-center px-1 py-2 bg-[#20926d]">
                <Image
                  src={"/basketball.svg"}
                  width={24}
                  height={24}
                  alt="sports-icon"
                  className="mx-auto"
                />
              </div>
              <div className="rounded-sm flex justify-center items-center px-1 py-2 bg-[#20926d]">
                <Image
                  src={"/tennis.svg"}
                  width={24}
                  height={24}
                  alt="sports-icon"
                  className="mx-auto"
                />
              </div>
              <div className="rounded-sm flex justify-center items-center px-1 py-2 bg-[#20926d]">
                <Image
                  src={"/racing.svg"}
                  width={24}
                  height={24}
                  alt="sports-icon"
                  className="mx-auto"
                />
              </div>
              <div className="rounded-sm flex justify-center items-center px-1 py-2 bg-[#20926d]">
                <Image
                  src={"/boxing.svg"}
                  width={24}
                  height={24}
                  alt="sports-icon"
                  className="mx-auto"
                />
              </div>
              <div className="rounded-sm flex justify-center items-center px-1 py-2 bg-[#20926d]">
                <Image
                  src={"/rugby.svg"}
                  width={24}
                  height={24}
                  alt="sports-icon"
                  className="mx-auto"
                />
              </div>
              <div className="rounded-sm flex justify-center items-center px-1 py-2 bg-[#20926d]">
                <Image
                  src={"/fighting.svg"}
                  width={24}
                  height={24}
                  alt="sports-icon"
                  className="mx-auto"
                />
              </div>
              <div className="rounded-sm flex justify-center items-center px-1 py-2 bg-[#20926d]">
                <Image
                  src={"/hockey.svg"}
                  width={24}
                  height={24}
                  alt="sports-icon"
                  className="mx-auto"
                />
              </div>
              <div className="rounded-sm flex justify-center items-center px-1 py-2 bg-[#20926d]">
                <Image
                  src={"/baseball.svg"}
                  width={24}
                  height={24}
                  alt="sports-icon"
                  className="mx-auto"
                />
              </div>
            </div>
            <div className="flex flex-col border-t-[1px] border-[#5c726c] px-3 text-sm">
              <a className="border-b-[1px] border-[#42524d] p-3 flex flex-row gap-2 items-center">
                <Image
                  src={"/nba_15.svg"}
                  width={14}
                  height={14}
                  alt="sports-d"
                  className="bg-white"
                />
                <span>NBA</span>
              </a>
              <a className="border-b-[1px] border-[#42524d] p-3 flex flex-row gap-2 items-center">
                <Image
                  src={"/nhl_15.svg"}
                  width={14}
                  height={14}
                  alt="sports-d"
                  className="bg-white"
                />
                <span>NHL</span>
              </a>
              <a className="border-b-[1px] border-[#42524d] p-3 flex flex-row gap-2 items-center">
                <Image
                  src={"/nfl.svg"}
                  width={14}
                  height={14}
                  alt="sports-d"
                  className="bg-white"
                />
                <span>NFL</span>
              </a>
            </div>
          </div>
          <div className="flex flex-col w-full px-3">
            <div className="bg-[#20926d] px-3 py-1">
              <span className="text-white"> NBA / Basketball </span>
            </div>
            <div className="flex flex-col p-3 gap-3">
              <span className="text-2xl">NBA streams schedule </span>
              <span className="text-sm">
                Watch NBA games live, we offer multiple streams for every live
                game. Follow your favorite NBA team on your smartphone, tablet,
                PC and any other connected device. Backup of reddit nba streams.
              </span>
              <div className="flex flex-col mt-5">
                <a className="px-4 py-3 w-full flex flex-row justify-between items-center border-y-[1px] border-[#494b49]">
                  <div className="flex flex-row items-center gap-3">
                    <Image
                      src={"/nba_15.svg"}
                      width={14}
                      height={14}
                      alt="sports-d"
                      className="bg-white"
                    />
                    <span>NBA</span>
                    <span>Oklahoma City Thunder vs New Orleans Pelicans</span>
                  </div>
                  <span className="text-sm bg-[#2d2f2f] rounded-full px-3 py-1">
                    April 19, 2024 , 5:30 PM{" "}
                  </span>
                </a>
                <a className="px-4 py-3 w-full flex flex-row justify-between items-center border-y-[1px] border-[#494b49]">
                  <div className="flex flex-row items-center gap-3">
                    <Image
                      src={"/nba_15.svg"}
                      width={14}
                      height={14}
                      alt="sports-d"
                      className="bg-white"
                    />
                    <span>NBA</span>
                    <span>Oklahoma City Thunder vs New Orleans Pelicans</span>
                  </div>
                  <span className="text-sm bg-[#2d2f2f] rounded-full px-3 py-1">
                    April 19, 2024 , 5:30 PM{" "}
                  </span>
                </a>
                <a className="px-4 py-3 w-full flex flex-row justify-between items-center border-y-[1px] border-[#494b49]">
                  <div className="flex flex-row items-center gap-3">
                    <Image
                      src={"/nba_15.svg"}
                      width={14}
                      height={14}
                      alt="sports-d"
                      className="bg-white"
                    />
                    <span>NBA</span>
                    <span>Oklahoma City Thunder vs New Orleans Pelicans</span>
                  </div>
                  <span className="text-sm bg-[#2d2f2f] rounded-full px-3 py-1">
                    April 19, 2024 , 5:30 PM{" "}
                  </span>
                </a>
                <a className="px-4 py-3 w-full flex flex-row justify-between items-center border-y-[1px] border-[#494b49]">
                  <div className="flex flex-row items-center gap-3">
                    <Image
                      src={"/nba_15.svg"}
                      width={14}
                      height={14}
                      alt="sports-d"
                      className="bg-white"
                    />
                    <span>NBA</span>
                    <span>Oklahoma City Thunder vs New Orleans Pelicans</span>
                  </div>
                  <span className="text-sm bg-[#2d2f2f] rounded-full px-3 py-1">
                    April 19, 2024 , 5:30 PM{" "}
                  </span>
                </a>
                <a className="px-4 py-3 w-full flex flex-row justify-between items-center border-y-[1px] border-[#494b49]">
                  <div className="flex flex-row items-center gap-3">
                    <Image
                      src={"/nba_15.svg"}
                      width={14}
                      height={14}
                      alt="sports-d"
                      className="bg-white"
                    />
                    <span>NBA</span>
                    <span>Oklahoma City Thunder vs New Orleans Pelicans</span>
                  </div>
                  <span className="text-sm bg-[#2d2f2f] rounded-full px-3 py-1">
                    April 19, 2024 , 5:30 PM{" "}
                  </span>
                </a>
                <a className="px-4 py-3 w-full flex flex-row justify-between items-center border-y-[1px] border-[#494b49]">
                  <div className="flex flex-row items-center gap-3">
                    <Image
                      src={"/nba_15.svg"}
                      width={14}
                      height={14}
                      alt="sports-d"
                      className="bg-white"
                    />
                    <span>NBA</span>
                    <span>Oklahoma City Thunder vs New Orleans Pelicans</span>
                  </div>
                  <span className="text-sm bg-[#2d2f2f] rounded-full px-3 py-1">
                    April 19, 2024 , 5:30 PM{" "}
                  </span>
                </a>
                <a className="px-4 py-3 w-full flex flex-row justify-between items-center border-y-[1px] border-[#494b49]">
                  <div className="flex flex-row items-center gap-3">
                    <Image
                      src={"/nba_15.svg"}
                      width={14}
                      height={14}
                      alt="sports-d"
                      className="bg-white"
                    />
                    <span>NBA</span>
                    <span>Oklahoma City Thunder vs New Orleans Pelicans</span>
                  </div>
                  <span className="text-sm bg-[#2d2f2f] rounded-full px-3 py-1">
                    April 19, 2024 , 5:30 PM{" "}
                  </span>
                </a>
                <a className="px-4 py-3 w-full flex flex-row justify-between items-center border-y-[1px] border-[#494b49]">
                  <div className="flex flex-row items-center gap-3">
                    <Image
                      src={"/nba_15.svg"}
                      width={14}
                      height={14}
                      alt="sports-d"
                      className="bg-white"
                    />
                    <span>NBA</span>
                    <span>Oklahoma City Thunder vs New Orleans Pelicans</span>
                  </div>
                  <span className="text-sm bg-[#2d2f2f] rounded-full px-3 py-1">
                    April 19, 2024 , 5:30 PM{" "}
                  </span>
                </a>
                <a className="px-4 py-3 w-full flex flex-row justify-between items-center border-y-[1px] border-[#494b49]">
                  <div className="flex flex-row items-center gap-3">
                    <Image
                      src={"/nba_15.svg"}
                      width={14}
                      height={14}
                      alt="sports-d"
                      className="bg-white"
                    />
                    <span>NBA</span>
                    <span>Oklahoma City Thunder vs New Orleans Pelicans</span>
                  </div>
                  <span className="text-sm bg-[#2d2f2f] rounded-full px-3 py-1">
                    April 19, 2024 , 5:30 PM{" "}
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
