import React from "react";
import Sidebar from "./components/Sidebar";

export default function Companies() {
  return (
    <div className="flex w-full">
      <div className="w-[310px]">
        <Sidebar />
      </div>
      <div className="flex-1"></div>
    </div>
  );
}
