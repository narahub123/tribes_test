export type User = {
  id: string; // ex: "u001"
  name: string; // 사용자 실명 또는 표시명
  avatarUrl: string; // 임시 프로필 이미지 URL 또는 import한 이미지 변수
  joinedComus: string[]; // 가입된 모임 id 목록 ex: ["comu1","comu3"]
};
