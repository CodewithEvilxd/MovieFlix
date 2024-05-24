import { PiTelevisionSimpleFill } from "react-icons/pi";
import { BiSolidMoviePlay } from "react-icons/bi";
import { IoHomeSharp } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";

export const navigation = [
  {
    label: "Tv Shows",
    href: "tv",
    icon: PiTelevisionSimpleFill,
  },
  {
    label: "Movies",
    href: "movie",
    icon: BiSolidMoviePlay,
  },
];

export const mobileNavigation = [
  {
    label: "Home",
    href: "/",
    icon: IoHomeSharp,
  },
  ...navigation,
  {
    label: "search",
    href: "/search",
    icon: IoSearchOutline,
  },
];
