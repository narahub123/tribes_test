import { MainComu } from "../../../data";
import { ComuSectionHeader } from "../ComuSectionHeader";

export const VisionSection = () => {
  const { title, text } = MainComu.vision;
  return (
    <section>
      <ComuSectionHeader title={title} />
      <div className="p-4">
        <p>{text}</p>
      </div>
    </section>
  );
};
