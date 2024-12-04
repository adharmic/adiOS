import { useGSAP } from "@gsap/react";
import { InfoCircle } from "iconoir-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

type StartMenuProps = {
  isHidden: boolean;
  setIsHidden: (isHidden: boolean) => void;
};

export default function StartMenu({ isHidden, setIsHidden }: StartMenuProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const offset = "-1000px";
  const [initialPosition, setInitialPosition] = useState("-1000px");

  useGSAP(
    () => {
      if (isHidden) {
        gsap.fromTo(
          wrapperRef.current,
          {
            translateX: initialPosition,
          },
          {
            duration: 0.25,
            translateX: offset,
          },
        );
        if (initialPosition == offset) {
          setInitialPosition("0");
        }
      } else {
        gsap.fromTo(
          wrapperRef.current,
          {
            translateX: offset,
          },
          {
            duration: 0.25,
            translateX: 0,
          },
        );
      }
    },
    { dependencies: [isHidden] },
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node) &&
        !document.querySelector(".startButton")?.contains(event.target as Node)
      ) {
        setIsHidden(true);
      }
    };
    document.addEventListener("mouseup", handleClickOutside);
    return () => document.removeEventListener("mouseup", handleClickOutside);
  }, [setIsHidden]);

  return (
    <div
      ref={wrapperRef}
      className="absolute max-h-full max-w-full h-full w-[600px] sm:h-[800px] p-2 left-0 sm:pl-0 pb-[4.5rem] sm:pb-16 bottom-0 pointer-events-none translate-x-[-1000px]"
    >
      <div
        className={
          "h-full w-full pointer-events-auto overflow-hidden flex flex-col menuBarInverted justify-between items-center "
        }
      >
        <div className="p-6 menuBar w-full self-start text-3xl">
          Hello, Guest!
        </div>
        <div className="h-full w-full pl-1 pr-1 flex flex-col">
          <div className="bg-sand h-full w-full p-4 text-black flex flex-col items-center justify-evenly max-h-full overflow-y-scroll text-lg sm:text-xl">
            <h1 className="self-start font-bold text-2xl">Welcome to AdiOS!</h1>
            <p>
              This website is meant to be an interactive showcase of my web
              development and design experience.
            </p>
            <p>
              It was made as an homage to Windows XP, and aims to replicate the
              experience of a traditional Operating System.
            </p>
            <p>
              The &apos;applications&apos; are showcases of specific aspects of
              my history, knowledge, and work experience, and can be dragged,
              opened, and closed.
            </p>
          </div>
        </div>
        <div className="h-fit w-full px-1">
          <div className="p-2 bg-background h-full w-full border-t-2 border-cobalt flex items-center justify-center text-cobalt gap-2">
            <InfoCircle color="var(--cobalt)" />
            <p>
              Curious about adiOS? Read about it{" "}
              <a
                className="underline text-cobalt font-bold"
                href="https://satyaloka.org/articles/creating-a-mock-os-in-typescript"
                target="_blank"
              >
                here
              </a>{" "}
              or view the source code{" "}
              <a
                href="https://github.com/adharmic/adiOS"
                className="underline text-cobalt font-bold"
                target="_blank"
              >
                here.
              </a>
            </p>
          </div>{" "}
        </div>
        <div className="menuBar w-full p-4 flex items-center justify-evenly gap-4 text-xl">
          <a
            href="https://github.com/adharmic/"
            target="_blank"
            className="startMenuButton w-full flex p-2 items-center gap-2 text-white border border-[rgba(0,0,0,0)] transition-all"
          >
            <div className="bg-foreground rounded-full h-12 w-12 border border-background flex items-center justify-center">
              <Image
                src="/github.svg"
                alt="Link to my GitHub profile"
                height={48}
                width={48}
              />
            </div>
            GitHub{" "}
          </a>
          <a
            href="https://instagram.com/a.dhar.mic/"
            target="_blank"
            className="startMenuButton w-full flex p-2 items-center gap-2 text-white border border-[rgba(0,0,0,0)] transition-all"
          >
            <div className="bg-foreground rounded-full h-12 w-12 border border-background flex items-center justify-center">
              <Image
                className="rounded-full w-full h-full"
                src="/instagram.svg"
                alt="Link to my Instagram profile"
                height={400}
                width={400}
              />
            </div>
            Instagram{" "}
          </a>
        </div>
      </div>
    </div>
  );
}
