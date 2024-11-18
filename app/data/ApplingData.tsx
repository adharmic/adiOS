import Portfolio from "../applings/Portfolio";
import { Appling } from "../types/Appling";

export const ApplingsData: Array<Appling> = [
  {
    title: "Toolbox",
    icon: "/toolbox.png",
    component: <div className="text-white">Hello</div>,
  },
  {
    title: "Portfolio",
    icon: "/portfolio.png",
    component: <Portfolio />,
  },
  {
    title: "Biography",
    icon: "/vercel.svg",
    component: <div />,
  },
];
