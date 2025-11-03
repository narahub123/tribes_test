import { Link } from "react-router-dom";
import { ComuSectionHeader } from "../ComuSectionHeader";
import { SubComuCard } from "../SubComuCard";
import { useEffect, useState } from "react";
import { useComuContext } from "../../../contexts";
import type { SubComuCardType } from "../../../types";
import { comus, leaders } from "../../../data";

export const SubComuSection = () => {
  const { comuId } = useComuContext();
  const [subComus, setSubComus] = useState<SubComuCardType[]>([]);

  useEffect(() => {
    const subs = [];
    const subComus = comus.filter((c) => c.id === comuId)[0].subComus;

    for (const subComu of subComus) {
      const comu = comus.filter((c) => c.id === subComu)[0];
      const leader = leaders.filter((l) => l.id === comu.leader.leaderId)[0];

      subs.push({
        id: comu.id,
        hostName: leader.name,
        hostAvatar: leader.avatarUrl,
        ...comu.programInfo,
      });
    }

    setSubComus(subs);
  }, [comuId]);

  const filtered = subComus.slice(0, 2);
  return (
    <section>
      <ComuSectionHeader title={"Sub Comu"} />
      <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-2 py-4">
        {filtered.map((comu) => (
          <SubComuCard comu={comu} key={comu.id} />
        ))}
      </div>
      <div>
        <Link to="/comu/subs">
          <button className="w-full p-3 border border-blue-400 text-blue-400 hover:bg-blue-200 cursor-pointer hover:text-white">
            더보기
          </button>
        </Link>
      </div>
    </section>
  );
};
