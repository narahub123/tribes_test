import { MainComu } from "../../../data";
import { ComuSectionHeader } from "../ComuSectionHeader";

export const CommunitySection = () => {
  const { title } = MainComu.community;
  return (
    <section>
      <ComuSectionHeader title={title} />
      <div className="p-4">
        
      </div>
    </section>
  );
};
