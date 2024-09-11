import { RiShoppingBag3Line } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";

export const navbarIcons = [
  {
    icons: <RiShoppingBag3Line className="h-5 w-5" />,
    label: "Cart",
    className: "md:left-1 max-md:hidden",
  },
  {
    icons: <FaRegHeart className="h-5 w-5" />,
    label: "Favorites",
    className: "md:-left-2 max-md:hidden",
  },
];

export const navigationLinks = [
  { label: "Women", path: "/women" },
  { label: "Man", path: "/man" },
  { label: "Kids", path: "/kids" },
  { label: "Sports", path: "/sports" },
  { label: "Brands", path: "/brands" },
  { label: "New", path: "/new" },
  { label: "Sale", path: "/sale" },
];
