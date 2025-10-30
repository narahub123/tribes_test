import { useNavigate } from "react-router-dom";
import { Icon } from "./Icon";
import type { FC } from "react";

interface PrevButtonProps {
  className?: string;
}

export const PrevButton: FC<PrevButtonProps> = ({ className: _className }) => {
  const navigate = useNavigate();

  const className = ["text-2xl cursor-pointer", _className].join(" ");

  return (
    <button onClick={() => navigate(-1)}>
      <Icon name="left" className={className} />
    </button>
  );
};
