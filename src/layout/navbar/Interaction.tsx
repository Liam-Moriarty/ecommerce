import { navbarIcons } from "../../constants";
import profile from "../../assets/lucifer.png";
import { Link } from "react-router-dom";
import Breakpoints from "../../customHooks/Breakpoints";
import Search from "../../components/Search";

const Icons = ({ isTabletOrMobile }: { isTabletOrMobile: boolean }) => {
  return (
    <div className="flex justify-end items-center w-full h-10 md:gap-6 gap-2 ">
      {navbarIcons.map((item, index) => (
        <div
          key={index}
          className={`${
            isTabletOrMobile
              ? "rounded-full h-7 w-7 flex justify-center items-center cursor-pointer hover:bg-background ease-in-out duration-300"
              : "relative"
          }`}
        >
          {isTabletOrMobile ? (
            item.icons
          ) : (
            <span className="rounded-full h-10 w-10 flex justify-center items-center cursor-pointer hover:bg-background ease-in-out duration-300">
              {item.icons}
            </span>
          )}
          <p className={`absolute ${item.className} font-semibold text-sm`}>
            {item.label}
          </p>
        </div>
      ))}

      <img
        src={profile}
        alt="profile-pic"
        className="object-cover rounded-full h-9 w-9 flex justify-center items-center cursor-pointer"
      />
    </div>
  );
};

const Interaction = () => {
  const { isTabletOrMobile } = Breakpoints();

  return (
    <div className="w-full h-full flex md:justify-between md:items-center md:flex-row flex-col md:gap-0 gap-10 md:py-5 md:px-16 py-3 px-5">
      <div className="w-full h-full flex justify-between items-center max-md:mt-10">
        <Link
          to="/"
          className="text-black font-bold text-2xl md:w-full h-10 flex items-center cursor-pointer"
        >
          NE.<span className="text-gray h-10 flex items-center">X</span>
        </Link>

        {isTabletOrMobile && <Icons isTabletOrMobile={isTabletOrMobile} />}
      </div>

      {!isTabletOrMobile ? (
        <>
          <Search />
          <Icons isTabletOrMobile={isTabletOrMobile} />
        </>
      ) : (
        <>
          <Search />
        </>
      )}
    </div>
  );
};

export default Interaction;
