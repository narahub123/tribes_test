import type { FC } from "react";
import type { ReactImageProps } from "../../types";
import { defaultImage } from "../../assets";

type AvatarProps = ReactImageProps & {
  name?: string;
};

export const Avatar: FC<AvatarProps> = ({
  name,
  className: _className,
  src,
  ...props
}) => {
  const className = ["rounded-full p-2 border-1", _className].join(" ");

  return (
    <img
      src={src ?? defaultImage}
      {...props}
      alt={name ? `${name}의 프로필 사진` : undefined}
      className={className}
    />
  );
};
