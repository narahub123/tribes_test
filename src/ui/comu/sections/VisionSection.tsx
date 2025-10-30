import { useEffect, useState } from "react";
import { ComuSectionHeader } from "../../../ui";
import { comus } from "../../../data";
import { useComuContext } from "../../../contexts";

export const VisionSection = () => {
  const { comuId } = useComuContext();
  const [visions, setVisions] = useState<string[]>([]);

  useEffect(() => {
    const visions = comus.filter((c) => c.id === comuId)[0].visions;

    setVisions(visions);
  }, [comuId]);

  return (
    <section>
      <ComuSectionHeader title={"비전"} />
      <div className="p-4">
        {visions.map((v) => (
          <p key={v}>{v}</p>
        ))}
      </div>
    </section>
  );
};
