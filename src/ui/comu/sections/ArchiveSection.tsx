import { books } from "../../../data";
import { ComuSectionHeader } from "../ComuSectionHeader";
import { BookImage } from "../subComu";

export const ArchiveSection = () => {
  const handleDownload = (id: string) => {
    console.log(id);
  };
  return (
    <section>
      <ComuSectionHeader title={"지료실"} />
      <div className="px-2 py-8 flex gap-2">
        {books.map((b) => (
          <div key={b.id} className="w-full flex flex-col items-center gap-4">
            <BookImage book={b} />
            <button
              onClick={() => handleDownload(b.id)}
              className="bg-blue-400 text-white py-2 px-4 rounded-3xl cursor-pointer"
            >
              다운로드
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};
