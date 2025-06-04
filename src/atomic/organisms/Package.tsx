import type { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";
import type { PackageData } from "../../types";
import { Button } from "../atoms/Button";
import { H3 } from "../atoms/H3";

type PackageProps = ComponentPropsWithoutRef<"div"> & {
  packageAvailable: PackageData;
};
export const Package = ({ packageAvailable, ...props }: PackageProps) => {
  return (
    <div
      {...props}
      className={twMerge(
        "w-full min-w-[420px] max-w-[424px] h-full p-4 rounded-3xl border border-border flex flex-col gap-8",
        props.className
      )}
    >
      <img src={packageAvailable.src} alt="" />
      <div className="flex flex-col gap-5">
        <div className="flex gap-4">
          <Button
            className={`border bg-light ${
              packageAvailable.isPremium
                ? "border-text text-text"
                : "border-dark text-dark"
            }`}
          >
            Basic
          </Button>
          <Button
            className={`border bg-light ${
              !packageAvailable.isPremium
                ? "border-text text-text"
                : "border-dark text-dark"
            }`}
          >
            Premium
          </Button>
        </div>
        <div className="flex flex-col gap-4 pb-5 border-b border-b-border">
          <H3 className="text-[28px]">{packageAvailable.label}</H3>
          <div className="flex gap-10">
            <div className="w-1/2">
              <span className="block text-dark font-medium mb-2">
                Atendimento
              </span>
              <span className="block">{packageAvailable.attention}</span>
            </div>
            <div className="w-1/2">
              <span className="block text-dark font-medium mb-2">Tempo</span>
              <span className="block">{packageAvailable.time}</span>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-1">
            <span>A partir de</span>
            <p className="text-dark text-[32px] font-semibold">
              {packageAvailable.price}
            </p>
          </div>
          <Button>
            {packageAvailable.available ? "Contratar" : "Invalid"}
          </Button>
        </div>
      </div>
    </div>
  );
};
