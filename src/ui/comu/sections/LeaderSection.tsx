import { useEffect, useState, type FC } from "react";
import { Link } from "react-router-dom";
import { Avatar, ComuSectionHeader } from "../../../ui";
import { comus, leaders } from "../../../data";
import type { Leader } from "../../../types";
import { useComuContext } from "../../../contexts";

interface LeaderSectionProps {}

export const LeaderSection: FC<LeaderSectionProps> = ({}) => {
  const { comuId } = useComuContext();
  const [leader, setLeader] = useState<Leader>();

  useEffect(() => {
    const comuLeader = comus.filter((c) => c.id === comuId)[0].leader;
    const leader = leaders.filter((l) => l.id === comuLeader.leaderId)[0];

    setLeader(leader);
  }, [comuId]);

  if (!leader) return null;

  const { avatarUrl, id, job, name, role, education, beliefs, careerHistory } =
    leader;
  return (
    <section>
      <ComuSectionHeader title={"Leader"} className="text-blue-400" />
      <div className="flex flex-col items-center p-4 gap-12 sm:flex-row">
        {/* profile */}
        <div className="flex flex-col py-8 gap-4 shrink-0">
          <Link to={`/makers#${id}`}>
            <Avatar src={avatarUrl} className="border-blue-400" />
          </Link>
          <div className="flex flex-col items-center gap-2">
            <p className="text-xl font-bold">{name}</p>
            <p className="font-bold">{role}</p>
            <p className="">{job}</p>
          </div>
        </div>
        {/* 정보 */}
        <div className="space-y-4">
          <div className="space-y-2">
            <p className="text-xl font-bold">학력</p>
            <p>
              {education?.map((e) => (
                <p key={e}>{e}</p>
              ))}
            </p>
          </div>
          <div className="space-y-2">
            <p className="text-xl font-bold">경력</p>
            <p>
              {careerHistory?.map((e) => (
                <p key={e.company}>{e.company}</p>
              ))}
            </p>
          </div>
          <div className="space-y-2">
            <p className="text-xl font-bold">가치관</p>
            <p>
              {beliefs?.map((e) => (
                <p key={e}>{e}</p>
              ))}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
