import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import { FaMoon } from "react-icons/fa";
import { BsSunFill } from "react-icons/bs";
import NavBar from "./Components/NavBar";
import Edit from "./Pages/Edit";
import Error from "./Pages/Error";
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import New from "./Pages/New";
import Show from "./Pages/Show";
import Footer from "./Components/Footer";
import Category from "./Pages/Category";

function App() {
  const [darkToggle, setDarkToggle] = useState(false);
  return (
    <div
      className={`h-full w-full flex-col text-gray-700 bg-purple-50 dark:bg-[#4C516D] dark:text-gray-100 ${
        darkToggle && "dark"
      }`}
    >
      <Router>
        <NavBar />
        <main className="text-gray-700 bg-purple-50 dark:bg-[#4C516D] dark:text-gray-100 p-6 h-full">
            <button
              onClick={() => setDarkToggle(!darkToggle)}
              className="relative left-[95%] p-2 text-2xl bg-slate-200 text-black dark:bg-slate-700 dark:text-white rounded-lg"
            >
              {darkToggle ? <FaMoon /> : <BsSunFill />}
            </button>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/items" element={<Index />} />
            <Route path="/items/new" element={<New />} />
            <Route path="/items/:id" element={<Show />} />
            <Route path="/items/:id/edit" element={<Edit />} />
            <Route path="*" elememt={<Error />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
