import type { FC } from "react";
import { Link } from "react-router-dom";
import type { ComuNotice } from "../../types";

interface NoticeTableProps {
  comuId: string;
  notices: ComuNotice[];
}

export const NoticeTable: FC<NoticeTableProps> = ({ notices, comuId }) => {
  return (
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
        {notices.map((notice, index) => {
          const { id, title, author, createdAt } = notice;
          return (
            <tr key={id} className="text-center">
              <td className="p-2">{index}</td>
              <td>
                <Link
                  to={`/comu/${
                    comuId === "comu1"
                      ? `main/notices/${id}`
                      : comuId === "main"
                      ? `main/notices/${id}`
                      : comuId.includes("subs/")
                      ? `${comuId}/notices/${id}`
                      : `subs/${comuId}/notices/${id}`
                  }`}
                >
                  {title}
                </Link>
              </td>
              <td>{author.includes("lead") ? "리더" : "운영자"}</td>
              <td>{createdAt}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
