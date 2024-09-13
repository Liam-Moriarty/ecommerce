import Navbar from "./navbar/Navbar";

interface ChildrenProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<ChildrenProps> = ({ children }) => {
  return (
    <main className="relative w-full h-full">
      <Navbar />
      {children}
    </main>
  );
};

export default RootLayout;
