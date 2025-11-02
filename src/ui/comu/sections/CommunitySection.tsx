import { MainComu } from "../../../data";
import { ComuSectionHeader } from "../ComuSectionHeader";

export const CommunitySection = () => {
  const { title } = MainComu.community;
  return (
    <section>
      <ComuSectionHeader title={title} />
      <div className="p-4 h-[150px] flex justify-center items-center">
        <p>커뮤니티 섹션</p>
      </div>
    </section>
  );
};
