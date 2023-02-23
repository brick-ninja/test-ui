import React, { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import clsx from "clsx";
import { BsCaretUpFill, BsList } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import AutoComplete from "src/components/input/AutoComplete";

const locations = [
  { id: 1, name: "United States" },
  { id: 2, name: "Americas" },
  { id: 3, name: "North America" },
  { id: 4, name: "EMEA" },
  { id: 5, name: "Dallas/Fort Worth Area" },
  { id: 6, name: "Greater Houston Area" },
];

export default function AccountHQLocation({ handleOpen, active }) {
  const [selected, setSelected] = useState("region");
  return (
    <Accordion open={active} className="accordion">
      <AccordionHeader
        className="py-[14px] accordion text-[14px] font-medium text-[#242d3e] px-4 h-[45px] border-b-[1px] border-y-[#e8eef4]"
        onClick={() => handleOpen(3)}
      >
        <div className="font-medium text-[14px] flex items-center">
          <GoLocation className="mr-2" size={17} />
          <div className="pt-1">Account HQ Location</div>
        </div>
        <BsCaretUpFill
          size={12}
          className={clsx(
            "transition-all duration-150",
            !active && "rotate-180"
          )}
          color="#949fb1"
        />
      </AccordionHeader>

      <AccordionBody className="">
        <div className="pl-[17px] pr-3 space-y-[10px]">
          {selected === "region" ? (
            <div className="border border-[#1991eb] rounded-[6px] px-3">
              <div className="flex space-x-2 items-center py-[6px]">
                <div className="bg-[#1991eb] w-4 h-4 rounded-full flex justify-center items-center">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                </div>
                <div className="text-[14px] text-[#5d6a7e] font-semibold mt-1">
                  Region
                </div>
              </div>

              <div className="text-[12px] text-[#5d6a7e] font-semibold">
                City / State / Country / Zip
              </div>
              <AutoComplete data={locations} />
              <div>
                <p className="text-[#1991eb] font-medium my-1">
                  Exclude locations
                </p>
              </div>
            </div>
          ) : (
            <div
              onClick={() => {
                setSelected("region");
              }}
              className="cursor-pointer flex space-x-2 items-center px-3 py-[6px] border border-[#d3dae3] rounded-[6px] bg-[#f7f9fb]"
            >
              <div className="border border-[#949fb1] w-4 h-4 rounded-full flex justify-center items-center"></div>
              <div className="text-[14px] text-[#5d6a7e] font-semibold mt-1">
                Region
              </div>
            </div>
          )}

          {selected === "zip" ? (
            <div
              onClick={() => {
                setSelected("zip");
              }}
              className="cursor-pointer flex space-x-2 items-center px-3 py-[6px] border border-[#d3dae3] rounded-[6px] bg-[#f7f9fb]"
            >
              <div className="bg-[#1991eb] w-4 h-4 rounded-full flex justify-center items-center">
                <div className="w-2 h-2 rounded-full bg-white"></div>
              </div>
              <div className="text-[14px] text-[#5d6a7e] font-semibold mt-1">
                Zip Radius
              </div>
            </div>
          ) : (
            <div
              onClick={() => {
                setSelected("zip");
              }}
              className="cursor-pointer flex space-x-2 items-center px-3 py-[6px] border border-[#d3dae3] rounded-[6px] bg-[#f7f9fb]"
            >
              <div className="border border-[#949fb1] w-4 h-4 rounded-full flex justify-center items-center"></div>
              <div className="text-[14px] text-[#5d6a7e] font-semibold mt-1">
                Zip Radius
              </div>
            </div>
          )}
        </div>
      </AccordionBody>
    </Accordion>
  );
}
