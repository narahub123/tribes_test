import { ComuSectionHeader } from "../ComuSectionHeader";

export const MemberSection = () => {
  return (
    <section>
      <ComuSectionHeader title={"멤버"} />
      <div className="p-4 h-[150px] flex justify-center items-center">
        <p>멤버 섹션</p>
      </div>
    </section>
  );
};
