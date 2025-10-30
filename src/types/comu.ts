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
  clubName: string; // 이번 모임에서 다룬 책/주제명 (예: "사피엔스")
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

// 서브 커뮤 목록
// =======================
// TypeScript 타입 정의
// =======================
export interface Fees {
  signupFee?: number; // 가입비 (원)
  monthlyFee?: number; // 회비 (원)
  note?: string; // 추가 설명(선택)
}

export interface ProgramInfoType {
  title: string; // 프로그램 제목
  subtitle?: string; // 한줄 소개
  description?: string; // 카드 본문 설명
  target?: string; // 대상 (예: "일반 전체")
  fees?: Fees; // 비용 정보
  schedule?: string; // 일정 (예: "토요일 (오전)")
  location?: string; // 장소 (예: "서울 송파")
  createdAt?: string; // 생성일 (선택, "YYYY-MM-DD")
}

export interface SubComuCardType extends ProgramInfoType {
  id: string;
  hostAvatar: string;
  hostName: string;
}

export type ComuInfoType = "intro" | "vision" | "mission";

export type ComuInfo = Record<ComuInfoType, string>;

export type Comu = {
  id: string;
  header: {
    title: "Leader";
    desc: string;
  };
  leader: {
    leaderId: string;
    info: ComuInfo;
  };
  leaderships?: string[];
  origin: string;
  visions: string[];
  missions: string[];
  programInfo: ProgramInfoType;
  subComus: string[];
};

export type ComuContextType = {
  comuId: string;
};

export type ComuNotice = {
  id: string;
  title: string;
  author: string;
  createdAt: string; // ex: "5분 전", "2일 전", "2025-09-01"
};
