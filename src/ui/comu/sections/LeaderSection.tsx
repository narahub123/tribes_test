import { useEffect, useState, type FC } from "react";
import { Link } from "react-router-dom";
import { Avatar, ComuSectionHeader } from "../../../ui";
import { comus, leaders } from "../../../data";
import type { ComuInfo, Leader } from "../../../types";
import { useComuContext } from "../../../contexts";

interface LeaderSectionProps {}

interface ComuLeader {
  profile: Leader;
  info: ComuInfo;
}

export const LeaderSection: FC<LeaderSectionProps> = ({}) => {
  const { comuId } = useComuContext();
  const [leader, setLeader] = useState<ComuLeader>();

  useEffect(() => {
    const comuLeader = comus.filter((c) => c.id === comuId)[0].leader;
    const leader = leaders.filter((l) => l.id === comuLeader.leaderId)[0];

    setLeader({
      profile: leader,
      info: comuLeader.info,
    });
  }, [comuId]);

  if (!leader) return null;

  const { profile, info } = leader;
  return (
    <section>
      <ComuSectionHeader title={"Leader"} className="text-blue-400" />
      <div className="flex flex-col items-center p-4 gap-12 sm:flex-row">
        {/* profile */}
        <div className="flex flex-col py-8 gap-4 shrink-0">
          <Link to={`/makers#${profile.id}`}>
            <Avatar src={profile.avatarUrl} className="border-blue-400" />
          </Link>
          <div className="flex flex-col items-center gap-2">
            <p className="text-xl font-bold">{profile.name}</p>
            <p className="font-bold">{profile.role}</p>
            <p className="">{profile.job}</p>
          </div>
        </div>
        {/* 정보 */}
        <div className="space-y-4">
          {Object.entries(info).map((sec) => {
            const [key, value] = sec;
            return (
              <div className="space-y-4" key={key}>
                <p className="text-xl font-bold">{`${
                  key === "intro" ? "소개" : key === "vision" ? "비전" : "미션"
                } |`}</p>
                <p>{value}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
