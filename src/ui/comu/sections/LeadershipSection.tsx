import { MainComu } from "../../../data";
import type { ComuLeaderProfile } from "../../../types/comu";
import { ComuProfilCard } from "../ComuProfilCard";
import { ComuSectionHeader } from "../ComuSectionHeader";

export const LeadershipSection = () => {
  const { title, leaders } = MainComu.leadership;
  return (
    <section>
      <ComuSectionHeader title={title} />
      <div className="flex justify-around py-8 ">
        {(leaders as ComuLeaderProfile[]).map((leader) => (
          <ComuProfilCard key={leader.id} leader={leader} />
        ))}
      </div>
    </section>
  );
};
