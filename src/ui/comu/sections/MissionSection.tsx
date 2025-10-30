import { MainComu } from "../../../data";
import { ComuSectionHeader } from "../ComuSectionHeader";

export const MissionSection = () => {
  const { title, paragraphs } = MainComu.mission;
  return (
    <section>
      <ComuSectionHeader title={title} className="" />
      <div className="p-4 space-y-4">
        {paragraphs.map((p) => (
          <p>{p}</p>
        ))}
      </div>
    </section>
  );
};
