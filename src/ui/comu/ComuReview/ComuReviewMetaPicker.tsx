import { comuMetaEmojis } from "../../../data";
import { useComuReviewContext } from "./context";

export const ComuReviewMetaPicker = () => {
  const { onClick, isOpen } = useComuReviewContext();
  const emojis = Object.entries(comuMetaEmojis);

  if (!isOpen) return null;

  return (
    <div className="absolute flex -top-10 left-0 bg-gray-200 py-1 px-2 rounded-2xl">
      {emojis.map((emoji) => (
        <button
          key={emoji[0]}
          id={emoji[0]}
          className="cursor-pointer"
          onClick={onClick}
        >
          {emoji[1]}
        </button>
      ))}
    </div>
  );
};
