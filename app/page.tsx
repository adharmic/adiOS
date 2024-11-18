"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Loader from "./components/Loader";
import MenuBar from "./components/MenuBar";
import Viewport from "./components/Viewport";
import { ApplingManagerContextProvider } from "./contexts/ApplingManagerContext";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({ subsets: ["latin"] });
export default function Home() {
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".progress-block", {
      scale: 1,
      duration: 0.2,
      stagger: 0.1,
      yoyo: true,
    });

    tl.to(".loader", {
      delay: 0.5,
      scale: 0,
      opacity: 0,
      display: "none",
      duration: 0.2,
    });

    tl.to([".menuBar", ".viewport"], {
      opacity: 1,
      translateY: 0,
      duration: 0.2,
      display: "flex",
    });
  });

  return (
    <div
      style={{ fontFamily: openSans.style.fontFamily }}
      className="w-full h-full overflow-hidden"
    >
      <ApplingManagerContextProvider>
        <div className="window p-4 pt-0 flex flex-col w-full h-full items-center">
          <Loader />
          <Viewport />
          <MenuBar />
        </div>
      </ApplingManagerContextProvider>
    </div>
  );
}
