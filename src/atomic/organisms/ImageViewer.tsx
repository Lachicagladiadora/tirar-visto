import { useState, type ComponentPropsWithoutRef } from "react";
import type { Image } from "../../types";
import { twMerge } from "tailwind-merge";

type ImageViewerProps = ComponentPropsWithoutRef<"div"> & {
  imageList: Image[];
};

export const ImageViewer = ({ imageList, ...props }: ImageViewerProps) => {
  const [currentImg, setCurrentImg] = useState(1);

  return (
    <div
      {...props}
      className={twMerge(
        "w-full flex gap-2 items-center justify-center sm:gap-3 md:gap-5",
        props.className
      )}
    >
      {imageList.map((c, i) => {
        return (
          <img
            src={c.src}
            alt=""
            key={i}
            className={`${
              currentImg === i
                ? "size-48 sm:size-72 md:size-[280px]"
                : "size-16 sm:size-40 md:w-[280px] md:h-[240px]"
            }`}
            onClick={() => setCurrentImg(i)}
          />
        );
      })}
    </div>
  );
};
