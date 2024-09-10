import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="flex flex-col gap-2 w-full h-32">
      {/* Interactions */}
      <div className="w-full flex justify-between items-center py-5 px-16">
        <div className="w-full h-full">
          <h1 className="text-black font-bold text-2xl">
            BR.<span className="text-gray">F</span>
          </h1>
        </div>

        <div className="w-full h-full flex justify-center items-center">
          <div className="flex items-center gap-2 w-6/12 bg-background p-2.5        rounded-default">
            <FaSearch className="text-gray text-base font-normal" />
            <input type="text" placeholder="Search..." className="input" />
          </div>
        </div>

        <div className="flex justify-end items-center w-full h-full">
          <div>ICONS/PROFILE</div>
        </div>
      </div>

      {/* Navigations */}
      <div className="w-full flex justify-start gap-4 items-center py-5 px-16"></div>
    </div>
  );
};

export default Navbar;
