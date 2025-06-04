import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  isDark?: boolean;
  children: ReactNode;
};

export const Button = ({ isDark = true, children, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={twMerge(
        ` py-[12.5px] px-5 rounded-full font-semibold ${
          isDark ? " bg-button-dark text-light" : "bg-button-light text-dark"
        }`,
        props.className
      )}
    >
      {children}
    </button>
  );
};
