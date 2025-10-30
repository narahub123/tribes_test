import type { ComuNoticeType, ComuReviewType } from "../types/comu";

export const notices: ComuNoticeType[] = [
  {
    id: 1,
    title: "📚 11월 독서 모임 일정 안내",
    author: "운영팀",
    createdAt: "2025-10-28 09:00",
  },
  {
    id: 2,
    title: "🎉 신규 회원 환영 이벤트 진행!",
    author: "운영팀",
    createdAt: "2025-10-25 14:20",
  },
  {
    id: 3,
    title: "💬 커뮤니티 이용 수칙 및 매너 가이드",
    author: "운영팀",
    createdAt: "2025-10-22 18:40",
  },
  {
    id: 4,
    title: "📖 10월 추천 도서 목록 공개",
    author: "운영팀",
    createdAt: "2025-10-20 10:15",
  },
  {
    id: 5,
    title: "🧾 멤버십 결제 시스템 점검 안내 (10/31)",
    author: "운영팀",
    createdAt: "2025-10-19 17:05",
  },
  {
    id: 6,
    title: "🌿 오프라인 모임 장소 변경 안내",
    author: "운영팀",
    createdAt: "2025-10-15 11:30",
  },
  {
    id: 7,
    title: "✍️ 리뷰 작성 이벤트 종료 및 당첨자 발표",
    author: "운영팀",
    createdAt: "2025-10-10 09:45",
  },
  {
    id: 8,
    title: "📢 커뮤니티 이름 변경 투표 결과 발표",
    author: "운영팀",
    createdAt: "2025-10-07 20:00",
  },
  {
    id: 9,
    title: "📦 굿즈 배송 일정 공지 (에코백·책갈피)",
    author: "운영팀",
    createdAt: "2025-10-03 13:50",
  },
  {
    id: 10,
    title: "🔒 개인정보 보호정책 개정 안내",
    author: "운영팀",
    createdAt: "2025-10-01 08:10",
  },
];

