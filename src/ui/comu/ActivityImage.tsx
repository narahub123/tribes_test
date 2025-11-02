import type { FC } from "react";
import type { ActivityImageType } from "../../types";

interface ActivityImageProps {
  activity: ActivityImageType;
  onClick: (activity: ActivityImageType) => void;
}

export const ActivityImage: FC<ActivityImageProps> = ({
  activity,
  onClick,
}) => {
  return (
    <button
      className="w-full aspect-3/4 cursor-pointer"
      onClick={() => onClick(activity)}
    >
      <img
        src={activity.imgUrl}
        alt=""
        className="w-full h-full object-cover"
      />
    </button>
  );
};
