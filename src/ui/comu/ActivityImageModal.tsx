import type { FC } from "react";
import type { ActivityImageType } from "../../types";
import { Icon } from "../common";

interface ActivityImageModalProps {
  activity: ActivityImageType | undefined;
  onClose: () => void;
}

export const ActivityImageModal: FC<ActivityImageModalProps> = ({
  activity,
  onClose,
}) => {
  if (!activity) return null;

  const { imgUrl } = activity;
  return (
    <div className="fixed top-0 left-0 z-30">
      <div
        className="bg-black opacity-50 w-screen h-screen"
        onClick={onClose}
      />

      <div className="w-[90%] absolute top-[50%] left-[50%] transform -translate-[50%]">
        <button
          className="absolute right-4 top-4 text-white z-10 text-2xl cursor-pointer "
          onClick={onClose}
        >
          <Icon name="close" />
        </button>
        <img src={imgUrl} alt="" className="" />
      </div>
    </div>
  );
};
