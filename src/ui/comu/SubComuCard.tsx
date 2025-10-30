import type { FC } from "react";
import type { SubComuCardType } from "../../types";
import { Avatar } from "../common";
import { Link } from "react-router-dom";

interface SubComuCardProps {
  comu: SubComuCardType;
}

export const SubComuCard: FC<SubComuCardProps> = ({ comu }) => {
  const {
    id,
    hostAvatar,
    hostName,
    title,
    subtitle,
    target,
    fees,
    schedule,
    location,
  } = comu;

  return (
    <Link to={`/comu/subs/${id}`}>
      <div className="flex p-4 bg-blue-50 rounded-xl items-center gap-4">
        {/* host */}
        <div className="shrink-0 flex flex-col items-center gap-4">
          <Avatar src={hostAvatar} />
          <p className="font-bold text-2xl">{hostName}</p>
        </div>
        {/* info */}
        <div>
          <div>
            <p className="font-bold text-xl">{title}</p>
            <p className="text-md">{subtitle}</p>
          </div>
          <hr className="my-4" />
          <table className="w-full">
            <thead></thead>
            <tbody>
              <tr>
                <th className="text-blue-500 whitespace-nowrap">대상</th>
                <td className="p-2">{target}</td>
              </tr>
              <tr>
                <th className="text-blue-500">비용</th>
                <td className="p-2">
                  <p>{`가입비 (${fees?.signupFee})`}</p>
                  <p>{`회비 (${fees?.monthlyFee})`}</p>
                </td>
              </tr>
              <tr>
                <th className="text-blue-500">일정</th>
                <td className="p-2">{schedule}</td>
              </tr>
              <tr>
                <th className="text-blue-500">장소</th>
                <td className="p-2">{location}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Link>
  );
};
