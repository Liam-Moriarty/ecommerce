import { BrowserRouter, Routes, Route } from "react-router-dom";
import Women from "./page/women/Women";
import RootLayout from "./layout/RootLayout";
import Home from "./page/home/Home";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <RootLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="women" element={<Women />} />
          <Route path="man" element={"<Men />"} />
          <Route path="kids" element={"<Kids />"} />
          <Route path="sports" element={"<Sports />"} />
          <Route path="brands" element={"<Brands />"} />
          <Route path="new" element={"<New />"} />
          <Route path="sale" element={"<Sale />"} />
        </Routes>
      </RootLayout>
    </BrowserRouter>
  );
};

export default App;
