import type { FC } from "react";
import { ComuSectionHeader } from "../ComuSectionHeader";

interface LeaderSectionProps {}

export const LeaderSection: FC<LeaderSectionProps> = ({}) => {
  return (
    <section>
      <ComuSectionHeader title={"Leader"} className="text-blue-400" />
    </section>
  );
};
