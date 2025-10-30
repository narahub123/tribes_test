import { useEffect, useState, type FC } from "react";
import { ComuSectionHeader } from "../ComuSectionHeader";
import { comus } from "../../../data";
import { useComuContext } from "../../../contexts";

interface OriginSectionProps {}

export const OriginSection: FC<OriginSectionProps> = ({}) => {
  const { comuId } = useComuContext();
  const [text, setText] = useState("");

  useEffect(() => {
    const origin = comus.filter((c) => c.id === comuId)[0].origin;

    setText(origin);
  }, [comuId]);

  return (
    <section>
      <ComuSectionHeader title={"탄생 스토리"} className="" />
      <div className="p-4">
        <p>{text}</p>
      </div>
    </section>
  );
};
