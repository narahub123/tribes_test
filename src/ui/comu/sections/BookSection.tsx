import { ComuSectionHeader } from "../ComuSectionHeader";

export const BookSection = () => {
  return (
    <section>
      <ComuSectionHeader title={"책"} />
      <div className="p-2 h-[150px] flex justify-center items-center">
        책 섹션
      </div>
    </section>
  );
};
