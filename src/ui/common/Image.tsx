import type { FC } from "react";
import type { ReactImageProps } from "../../types";

type ImageProps = ReactImageProps & {
  alt?: string;
};

export const Image: FC<ImageProps> = ({ alt, ...props }) => {
  return <img {...props} alt={alt} />;
};
