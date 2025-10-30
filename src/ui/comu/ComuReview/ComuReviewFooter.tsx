import { comuMetaEmojis } from "../../../data";
import type { ComuMetaKey } from "../../../types";
import { Icon } from "../../common";
import { ComuReviewMetaPicker } from "./ComuReviewMetaPicker";
import { useComuReviewContext } from "./context";

export const ComuReviewFooter = () => {
  const { meta, onClick, setIsOpen, isOpen } = useComuReviewContext();
  const metaArr = Object.entries(meta);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex gap-2 py-4">
      {(metaArr as [ComuMetaKey, string[]][]).map((m) => {
        if (m[1].length === 0) return null;
        return (
          <button
            className="py-1 px-2 bg-gray-200 rounded-2xl flex items-center gap-1 cursor-pointer"
            onClick={onClick}
            id={m[0]}
            key={m[0]}
          >
            <span>{comuMetaEmojis[m[0]]}</span>
            <span>{m[1].length}</span>
          </button>
        );
      })}
      <div className="relative">
        <ComuReviewMetaPicker />
        <button
          className="py-1 px-2 bg-gray-200 rounded-2xl flex items-center gap-1 cursor-pointer"
          onClick={handleOpen}
        >
          <Icon name="metaPlus" className="text-2xl" />
        </button>
      </div>
    </div>
  );
};
