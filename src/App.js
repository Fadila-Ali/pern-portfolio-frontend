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

function App() {
  const [darkToggle, setDarkToggle] = useState(false);
  return (
    <div
      className={`h-screen w-full flex-col text-gray-700 bg-[#fbfbf9] dark:bg-[#121212] dark:text-gray-100 ${
        darkToggle && "dark"
      }`}
    >
      <Router>
        <NavBar />
        <main className="text-gray-700 bg-[#fbfbf9] dark:bg-[#121212] dark:text-gray-100 p-6 h-full">
          <div className="inline text-gray-700 bg-[#fbfbf9] dark:bg-[#121212] dark:text-gray-100 relative left-[98%]">
            <button
              onClick={() => setDarkToggle(!darkToggle)}
              className="p-2 text-2xl bg-slate-200 text-purple-600 dark:bg-slate-700 rounded-lg"
            >
              {darkToggle ? <FaMoon /> : <BsSunFill />}
            </button>
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/items" element={<Index />} />
            <Route path="/items/new" element={<New />} />
            <Route path="/items/:id" element={<Show />} />
            <Route path="/items/:id/edit" element={<Edit />} />
            <Route path="*" elememt={<Error />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
