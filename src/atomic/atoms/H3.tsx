import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type H3Props = ComponentPropsWithoutRef<"h3"> & {
  children: ReactNode;
  isLight?: boolean;
};
export const H3 = ({ children, isLight = false, ...props }: H3Props) => {
  return (
    <h3
      {...props}
      className={twMerge(
        `font-semibold text-[44px] leading-[130.8%] tracking-tighter ${
          isLight ? "text-light" : "text-dark"
        }`,
        props.className
      )}
    >
      {" "}
      {children}
    </h3>
  );
};
