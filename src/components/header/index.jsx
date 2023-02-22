import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FiHome, FiSearch, FiRotateCw } from "react-icons/fi";
import { AiOutlineSend } from "react-icons/ai";

import Logo from "../icons/Logo";

const navItems = [
  {
    name: "Home",
    link: "/home",
    icon: FiHome,
  },
  {
    name: "Search",
    link: "/search",
    icon: FiSearch,
  },
  {
    name: "Engage",
    link: "/engage",
    icon: AiOutlineSend,
  },
  {
    name: "Enrich",
    link: "/enrich",
    icon: FiRotateCw,
  },
];

export default function Header() {
  return (
    <header className="border-b border-[#e8eef4] h-[50px] bg-white flex items-center">
      <div>
        <div className="flex items-center">
          <Link className="px-4" to="/">
            <Logo />
          </Link>
          <div className="flex">
            {navItems.map((v, k) => (
              <Link
                className="px-4 flex items-center space-x-[6px]"
                to={v.link}
              >
                <v.icon size={20} color="#949fb1" />
                <span className="text-[15px] text-[#242d3e] font-semibold">
                  {v.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
