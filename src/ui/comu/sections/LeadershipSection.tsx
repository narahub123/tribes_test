import { useEffect, useState, type FC } from "react";
import { comus, leaders } from "../../../data";
import { ComuProfilCard, ComuSectionHeader } from "../../../ui";
import type { Leader } from "../../../types";
import { useComuContext } from "../../../contexts";

interface LeadershipSectionProps {}

export const LeadershipSection: FC<LeadershipSectionProps> = ({}) => {
  const { comuId } = useComuContext();
  const [leaderships, setLeaderships] = useState<Leader[]>([]);

  useEffect(() => {
    const leaderships = [];

    const leaderS = comus.filter((c) => c.id === comuId)[0].leaderships;

    if (!leaderS) return;

    for (const leader of leaderS) {
      leaderships.push(leaders.filter((l) => l.id === leader)[0]);
    }

    setLeaderships(leaderships);
  }, [comuId]);

  // const { title, leaders } = MainComu.leadership;
  return (
    <section>
      <ComuSectionHeader title={"Leadership"} />
      <div className="flex justify-around py-8 gap-2">
        {leaderships.map((leader) => (
          <ComuProfilCard key={leader.id} leader={leader} />
        ))}
      </div>
    </section>
  );
};
