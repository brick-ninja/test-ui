import { Fragment, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { BsCaretUpFill } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import clsx from "clsx";

export default function AutoComplete({ data = [] }) {
  const [selected, setSelected] = useState([]);
  const [query, setQuery] = useState("");

  const filteredPeople =
    query === ""
      ? data
      : data.filter((person) =>
          person.name
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <Combobox value={selected} multiple onChange={setSelected}>
      {({ open }) => (
        <div className="relative mt-1">
          <div className="flex cursor-default border border-[#d3dae3] rounded-[3px] whitespace-pre-wrap">
            <div className="shrink">
              {selected.length > 0 && (
                <div className="inline-block">
                  {selected.map((person) => (
                    <li
                      className="inline-block text-[12px] text-[#242d3e] px-[6px] py-[2px] bg-[#e8eef4] rounded-sm mx-1 mt-1"
                      key={person.id}
                    >
                      {person.name}
                    </li>
                  ))}
                </div>
              )}
              <Combobox.Input
                className="border-none pl-3 pr-10 text-sm w-[calc(100%)] text-gray-900 focus:ring-0 focus-within:outline-none"
                displayValue={(person) => person.name}
                onChange={(event) => setQuery(event.target.value)}
              />
            </div>

            <div className="w-[60px] space-x-[5px] flex items-center justify-end pr-2">
              <RxCross2
                className="cursor-pointer"
                onClick={() => setSelected([])}
              />
              <Combobox.Button>
                <BsCaretUpFill
                  className={clsx(
                    !open && "rotate-180",
                    "transition-all duration-150"
                  )}
                />
              </Combobox.Button>
            </div>
          </div>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {filteredPeople.length === 0 && query !== "" ? (
                <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                  Nothing found.
                </div>
              ) : (
                filteredPeople.map((person) => (
                  <Combobox.Option
                    key={person.id}
                    className={({ active }) =>
                      `relative cursor-default select-none h-[20px] pl-10 pr-4 ${
                        active ? "bg-teal-600 text-white" : "text-gray-900"
                      }`
                    }
                    value={person}
                  >
                    {({ selected, active }) => (
                      <>
                        <div
                          className={`block truncate ${
                            selected
                              ? "font-medium text-blue-200"
                              : "font-normal"
                          }`}
                        >
                          {person.name}
                        </div>
                        {selected ? (
                          <div
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? "text-white" : "text-teal-600"
                            }`}
                          />
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      )}
    </Combobox>
  );
}
