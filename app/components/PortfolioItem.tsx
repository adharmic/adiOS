import Image from "next/image";
import { PortfolioItemType } from "../types/PortfolioItemType";

type PortfolioItemProps = {
  portItem: PortfolioItemType;
};

export default function PortfolioItem({ portItem }: PortfolioItemProps) {
  console.log(portItem);
  return (
    <div>
      <div className="glass flex text-3xl p-4 gap-4 items-center">
        <div className="p-4 border border-white rounded-xl w-32 h-32">
          <Image
            src={portItem.icon}
            width={400}
            height={400}
            alt={portItem.title}
          />
        </div>
        <div className="flex flex-col gap-2 justify-center">
          {portItem.link !== null ? (
            <a href={portItem.link} target="_blank">
              <h1>{portItem.title}</h1>
            </a>
          ) : (
            <h1>{portItem.title}</h1>
          )}
          <p className="text-xl text-[rgba(255,255,255,0.6)]">
            {portItem.description}
          </p>
          <div className="flex gap-2">
            {portItem.tags.map((tag, index) => {
              return (
                <div
                  key={index}
                  className="glass text-base pl-2 pr-2 pt-1 pb-1 !rounded-2xl !bg-[#1621c9]/20 "
                >
                  {tag}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
