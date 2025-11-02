import { useEffect, useState } from "react";
import { comuNotices } from "../../../data";
import { ComuSectionHeader, NoticeTable } from "../../../ui";
import { useComuContext } from "../../../contexts";
import type { ComuNotice } from "../../../types";

export const NoticeSection = () => {
  const { comuId } = useComuContext();
  const [notices, setNotices] = useState<ComuNotice[]>([]);

  useEffect(() => {
    const notices = comuNotices[comuId];

    setNotices(notices);
  }, [comuId]);

  const filtered = notices.slice(0, 5);

  return (
    <section>
      <ComuSectionHeader title={"공지사항"} />
      <div className="py-4">
        <NoticeTable comuId={comuId} notices={filtered} />
      </div>
    </section>
  );
  ``;
};
