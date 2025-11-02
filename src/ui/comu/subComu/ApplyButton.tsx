import type { FC } from "react";

interface ApplyButtonProps {
  onClick: () => void;
}

export const ApplyButton: FC<ApplyButtonProps> = ({ onClick }) => {
  return (
    <button
      className="fixed bottom-10 right-10 rounded-full bg-blue-400 aspect-square p-4 text-white shadow-xl cursor-pointer"
      onClick={onClick}
    >
      참여
    </button>
  );
};
