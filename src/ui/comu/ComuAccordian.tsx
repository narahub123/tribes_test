import { useState, type FC } from "react";
import type { ComuFAQ } from "../../types";
import { Icon } from "../common";

interface ComuAccordianProps {
  item: ComuFAQ;
}

export const ComuAccordian: FC<ComuAccordianProps> = ({ item }) => {
  const { question, answer } = item;
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="">
      <button
        type="button"
        className="w-full flex justify-between items-center cursor-pointer p-4"
        onClick={handleOpen}
      >
        <p className="">{question}</p>
        <Icon
          name="down"
          className={`text-2xl ${isOpen ? "rotate-180" : ""} transition`}
        />
      </button>
      {isOpen && (
        <div className="px-4">
          <p className="p-4 bg-blue-50">{answer}</p>
        </div>
      )}
    </div>
  );
};
