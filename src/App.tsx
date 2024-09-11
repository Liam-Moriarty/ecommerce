import Navbar from "./layout/navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <main className="relative w-full h-full">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route path="/" element={"<Home />"} />
            <Route path="women" element={"<Women />"} />
            <Route path="man" element={"<Men />"} />
            <Route path="kids" element={"<Kids />"} />
            <Route path="sports" element={"<Sports />"} />
            <Route path="brands" element={"<Brands />"} />
            <Route path="new" element={"<New />"} />
            <Route path="sale" element={"<Sale />"} />
          </Route>
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
