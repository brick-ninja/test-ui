import React, { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { HiOutlineLogout } from "react-icons/hi";
import { BsCaretUpFill, BsList } from "react-icons/bs";
import { CiViewList } from "react-icons/ci";

import Button from "src/components/button";
import AccountHQLocation from "./AccountHQLocation";

import SearchInput from "src/components/input/SearchInput";
import clsx from "clsx";

export default function Sidebar() {
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <div className="w-full min-h-full border-r border-r-[#e8eef4] relative pb-[50px]">
      <div>
        <div className="h-[45px] flex items-center border-[#d3dae3] border-b-[1px] pl-3">
          <SearchInput
            className="w-full"
            inputClassName="pl-8 placeholder:font-semibold"
            noBorder
            placeholder="Search Companies..."
          />
        </div>

        <div className="border-[#d3dae3] border-b-[1px] h-[50px] flex items-center pl-3 pr-[17px]">
          <span className="text-[16px] mr-[10px] text-[#242d3e] font-semibold">
            Filters
          </span>
        </div>
        <div>
          <Accordion open={open === 1}>
            <AccordionHeader
              className="py-[14px] accordion text-[14px] font-medium text-[#242d3e] px-4 h-[45px] border-b-[1px] border-y-[#e8eef4]"
              onClick={() => handleOpen(1)}
            >
              <div className="font-medium text-[14px] flex items-center">
                <CiViewList className="mr-2" size={17} />
                <div className="pt-1">Lists</div>
              </div>
              <BsCaretUpFill
                size={12}
                className={clsx(
                  "transition-all duration-150",
                  open !== 1 && "rotate-180"
                )}
                color="#949fb1"
              />
            </AccordionHeader>
            <AccordionBody>Lists filter component</AccordionBody>
          </Accordion>
          <Accordion open={open === 2}>
            <AccordionHeader
              className="py-[14px] accordion text-[14px] font-medium text-[#242d3e] px-4 h-[45px] border-b-[1px] border-y-[#e8eef4]"
              onClick={() => handleOpen(2)}
            >
              <div className="font-medium text-[14px] flex items-center">
                <CiViewList className="mr-2" size={17} />
                <div className="pt-1">Company</div>
              </div>
              <BsCaretUpFill
                size={12}
                className={clsx(
                  "transition-all duration-150",
                  open !== 2 && "rotate-180"
                )}
                color="#949fb1"
              />
            </AccordionHeader>
            <AccordionBody>Lists filter component</AccordionBody>
          </Accordion>
          <AccountHQLocation active={open === 3} handleOpen={handleOpen} />
        </div>
      </div>

      <div className="absolute bottom-0 w-full flex justify-center h-[52px] shadow-[0_-5px_12px_rgba(0,0,0,0.12)] items-center px-2">
        <Button className="w-full font-medium flex items-center space-x-[10px] justify-center">
          <span className="font-semibold">More Filters</span>
          <HiOutlineLogout size={20} />
        </Button>
      </div>
    </div>
  );
}
