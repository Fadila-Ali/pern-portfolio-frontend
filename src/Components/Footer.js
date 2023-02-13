import React from "react";
import { Link } from "react-router-dom";
import { FaGithubSquare } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import { BiSend } from "react-icons/bi";

export default function Footer() {
  const navLinks = [
    {
      id: 1,
      name: "Home",
      path: "/items",
    },
    {
      id: 2,
      name: "Sort",
      path: "/items",
    },
    {
      id: 3,
      name: "Wish",
      path: "/items",
    },
    {
      id: 4,
      name: "New",
      path: "/items/new",
    },
    {
      id: 5,
      name: "Cart",
      path: "/items",
    },
  ];
  return (
    <div className="bg-slate-900 text-slate-100 p-2">
      <div className="lg:flex justify-between">
        <div className="lg:w-[33%] flex flex-col justify-center items-center">
          <h3 className="font-bold">About Developer</h3>
          <p className="text-md pl-4">
            Hi, my name is Fadila Ali. I am currently a Pursuit fellow, learning
            full-stack web development. My goal is to learn and build up the
            necessary skills that will allow me to create my imagination in the
            form of softwares.
          </p>
          <div className="flex flex-col my-2 justify-center items-center">
            <h3 className="p-2">
              <span className="font-bold">Contact me </span>
              <span>&#9786;</span>
            </h3>
            <div className="flex">
              <a
                href="https://www.linkedin.com/in/fadila-ali-574b13183/"
                target="_blank"
                rel="noreferrer"
                className="px-4 text-4xl text-blue-500"
              >
                <AiFillLinkedin />
              </a>
              <a
                href="https://github.com/Fadila-Ali"
                target="_blank"
                rel="noreferrer"
                className="px-4 text-4xl text-slate-200"
              >
                <FaGithubSquare />
              </a>
              <a
                href="mailto: fadilaali@pursuit.org"
                target="_blank"
                rel="noreferrer"
                className="px-4 text-4xl text-red-500"
              >
                <SiGmail />
              </a>
            </div>
          </div>
        </div>
        <div>
          <h3 className="font-bold text-pink-500 p-1">
            How was your experience using this App? Let's us know, so we can
            improve!
          </h3>
          <div className="flex flex-col p-2 justify-center mx-auto">
            <form
              action="https://getform.io/f/21cdcb0c-8796-4bdc-9960-4bf1ad3b01a9"
              method="POST"
              className="flex flex-col w-full"
            >
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                required
                className="p-2 my-1 bg-transparent border-2 rounded-md text-gray-100 focus:outline-none"
              />
              <input
                type="text"
                name="email"
                placeholder="Enter your email"
                className="p-2 my-1 bg-transparent border-2 rounded-md text-gray-100 focus:outline-none"
              />
              <textarea
                name="message"
                rows="5"
                placeholder="Your Thoughts..."
                className="p-2 my-1 bg-transparent border-2 rounded-md text-gray-100 focus:outline-none"
              ></textarea>
              <button className="flex items-center font-bold rounded-md bg-white text-black py-2 px-4 my-2 mx-auto hover:scale-105 hover:bg-pink-500 duration-300">
                Send <BiSend size={25} />
              </button>
            </form>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h3 className="font-bold pr-2">Quick Links:</h3>
          <ul className="text-gray-400">
            {navLinks.map(({ id, name, path }) => (
              <li
                key={id}
                path={path}
                className=" hover:text-pink-500 hover:scale-105 duration-200 my-3"
              >
                {name}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="text-center text-sm">
        <p>
          <i>Copyright Fadila A. &#9400; 2023</i>
        </p>
      </div>
    </div>
  );
}
