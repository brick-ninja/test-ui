import React from "react";
import clsx from "clsx";

export default function Avatar({ source, shortName }) {
  return (
    <div
      className={clsx(
        "w-[30px] h-[30px] rounded-full",
        source ? "" : "bg-[#e8eef4] flex justify-center items-center"
      )}
    >
      {source ? (
        <img src={source} alt="avatar" />
      ) : (
        <div className="text-[#5d6a7e] text-[12px] font-medium">
          {shortName}
        </div>
      )}
    </div>
  );
}
