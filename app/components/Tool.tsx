import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface ToolProps {
  name: string;
  icon: string;
  familiarity: number;
}

export default function Tool({ name, icon }: ToolProps) {
  const { contextSafe } = useGSAP();
  const badge = useRef(null);
  const info = useRef(null);

  const onEnter = contextSafe(() => {
    gsap.to(badge.current, { duration: 0.25, rotation: 180 });
    gsap.to(info.current, { duration: 0.25, autoAlpha: 1 });
  });

  const onExit = contextSafe(() => {
    gsap.to(badge.current, { rotation: 0 });
    gsap.to(info.current, { autoAlpha: 0 });
  });

  return (
    <div
      ref={badge}
      onMouseEnter={onEnter}
      onMouseLeave={onExit}
      className="badge menuBar h-32 flex items-center justify-center cursor-pointer"
    >
      <div className="w-full h-full flex items-center justify-center transition-all">
        <div className="w-20 aspect-square">
          <Image src={icon} height={400} width={400} alt={name} />
        </div>
      </div>
      <div className="w-full h-full absolute invisible" ref={info}>
        <div className="rotate-180 relative bg-[rgba(0,0,0,0.8)] w-full h-full text-white text-xl flex items-center justify-center flex-col gap-2">
          <div className="menuBar w-full flex items-center justify-center border border-white p-2 font-bold">
            {name}
          </div>
        </div>
      </div>
    </div>
  );
}
