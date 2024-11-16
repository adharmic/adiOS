"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Loader from "./components/Loader";
import MenuBar from "./components/MenuBar";
import Viewport from "./components/Viewport";
import { ReactElement, useState } from "react";
import { App } from "./types/App";
import Window from "./components/Window";

export default function Home() {
  const [openWindows, setOpenWindows] = useState<Array<ReactElement>>([
    <Window title="test" color="bg-coral"></Window>,
  ]);

  const apps: Array<App> = [
    { title: "Toolbox", icon: "/toolbox.png" },
    { title: "Portfolio", icon: "/portfolio.png" },
  ];

  useGSAP(() => {
    let tl = gsap.timeline();

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
  console.log(apps);

  return (
    <div className="window p-4 flex flex-col w-full h-full items-center">
      <Loader />
      <MenuBar />
      <Viewport apps={apps} openWindows={openWindows} />
    </div>
  );
}
