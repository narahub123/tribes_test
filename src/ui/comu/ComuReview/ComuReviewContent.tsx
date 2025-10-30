import { useComuReviewContext } from "./context";

export const ComuReviewContent = () => {
  const { title, content } = useComuReviewContext();
  return (
    <div>
      {title && <p className="text-xl font-bold py-6">{title}</p>}
      <p>{content}</p>
    </div>
  );
};
