import React from "react";
import { Link } from "react-router-dom";
import { FaMoon } from "react-icons/fa";
import { BsSunFill } from "react-icons/bs";
import * as tailwind from '../Css/style'

export default function NavBar() {
  return (
    <nav className={tailwind.nav}>
      <div>
        <Link>
          <h1 className="font-signature text-5xl p-4">Le Quack</h1>
        </Link>
      </div>
    </nav>
  );
}
