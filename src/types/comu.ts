import type { MouseEvent } from "react";

export interface ComuLeaderProfile {
  id: string;
  avatarUrl: string;
  role: string;
  name: string;
  job: string;
}

export interface ComuNoticeType {
  id: number;
  title: string;
  author: string;
  createdAt: string;
}

// 리액션 키 목록
export type ComuMetaKey =
  | "loves"
  | "likes"
  | "laughs"
  | "smiles"
  | "surprises"
  | "questionables";

// meta 객체 타입 (각 키는 userId 배열 또는 undefined)
export type ComuMeta = {
  loves?: string[]; // ex: ["u001","u002"]
  likes?: string[];
  laughs?: string[];
  smiles?: string[];
  surprises?: string[];
  questionables?: string[];
};

export interface ComuReviewType {
  reviewId: string;
  userId: string; // 후기 작성자 고유 ID (예: "u001")
  username: string; // 유저 닉네임 (예: "책사랑러")
  profileImage?: string; // 프로필 이미지 경로 또는 URL (예: "/profiles/user1.png")
  commentDate: string; // 작성일시 (ISO-like string, "YYYY-MM-DD HH:mm")
  clueName: string; // 이번 모임에서 다룬 책/주제명 (예: "사피엔스")
  clubNickname: string; // 소속 클럽/모임 닉네임 (예: "트레바리 강남 History Club")
  attendanceCount: number; // 참석 인원 수 또는 본인 참석 횟수(요청 맥락에 따름)
  title?: string; // 후기 제목
  content: string; // 후기 본문
  meta: ComuMeta; // 리액션 메타 데이터 (선택사항)
}

export interface ComuReviewContextType extends ComuReviewType {
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
