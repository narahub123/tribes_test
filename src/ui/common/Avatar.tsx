import type { FC } from "react";
import { Image } from "../../ui";
import type { ReactImageProps } from "../../types";

type AvatarProps = ReactImageProps & {
  name?: string;
};

export const Avatar: FC<AvatarProps> = ({
  name,
  className: _className,
  ...props
}) => {
  const className = ["rounded-full p-2 border-1", _className].join(" ");
  return (
    <Image
      {...props}
      alt={name ? `${name}의 프로필 사진` : undefined}
      className={className}
    />
  );
};
