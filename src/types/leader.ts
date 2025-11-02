export type Leader = {
  id: string;
  avatarUrl: string;
  name: string;
  role: string;
  job: string;
  education?: string[];
  careerHistory?: { company: string; position: string; duration: string }[];
  socials?: { platform: string; url: string }[];
  beliefs?: string[]; // 중요하게 여기는 가치, 철학, 전문적 견해 등
};
