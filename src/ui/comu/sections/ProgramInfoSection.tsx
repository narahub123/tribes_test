import { useEffect, useState } from "react";
import { useComuContext } from "../../../contexts";
import type { ProgramInfoType } from "../../../types";
import { comus } from "../../../data";
import { ComuSectionHeader } from "../ComuSectionHeader";

export const ProgramInfoSection = () => {
  const { comuId } = useComuContext();
  const [programInfo, setProgramInfo] = useState<ProgramInfoType>();

  useEffect(() => {
    const programInfo = comus.filter((c) => c.id === comuId)[0].programInfo;

    setProgramInfo(programInfo);
  }, [comuId]);

  if (!programInfo) return null;

  const { title, description, fees, location, schedule, target } = programInfo;
  return (
    <section>
      <ComuSectionHeader title={"모임 정보"} />
      <div className="p-4 space-y-2">
        <div>
          <p className="font-bold">{title}</p>
          <p className="text-sm">{description}</p>
        </div>
        <div>
          <p className="flex gap-2">
            <span className="text-gray-500">대상 : </span>
            <span>{target}</span>
          </p>
        </div>
        <div className="flex gap-2">
          <p className="flex gap-2">
            <span className="text-gray-500">월 회비 :</span>
            <span>{fees?.monthlyFee}</span>
          </p>
          <p className="flex gap-2">
            <span className="text-gray-500">가입비 :</span>
            <span>{fees?.signupFee}</span>
          </p>
          {fees?.note && <p>({fees?.note})</p>}
        </div>
        <div>
          <p className="flex gap-2">
            <span className="text-gray-500">장소 : </span>
            <span>{location}</span>
          </p>
          <p className="flex gap-2">
            <span className="text-gray-500">일정 : </span>
            <span>{schedule}</span>
          </p>
        </div>
      </div>
    </section>
  );
};
