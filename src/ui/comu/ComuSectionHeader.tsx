import type { FC } from "react";

interface ComuSectionHeaderProps {
  title: string;
  className?: string;
}

export const ComuSectionHeader: FC<ComuSectionHeaderProps> = ({
  title,
  className: _className,
}) => {
  const className = ["flex items-center gap-4", _className].join(" ");
  return (
    <div className={className}>
      <p className="text-3xl font-bold">{title}</p>
      <hr className="flex-1 border-0.5" />
    </div>
  );
};
