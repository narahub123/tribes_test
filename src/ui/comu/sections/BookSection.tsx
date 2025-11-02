import { useState } from "react";
import { books } from "../../../data/books";
import { ComuSectionHeader } from "../ComuSectionHeader";
import { BookImage } from "../subComu";

export const BookSection = () => {
  const [selection, setSelection] = useState(books[0].id);

  const handleSelection = (id: string) => {
    setSelection(id);
  };

  return (
    <section className="relative">
      <ComuSectionHeader title={"책"} />
      <div className="relative py-10 overflow-hidden">
        <img
          src={books.filter((b) => b.id === selection)[0].imgUrl}
          aria-hidden={true}
          className="w-full absolute top-0 left-0 -z-10 object-cover filter blur-lg"
        />
        <div className="flex gap-2 absolute right-4 top-4">
          {books.map((b) => {
            const [year, month] = b.schedule.split("-");
            const isSelected = b.id === selection;
            return (
              <button
                className={`px-2 py-4 rounded-xl cursor-pointer ${
                  isSelected ? "bg-black text-white" : "bg-gray-200"
                }`}
                onClick={() => handleSelection(b.id)}
                key={b.id}
              >
                <p className="text-sm">{year}</p>
                <p className="font-bold">{month + "월"}</p>
              </button>
            );
          })}
        </div>

        <div className="flex justify-center">
          <BookImage
            book={books.filter((b) => b.id === selection)[0]}
            className="w-[200px]"
          />
        </div>
      </div>
    </section>
  );
};
