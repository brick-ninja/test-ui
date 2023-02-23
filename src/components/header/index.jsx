import React from "react";
import { NavLink } from "react-router-dom";
import {
  FiHome,
  FiSearch,
  FiRotateCw,
  FiPhoneCall,
  FiBell,
  FiSettings,
} from "react-icons/fi";
import { AiOutlineSend } from "react-icons/ai";
import { VscGraph } from "react-icons/vsc";
import { RiQuestionLine } from "react-icons/ri";

import Logo from "../icons/Logo";

import Button from "../button";
import SearchInput from "../input/SearchInput";
import Avatar from "../avatar";

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
    <header className="border-b border-[#e8eef4] h-[50px] bg-white flex items-center justify-between">
      <div>
        <div className="flex items-center">
          <NavLink className="px-4" to="/">
            <Logo />
          </NavLink>
          <div className="flex">
            {navItems.map((v, k) => (
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "bg-[#f7f9fb] px-4 flex items-center space-x-[6px] h-[50px] border-x-[1px] border-[#e8eef4]"
                    : "px-4 flex items-center space-x-[6px]"
                }
                to={v.link}
              >
                <v.icon size={20} color="#949fb1" />
                <span className="text-[15px] text-[#242d3e] font-semibold">
                  {v.name}
                </span>
              </NavLink>
            ))}
          </div>
        </div>
      </div>
      <div className="flex space-x-4 items-center pr-4">
        <Button>Upgrade</Button>
        <SearchInput />
        {/* Icon group */}
        <div className="flex space-x-4 items-center">
          <VscGraph className="text-[#949fb1] hover:text-[#1991eb] cursor-pointer" />
          <FiPhoneCall className="text-[#949fb1] hover:text-[#1991eb] cursor-pointer" />
          <RiQuestionLine
            size={20}
            className="text-[#949fb1] hover:text-[#1991eb] cursor-pointer"
          />
          <FiBell className="text-[#949fb1] hover:text-[#1991eb] cursor-pointer" />
          <FiSettings className="text-[#949fb1] hover:text-[#1991eb] cursor-pointer" />
        </div>
        <div>
          <Avatar shortName="DL" />
        </div>
      </div>
    </header>
  );
}
