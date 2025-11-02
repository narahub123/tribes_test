import { ComuSectionHeader } from "../ComuSectionHeader";

export const TrackerSection = () => {
  return (
    <section>
      <ComuSectionHeader title={"트래커"} />
      <div className="p-4 h-[150px] flex justify-center items-center">
        <p>트래커 섹션</p>
      </div>
    </section>
  );
};
