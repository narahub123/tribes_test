import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { comuNotices } from "../../../data";
import { ComuSectionHeader } from "../../../ui";
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
        <table className="w-full">
          <thead>
            <tr>
              <th className="p-2">No</th>
              <th>제목</th>
              <th className=" whitespace-nowrap">글쓴이</th>
              <th>작성시간</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((notice, index) => {
              const { id, title, author, createdAt } = notice;
              return (
                <tr key={id} className="text-center">
                  <td className="p-2">{index}</td>
                  <td>
                    <Link to={`/notices/${comuId}/${id}`}>{title}</Link>
                  </td>
                  <td>{author.includes("lead") ? "리더" : "운영자"}</td>
                  <td>{createdAt}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
  ``;
};
