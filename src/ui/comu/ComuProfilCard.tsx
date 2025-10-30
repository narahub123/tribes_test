import type { FC } from "react";
import type { ComuLeaderProfile } from "../../types/comu";
import { Avatar } from "../common";
import { Link } from "react-router-dom";

interface ComuProfilCardProps {
  leader: ComuLeaderProfile;
}

export const ComuProfilCard: FC<ComuProfilCardProps> = ({ leader }) => {
  const { id, avatarUrl, role, name, job } = leader;
  return (
    <Link to={`/makers#${id}`}>
      <div className="max-w-[200px] flex flex-col gap-4">
        <Avatar src={avatarUrl} name={name} />
        <div className="flex flex-col items-center gap-2">
          <p className="text-xl font-bold">{role}</p>
          <p>{name}</p>
          <p>{job}</p>
        </div>
      </div>
    </Link>
  );
};
