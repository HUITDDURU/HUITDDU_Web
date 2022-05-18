/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Image, { ImageProps } from "next/image";
import { FC, useState } from "react";

interface PropsType {
  defaultImage: StaticImageData;
  src: string | StaticImageData | null | undefined;
}

const ImageWithDefaultImage: FC<Omit<ImageProps, "src"> & PropsType> = (
  props
) => {
  const { src, defaultImage, ...rest } = props;
  const [srcState, setSrcState] = useState<typeof src>(src);

  const onImageError = () => {
    setSrcState(defaultImage);
  };

  return (
    <Image onError={onImageError} {...rest} src={srcState || defaultImage} />
  );
};

export default ImageWithDefaultImage;