export const comuReviews: ComuReviewType[] = [
  {
    reviewId: "r_001",
    userId: "u001",
    username: "책사랑러",
    commentDate: "2025-10-25 19:20",
    clueName: "행복의 조건을 읽고",
    clubNickname: "트레바리 홍대 A클럽",
    attendanceCount: 5,
    title: "나 자신을 다시 돌아보게 한 모임이었어요",
    content:
      "책 내용을 넘어, 다른 멤버들의 시각을 통해 제 생각의 폭이 넓어졌어요. 이런 대화가 진짜 독서의 즐거움이 아닐까 싶네요.",
    meta: {
      loves: ["u005", "u009"],
      likes: ["u002", "u003", "u006"],
      smiles: ["u004"],
    },
  },
  {
    reviewId: "r_002",
    userId: "u002",
    username: "북커피",
    commentDate: "2025-10-26 09:15",
    clueName: "미움받을 용기",
    clubNickname: "아그레아블 강남 Mind Club",
    attendanceCount: 2,
    title: "용기를 얻은 시간",
    content:
      "서로의 고민을 진심으로 들어주는 분위기 덕분에 마음이 한결 가벼워졌어요.",
    meta: {
      loves: ["u001"],
      laughs: ["u007"],
      surprises: ["u008", "u010"],
    },
  },
  {
    reviewId: "r_003",
    userId: "u003",
    username: "페이지터너",
    commentDate: "2025-10-20 20:45",
    clueName: "죽음에 관하여",
    clubNickname: "트레바리 종로 C클럽",
    attendanceCount: 8,
    title: "어려운 주제지만 의미 있었던 토론",
    content:
      "죽음을 주제로 한 대화라 무거웠지만, 오히려 삶을 더 진지하게 바라보는 계기가 되었어요.",
    meta: {
      likes: ["u002", "u005"],
      smiles: ["u009"],
    },
  },
  {
    reviewId: "r_004",
    userId: "u004",
    username: "문장수집가",
    commentDate: "2025-10-18 13:00",
    clueName: "달러구트 꿈 백화점",
    clubNickname: "아그레아블 잠실 Dreamers",
    attendanceCount: 3,
    title: "따뜻하고 몽환적인 이야기들",
    content:
      "책 속의 이야기처럼 우리 모임도 따뜻했어요. 서로의 꿈 이야기를 들으며 힐링했습니다.",
    meta: {
      loves: ["u001", "u006", "u007"],
      smiles: ["u003"],
    },
  },
  {
    reviewId: "r_005",
    userId: "u005",
    username: "리더박",
    commentDate: "2025-10-17 11:40",
    clueName: "사피엔스",
    clubNickname: "트레바리 강남 History Club",
    attendanceCount: 10,
    title: "인류의 흐름을 함께 읽는 즐거움",
    content:
      "책은 어렵지만 토론을 통해 훨씬 흥미로워졌어요. 모두가 한 문장씩 나누는 방식이 좋았습니다.",
    meta: {
      likes: ["u004", "u009", "u010"],
      surprises: ["u002"],
    },
  },
  {
    reviewId: "r_006",
    userId: "u006",
    username: "책방고양이",
    commentDate: "2025-10-14 21:30",
    clueName: "아침의 피아노",
    clubNickname: "아그레아블 서촌 감성클럽",
    attendanceCount: 1,
    title: "첫 모임이었는데 너무 좋았어요",
    content:
      "책 이야기만 하는 게 아니라 서로의 일상과 감정도 나눌 수 있었어요. 다음 모임이 벌써 기다려집니다.",
    meta: {
      loves: ["u001", "u008"],
    },
  },
  {
    reviewId: "r_007",
    userId: "u007",
    username: "책읽는공대생",
    commentDate: "2025-10-10 22:10",
    clueName: "넛지",
    clubNickname: "트레바리 판교 Insight Club",
    attendanceCount: 6,
    title: "행동경제학이 이렇게 재밌을 줄은!",
    content: "서로 다른 분야 사람들이 각자 시각으로 해석하는 게 흥미로웠어요.",
    meta: {
      likes: ["u002", "u004", "u009"],
      laughs: ["u003"],
    },
  },
  {
    reviewId: "r_008",
    userId: "u008",
    username: "책바다",
    commentDate: "2025-10-08 18:00",
    clueName: "나미야 잡화점의 기적",
    clubNickname: "아그레아블 북촌 Classic",
    attendanceCount: 4,
    title: "감동과 여운이 남는 이야기",
    content:
      "책 이야기를 나누며 눈물 흘린 분들도 있었어요. 함께 공감할 수 있는 시간이었습니다.",
    meta: {
      loves: ["u001", "u006"],
      smiles: ["u002", "u009"],
    },
  },
  {
    reviewId: "r_009",
    userId: "u009",
    username: "프로리더",
    commentDate: "2025-10-05 16:40",
    clueName: "트렌드 코리아 2026",
    clubNickname: "트레바리 성수 Future Club",
    attendanceCount: 9,
    title: "내년 트렌드를 예측하며 현실감각 업!",
    content:
      "각자 산업 분야별 시각이 달라서 배울 게 많았어요. 다음엔 실제 사례를 더 나누면 좋겠어요.",
    meta: {
      likes: ["u003", "u007", "u010"],
      surprises: ["u005"],
    },
  },
  {
    reviewId: "r_010",
    userId: "u010",
    username: "북라이트",
    commentDate: "2025-10-01 20:25",
    clueName: "아몬드",
    clubNickname: "아그레아블 신촌 Growth Club",
    attendanceCount: 7,
    title: "감정과 성장에 대해 깊이 생각한 시간",
    content:
      "책 속 주인공의 감정을 나의 경험에 빗대어 이야기하며 많은 위로를 받았습니다.",
    meta: {
      loves: ["u002", "u005"],
      laughs: [],
      smiles: ["u001"],
    },
  },
];
