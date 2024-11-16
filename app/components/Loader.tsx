import Image from "next/image";

export default function Loader() {
  return (
    <div className="loader flex flex-col w-screen h-screen rounded items-center justify-center">
      <div className="window w-1/2 h-1/3 bg-sand rounded-2xl border-4 border-foreground flex flex-col">
        <div className="heading p-4 w-full bg-coral rounded-t-xl border-b-4 border-foreground justify-between items-center flex">
          <div className="title text-5xl">Initializing Operating System</div>
          <div className="w-12 border-4 border-foreground aspect-square rounded-full bg-white">
            <Image src="/close.svg" alt="close" width={40} height={40} />
          </div>
        </div>
        <div className="content w-full h-full p-4 flex flex-col justify-evenly items-center">
          <div className="text-4xl">Loading...</div>
          <div className="progress border-4 border-foreground w-3/4 h-1/3 rounded-2xl p-2 flex gap-2">
            {new Array(12).fill(null).map((_, index) => {
              return (
                <div
                  key={index}
                  className="scale-0 progress-block w-1/12 h-full bg-foreground rounded-xl"
                ></div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
