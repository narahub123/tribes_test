import type { FC } from "react";
import { Icon } from "../../common";

interface ApplyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ApplyModal: FC<ApplyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed w-full h-full z-20">
      <div className="w-full h-full bg-black opacity-50" onClick={onClose} />
      <div className="w-[80%] min-h-[80%] bg-white absolute top-[50%] left-[50%] transform -translate-[50%] rounded-xl">
        <button
          className="absolute top-4 right-4 cursor-pointer"
          onClick={onClose}
        >
          <Icon name="close" />
        </button>
        <div className="flex justify-center">
          <p className=" p-4 font-bold">참가 신청하기 </p>
        </div>
        <div className="p-8">참가비등의 설명 추가 필요</div>
      </div>
    </div>
  );
};
