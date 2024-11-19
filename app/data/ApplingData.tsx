import Portfolio from "../applings/Portfolio";
import { Appling } from "../types/Appling";
import Toolbox from "../applings/Toolbox";

export const ApplingsData: Array<Appling> = [
  {
    title: "Toolbox",
    icon: "/toolbox.png",
    component: <Toolbox />,
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
