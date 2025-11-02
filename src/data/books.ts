import { book1, book2, book3 } from "../assets";
import type { BookInfoType } from "../types";

export const books: BookInfoType[] = [
  {
    id: "book1",
    imgUrl: book1,
    name: "라이프 서핑",
    author: "장주영",
    schedule: "2025-11-02",
  },
  {
    id: "book2",
    imgUrl: book2,
    name: "기획자의 경험",
    author: "장주영",
    schedule: "2025-12-09",
  },
  {
    id: "book3",
    imgUrl: book3,
    name: "한사람의 위대한 변화",
    author: "장주영",
    schedule: "2026-01-16",
  },
];
