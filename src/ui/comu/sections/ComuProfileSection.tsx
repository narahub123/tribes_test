import { useEffect, useState } from "react";
import { useComuContext } from "../../../contexts";
import type { ComuProfileType } from "../../../types";
import { comus } from "../../../data";
import { ComuSectionHeader } from "../ComuSectionHeader";

export const ComuProfileSection = () => {
  const { comuId } = useComuContext();
  const [comuProfile, setComuProile] = useState<ComuProfileType>();

  useEffect(() => {
    const comuProfile = comus.filter((c) => c.id === comuId)[0].comuProfile;

    setComuProile(comuProfile);
  }, [comuId]);

  if (!comuProfile) return null;

  const { origin, visions, missions } = comuProfile;
  return (
    <section>
      <ComuSectionHeader title={"About Comu"} className="" />
      <div>
        <div className="p-4">
          <p className="text-xl font-bold text-blue-400">탄생 스토리</p>
          <p>{origin}</p>
        </div>
        <div className="p-4">
          <p className="text-xl font-bold text-blue-400">비전</p>
          {visions.map((v) => (
            <p key={v}>{v}</p>
          ))}
        </div>
        <div className="p-4">
          <p className="text-xl font-bold text-blue-400">미션</p>
          {missions.map((mission) => (
            <p key={mission}>{mission}</p>
          ))}
        </div>
      </div>
    </section>
  );
};
