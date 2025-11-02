import { Link, useLocation } from "react-router-dom";
import { Icon, NoticeTable } from "../ui";
import { useEffect, useState } from "react";
import type { ComuNotice } from "../types";
import { comuNotices } from "../data";

export const ComuNoticeListPage = () => {
  const { pathname } = useLocation();
  const comuId = pathname.split("notices/")[1];
  const [notices, setNotices] = useState<ComuNotice[]>([]);

  useEffect(() => {
    const notices = comuNotices[comuId];

    setNotices(notices);
  }, [comuId]);

  return (
    <div>
      <header className="relative text-center">
        <p className="p-4 text-2xl font-bold">공지 사항 목록</p>
        <Link
          to={`/comu/${comuId === "comu1" ? "main" : comuId}`}
          title="코뮤로 돌아가기"
          className="cursor-pointer"
        >
          <button className="absolute top-5 left-4 text-2xl cursor-pointer">
            <Icon name="left" />
          </button>
        </Link>
      </header>
      <main>
        <div className="py-4">
          <NoticeTable comuId={comuId} notices={notices} />
        </div>
      </main>
    </div>
  );
};
