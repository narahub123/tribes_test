import type { FC } from "react";
import type { BookInfoType } from "../../../types";

interface BookImageProps {
  book: BookInfoType;
  className?: string;
}

export const BookImage: FC<BookImageProps> = ({
  book,
  className: _className,
}) => {
  const { imgUrl, name, author } = book;

  const className = ["object-cover aspect-3/4 shadow-lg", _className].join(" ");
  return (
    <div className="space-y-4">
      <img src={imgUrl} alt={name} className={className} />
      <div className="space-y-2">
        <p className="text-center font-bold text-lg">{name}</p>
        <p className="text-center">{author}</p>
      </div>
    </div>
  );
};
