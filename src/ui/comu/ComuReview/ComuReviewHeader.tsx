import { Avatar } from "../../common";
import { useComuReviewContext } from "./context";

export const ComuReviewHeader = () => {
  const {
    profileImage,
    username,
    clubName,
    clubNickname,
    attendanceCount,
    commentDate,
  } = useComuReviewContext();
  return (
    <header className="flex justify-between items-center">
      <div className="flex items-center gap-4">
        <Avatar src={profileImage} className="w-10 h-10 bg-gray-200 border-0" />
        <div className="text-sm">
          <p className="font-bold">{username}</p>
          <p className="text-blue-400">{`[${clubName}-${clubNickname}] 모임 ${attendanceCount}회 참석 후 작성}`}</p>
        </div>
      </div>
      <div>
        <p className="text-sm">{commentDate}</p>
      </div>
    </header>
  );
};
