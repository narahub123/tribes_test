// scripts/copyIndexTo404.js (ESM)
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// 현재 파일 경로
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 프로젝트 루트 기준으로 dist 경로 지정
const projectRoot = path.resolve(__dirname, "../../"); // copyIndexTo404.js 위치 기준
const distDir = path.join(projectRoot, "dist");

const indexPath = path.join(distDir, "index.html");
const destPath = path.join(distDir, "404.html");

// dist 폴더 존재 확인
if (!fs.existsSync(distDir)) {
  console.error(
    "Error: dist 폴더가 없습니다. 먼저 `npm run build`를 실행하세요."
  );
  process.exit(1);
}

// index.html 존재 확인
if (!fs.existsSync(indexPath)) {
  console.error(
    "Error: dist/index.html을 찾을 수 없습니다. 빌드가 정상적으로 생성되었는지 확인하세요."
  );
  process.exit(1);
}

// index.html → 404.html 복사
try {
  fs.copyFileSync(indexPath, destPath);
  console.log("✅ index.html → 404.html 복사 완료");
} catch (err) {
  console.error("파일 복사 중 오류:", err);
  process.exit(1);
}
