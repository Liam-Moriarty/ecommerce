import Interaction from "./Interaction";
import Navigation from "./Navigation";

const Navbar: React.FC = () => {
  return (
    <div className="flex flex-col gap-2 w-full h-auto">
      <Interaction />
      <Navigation />
    </div>
  );
};

export default Navbar;
