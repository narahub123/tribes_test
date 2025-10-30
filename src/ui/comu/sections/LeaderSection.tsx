import type { FC } from "react";
import { Link } from "react-router-dom";
import { Avatar, ComuSectionHeader } from "../../../ui";
import { MainComu } from "../../../data";

interface LeaderSectionProps {}

export const LeaderSection: FC<LeaderSectionProps> = ({}) => {
  const { title, profile, info } = MainComu.leader;
  return (
    <section>
      <ComuSectionHeader title={title} className="text-blue-400" />
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
            const { title, desc } = sec[1];
            return (
              <div className="space-y-4" key={title}>
                <p className="text-xl font-bold">{`${title} |`}</p>
                <p>{desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
