import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    <div className="w-full h-full flex justify-center items-center ">
      <div className="flex items-center gap-2 md:w-10/12 xs:w-4/6 w-full bg-background p-2.5 rounded-default">
        <FaSearch className="text-gray text-base font-normal" />
        <input type="text" placeholder="Search..." className="input" />
      </div>
    </div>
  );
};

export default Search;
