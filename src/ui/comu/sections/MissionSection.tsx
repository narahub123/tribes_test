import { useEffect, useState } from "react";
import { useComuContext } from "../../../contexts";
import { comus } from "../../../data";
import { ComuSectionHeader } from "../../../ui";

export const MissionSection = () => {
  const { comuId } = useComuContext();
  const [missions, setMissions] = useState<string[]>([]);

  useEffect(() => {
    const missions = comus.filter((c) => c.id === comuId)[0].missions;

    setMissions(missions);
  }, [comuId]);

  return (
    <section>
      <ComuSectionHeader title={"미션"} className="" />
      <div className="p-4 space-y-4">
        {missions.map((mission) => (
          <p key={mission}>{mission}</p>
        ))}
      </div>
    </section>
  );
};
