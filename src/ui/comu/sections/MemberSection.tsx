import { useEffect, useState } from "react";
import { useComuContext } from "../../../contexts";
import { ComuSectionHeader } from "../ComuSectionHeader";
import type { ComuMember } from "../../../types";
import { comus } from "../../../data";

export const MemberSection = () => {
  const { comuId } = useComuContext();
  const [members, setMembers] = useState<ComuMember[]>([]);

  useEffect(() => {
    const members = comus.filter((c) => c.id === comuId)[0].members;

    setMembers(members);
  }, [comuId]);

  return (
    <section>
      <ComuSectionHeader title={"멤버"} />
      <div>
        <div className="p-4 flex gap-4">
          {members.map((m) => (
            <div key={m.id}>
              <img
                src={m.avatarUrl}
                alt={m.name}
                className="rounded-full w-[70px]"
                title={m.name}
              />
            </div>
          ))}
        </div>
        <div>
          <p className="text-center">멤버 분석 (선택)</p>
        </div>
      </div>
    </section>
  );
};
