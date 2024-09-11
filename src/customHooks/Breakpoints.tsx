import { useMediaQuery } from "react-responsive";

const Breakpoints = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 767px)" }); // tablet to low screen devices

  return {
    isTabletOrMobile,
  };
};

export default Breakpoints;
