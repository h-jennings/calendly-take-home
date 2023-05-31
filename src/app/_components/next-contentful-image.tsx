"use client";
import Image, { ImageLoaderProps, ImageProps } from "next/image";

const contentfulLoader = ({ src, width, quality }: ImageLoaderProps) => {
  return `${src}&w=${width}&q=${quality ?? 90}`;
};

interface NextImageProps extends Omit<ImageProps, "src"> {
  format?: string;
  src: string;
}

export const NextContentfulImage = ({
  alt,
  format,
  src,
  ...rest
}: NextImageProps) => {
  return (
    <Image
      {...rest}
      loader={contentfulLoader}
      src={`${src}?fm=webp`}
      alt={alt ?? ""}
    />
  );
};
