import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TbHanger } from "react-icons/tb";
import { BiCategory } from "react-icons/bi";
import { RiShoppingBag3Line } from "react-icons/ri";
import { HiOutlineShoppingCart, HiOutlineHome } from "react-icons/hi";
import { FaBars, FaTimes } from "react-icons/fa";
// import { Link} from "react-scroll"

export default function NavBar() {
  const [menu, setMenu] = useState(false);

  const navLinks = [
    {
      id: 1,
      name: "Home",
      path: "/items",
      icon: <HiOutlineHome />,
    },
    {
      id: 2,
      name: "Sort",
      path: "/items",
      icon: <BiCategory />,
    },
    {
      id: 3,
      name: "Wish",
      path: "/items",
      icon: <RiShoppingBag3Line />,
    },
    {
      id: 4,
      name: "New",
      path: "/items/new",
      icon: <TbHanger />,
    },
    {
      id: 5,
      name: "Cart",
      path: "/items",
      icon: <HiOutlineShoppingCart />,
    },
  ];
  return (
    <nav className="flex justify-between items-center bg-slate-900 text-slate-100">
      <div>
        <Link to="/items">
          <h1 className="font-signature text-5xl p-4 ml-2">Mariolle</h1>
        </Link>
      </div>
      <div>
        <ul className="hidden  lg:flex justify-between px-6">
          {navLinks.map(({ id, name, path, icon }) => (
            <li
              key={id}
              path={path}
              className="px-10 hover:text-pink-500 hover:scale-105 duration-200"
            >
              <Link to="/items">{icon}</Link>
              <Link to="/items">{name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <button className="border rounded p-1 mr-2 hover:bg-pink-500 hover:border-none">
          Sign up
        </button>
      </div>
      <div
        onClick={() => setMenu(!menu)}
        className="cursor-pointer pr-4 z-10 text-gray-400 lg:hidden"
      >
        {menu ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {menu && (
        <ul className="flex flex-col justify-center items-center absolute top-0 right-0 w-96 h-screen bg-slate-900">
          {navLinks.map(({ id, name, path, icon }) => (
            <li
              key={id}
              path={path}
              className="flex justify-start px-4 py-6 text-4xl hover:text-pink-500 hover:scale-105 duration-200"
            >
              <Link to="/items">
                {icon}
                {name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
