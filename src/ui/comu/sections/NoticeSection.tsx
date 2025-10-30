import { Link } from "react-router-dom";
import { MainComu, notices } from "../../../data";
import { ComuSectionHeader } from "../ComuSectionHeader";

export const NoticeSection = () => {
  const { title } = MainComu.notice;
  return (
    <section>
      <ComuSectionHeader title={title} />
      <div className="py-4">
        <table className="w-full">
          <thead>
            <tr>
              <th className="p-2">No</th>
              <th>제목</th>
              <th>글쓴이</th>
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
                    <Link to={`/notices/main/${id}`}>{title}</Link>
                  </td>
                  <td>{author}</td>
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
