import { useState } from "react";
import { mainActivities } from "../../../data";
import { ActivityImage } from "../ActivityImage";
import { ComuSectionHeader } from "../ComuSectionHeader";
import type { ActivityImageType } from "../../../types";
import { ActivityImageModal } from "../ActivityImageModal";

export const ActivitySection = () => {
  const [selected, setSelected] = useState<ActivityImageType | undefined>();

  const handleSelection = (activity: ActivityImageType) => {
    setSelected(activity);
  };

  const handleClose = () => {
    setSelected(undefined);
  };

  return (
    <section className="space-y-4">
      <ComuSectionHeader title={"Activities"} />
      <ActivityImageModal activity={selected} onClose={handleClose} />
      <div className="flex">
        {mainActivities.map((m) => (
          <ActivityImage activity={m} key={m.id} onClick={handleSelection} />
        ))}
      </div>
    </section>
  );
};
