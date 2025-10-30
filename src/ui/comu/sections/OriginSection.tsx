import { MainComu } from "../../../data";
import { ComuSectionHeader } from "../ComuSectionHeader";

export const OriginSection = () => {
  const { title, text } = MainComu.origin;
  return (
    <section>
      <ComuSectionHeader title={title} className="" />
      <div className="p-4">
        <p>{text}</p>
      </div>
    </section>
  );
};
