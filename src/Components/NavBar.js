import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TbHanger } from "react-icons/tb";
import { BiCategory } from "react-icons/bi";
import { RiShoppingBag3Line } from "react-icons/ri";
import { HiOutlineShoppingCart, HiOutlineHome } from "react-icons/hi";
import { FaBars, FaTimes } from "react-icons/fa";

export default function NavBar() {
  const [menu, setMenu] = useState(false);

  //   const navLinks = [
  //     {
  //       id: 1,
  //       name: "Home",
  //       path: "/items",
  //       icon: <HiOutlineHome />,
  //     },
  //     {
  //       id: 2,
  //       name: "Sort",
  //       path: "/items",
  //       icon: <BiCategory />,
  //     },
  //     {
  //       id: 3,
  //       name: "Wish",
  //       path: "/items",
  //       icon: <RiShoppingBag3Line />,
  //     },
  //     {
  //       id: 4,
  //       name: "New",
  //       path: "/items/new",
  //       icon: <TbHanger />,
  //     },
  //     {
  //       id: 5,
  //       name: "Cart",
  //       path: "/items",
  //       icon: <HiOutlineShoppingCart />,
  //     },
  //   ];
  return (
    <nav className="flex justify-between items-center bg-slate-900 text-slate-100">
      <div>
        <Link to="/">
          <h1 className="font-signature text-5xl p-4 ml-2">Mariolle</h1>
        </Link>
      </div>
      <div>
        <ul className="hidden  md:flex justify-between px-6">
          {/* //! The link is not working */}
          {/* {navLinks.map(({ id, name, path, icon }) => (
            <li
              key={id}
              className="px-10 hover:text-pink-500 hover:scale-105 duration-200"
            >
              <Link href={path}>{icon}</Link>
              {name}
            </li>
          ))} */}

          {/* //! This is hard coding Nav Links */}
          <li className="px-5 text-gray-400 hover:text-pink-500">
            <Link to="/items">
              <HiOutlineHome />
              Home
            </Link>
          </li>
          <li className="px-5 text-gray-400 hover:text-pink-500">
            <BiCategory />
            <select className="block w-12 relative right-1 bottom-1.5 appearance-none bg-transparent hover:border-pink-500 px-2 py-2 rounded shadow-2xl leading-tight focus:outline-none focus:shadow-outline">
              <option value="">Sort</option>
              <option value="true" className="text-sm">
                Favs
              </option>
              <option value="false" className="text-sm">
                Not favs
              </option>
            </select>
          </li>
          <li className="px-5 text-gray-400 hover:text-pink-500">
            <Link to="/items/wish">
              <RiShoppingBag3Line />
              wish
            </Link>
          </li>
          <li className="px-5 text-gray-400 hover:text-pink-500">
            <Link to="/items/new">
              <TbHanger />
              New
            </Link>
          </li>
          <li className="px-5 text-gray-400 hover:text-pink-500">
            <Link to="/items/cart">
              <HiOutlineShoppingCart />
              Cart
            </Link>
          </li>
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
        <ul className="flex flex-col justify-center items-center absolute top-0 right-0 w-full h-screen bg-slate-900">
          {/* //! The link is not working */}
          {/* {navLinks.map(({ id, name, path, icon }) => (
            <li
              key={id}
              path={path}
              className="flex justify-start px-4 py-6 text-4xl hover:text-pink-500 hover:scale-105 duration-200"
            >
              <Link to="/items">{icon}</Link>
              <Link to="/items">{name}</Link>
            </li>
          ))} */}
          <li className="px-5 py-4 text-gray-400 hover:text-pink-500">
            <Link to="/items">
              <HiOutlineHome />
              Home
            </Link>
          </li>
          <li className="px-5 py-4 text-gray-400 hover:text-pink-500">
            <BiCategory />
            <select className="block w-12 relative right-1 bottom-1.5 appearance-none bg-transparent hover:border-pink-500 px-2 py-2 rounded shadow-2xl leading-tight focus:outline-none focus:shadow-outline">
              <option value="">Sort</option>
              <option value="true" className="text-sm">
                Favorite
              </option>
              <option value="false" className="text-sm">
                Not favorite
              </option>
            </select>
          </li>
          <li className="px-5 py-4 text-gray-400 hover:text-pink-500">
            <Link to="/items/wish">
              <RiShoppingBag3Line />
              wish
            </Link>
          </li>
          <li className="px-5 py-4 text-gray-400 hover:text-pink-500">
            <Link to="/items/new">
              <TbHanger />
              New
            </Link>
          </li>
          <li className="px-5 py-4 text-gray-400 hover:text-pink-500">
            <Link to="/items/cart">
              <HiOutlineShoppingCart />
              Cart
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
