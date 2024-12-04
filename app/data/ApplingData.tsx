import Portfolio from "../applings/Portfolio";
import { Appling } from "../types/Appling";
import Toolbox from "../applings/Toolbox";
import Biography from "../applings/Biography";
import Contact from "../applings/Contact";
// import Contact from "../applings/Contact";

export const ApplingsData: Array<Appling> = [
  {
    title: "Toolbox",
    icon: "/images/icons/Toolbox.png",
    component: <Toolbox />,
    subtitle:
      "The Toolbox is a list of software I use for my creative processes.",
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
  {
    title: "Contact",
    icon: "/images/icons/Contact.png",
    component: <Contact />,
  },
];
