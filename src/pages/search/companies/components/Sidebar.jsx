import React from "react";

import SearchInput from "src/components/input/SearchInput";

export default function Sidebar() {
  return (
    <div className="w-full min-h-full border-r border-r-[#e8eef4]">
      <div className="h-[45px] flex items-center border-[#d3dae3] border-b-[1px] pl-3">
        <SearchInput
          className="w-full"
          inputClassName="pl-8 placeholder:font-semibold"
          noBorder
          placeholder="Search Companies..."
        />
      </div>
    </div>
  );
}
