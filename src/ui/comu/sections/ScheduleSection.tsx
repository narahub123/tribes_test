import { ComuSectionHeader } from "../ComuSectionHeader";

export const ScheduleSection = () => {
  return (
    <section>
      <ComuSectionHeader title={"일정"} />
      <div className="p-2 h-[150px] flex justify-center items-center">
        일정 섹션
      </div>
    </section>
  );
};
