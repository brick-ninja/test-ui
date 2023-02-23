import clsx from "clsx";
import React from "react";
import { FiSearch } from "react-icons/fi";

export default function SearchInput({
  placeholder = "Search...",
  className,
  inputClassName,
  noBorder = false,
  ...rest
}) {
  return (
    <div className={clsx("relative group")}>
      <input
        className={clsx(
          "w-full text-[14px] text-[#949fb1] pl-7 px-[10px] h-[30px] rounded-[3px] focus-within:outline-none",
          !noBorder &&
            "group-hover:border-[#1991eb] border-[#d3dae3] border-[1px]",
          inputClassName
        )}
        placeholder={placeholder}
        {...rest}
      />
      <div className="absolute top-[6px] left-[4px]">
        <FiSearch className="text-[#949fb1] group-hover:text-[#1991eb]" />
      </div>
    </div>
  );
}
