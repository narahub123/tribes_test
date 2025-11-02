import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import type { ComuNotice } from "../types";
import { comuNotices } from "../data";
import { PrevButton } from "../ui";

export const ComuNoticePage = () => {
  const { pathname } = useLocation();
  const [comuId, noticeId] = pathname.split("notices/")[1].split("/");
  const [notice, setNotice] = useState<ComuNotice>();

  useEffect(() => {
    const notice = comuNotices[comuId].filter((n) => n.id === noticeId)[0];

    setNotice(notice);
  }, [comuId, noticeId]);

  if (!notice) return null;

  const { title, author, createdAt, content } = notice;

  return (
    <div>
      <header className="relative text-center">
        <p className="p-4 text-2xl font-bold">공지 사항 상세</p>
        <PrevButton className="absolute top-5 left-4 text-2xl" />
      </header>
      <main className="p-4">
        <div className="flex justify-end">
          <Link to={`/notices/${comuId}`}>공지 목록 보기</Link>
        </div>
        <div>
          <div>
            <p className="text-xl font-bold text-center p-4">{title}</p>
          </div>
          <div className="flex justify-end">
            <div className="flex gap-2 py-4">
              <p className="flex gap-2">
                <span>작성자 :</span>
                <span>{author}</span>
              </p>
              <p className="flex gap-2">
                <span>작성일 :</span>
                <span>{createdAt}</span>
              </p>
            </div>
          </div>
          <hr />
          <div className="flex justify-center min-h-[180px] mt-4">
            <p>{content}</p>
          </div>
        </div>
      </main>
    </div>
  );
};
