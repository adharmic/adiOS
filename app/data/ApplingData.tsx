import Portfolio from "../applings/Portfolio";
import { Appling } from "../types/Appling";
import Toolbox from "../applings/Toolbox";
import Biography from "../applings/Biography";
// import Contact from "../applings/Contact";

export const ApplingsData: Array<Appling> = [
  {
    title: "Toolbox",
    icon: "/toolbox.svg",
    component: <Toolbox />,
  },
  {
    title: "Portfolio",
    icon: "/portfolio.svg",
    component: <Portfolio />,
  },
  {
    title: "Biography",
    icon: "/biography.svg",
    component: <Biography />,
  },
  // {
  //   title: "Contact",
  //   icon: "/test.png",
  //   component: <Contact />,
  // },
];
