import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import { RiGroupLine, RiBuildingFill } from "react-icons/ri";
import { CiViewList } from "react-icons/ci";
import { CgSearchFound } from "react-icons/cg";

const tabList = [
  {
    name: "People",
    link: "people",
    icon: RiGroupLine,
  },
  {
    name: "Companies",
    link: "companies",
    icon: RiBuildingFill,
  },
  {
    name: "Lists",
    link: "lists",
    icon: CiViewList,
  },
  {
    name: "Saved Searches",
    link: "saved-searches",
    icon: CgSearchFound,
  },
];

export default function SearchPage() {
  return (
    <div className="h-[calc(100%-50px)]">
      <div className="flex h-[50px] bg-[#f7f9fb] border-b-[1px] border-[#e8eef4]">
        {tabList.map((v, k) => (
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "px-4 flex items-center space-x-[6px] text-[#1991eb] border-b-[1px] border-[#1991eb] mb-[-1px]"
                : "px-4 flex items-center space-x-[6px] text-[#5d6a7e]"
            }
            to={`/search/${v.link}`}
          >
            <v.icon size={18} />
            <span className="text-[14px] font-medium">{v.name}</span>
          </NavLink>
        ))}
      </div>
      <Outlet />
    </div>
  );
}
