import { Link } from "react-router-dom";
import { navigationLinks } from "../../constants";
import { useEffect, useState } from "react";

const Navigation = () => {
  const [focusedLink, setFocusedLink] = useState<string | null>(null);

  useEffect(() => {
    const savedFocusedLink = localStorage.getItem("focusedLink");
    if (savedFocusedLink) {
      setFocusedLink(savedFocusedLink);
    }
  }, []);

  const handleFocus = (label: string) => {
    setFocusedLink(label);
    localStorage.setItem("focusedLink", label);
  };

  return (
    <nav
      className="w-full flex justify-start gap-6 items-center md:py-2 md:px-16 py-3 px-5 
    overflow-x-auto no-scrollbar scroll-smooth"
    >
      {navigationLinks.map((links) => (
        <li
          key={links.label}
          className="list-none flex justify-center items-center"
        >
          <Link
            to={links.path}
            className={`font-semibold hover:text-primary focus:text-primary text-base ${
              focusedLink === links.label ? "text-primary" : ""
            }`}
            onClick={() => handleFocus(links.label)}
          >
            {links.label}
          </Link>
        </li>
      ))}
    </nav>
  );
};

export default Navigation;
