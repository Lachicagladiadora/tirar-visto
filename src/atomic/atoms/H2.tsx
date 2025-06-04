import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type H2Props = ComponentPropsWithoutRef<"h2"> & { children: ReactNode };
export const H2 = ({ children, ...props }: H2Props) => {
  return (
    <h2
      {...props}
      className={twMerge(
        "py-6 font-[500] text-[28px] text-dark leading-[130.8%] tracking-tight md:text-[54px] md:py-8",
        props.className
      )}
    >
      {" "}
      {children}
    </h2>
  );
};
