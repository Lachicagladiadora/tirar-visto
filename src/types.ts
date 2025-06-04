import type { ReactNode } from "react";

export type Page = "Home" | "Quem somos" | "Serviços" | "Contato";

export type NumberData = {
  number: string;
  label: string;
};

export type Process = {
  title: ReactNode;
  summary: ReactNode;
  details: string;
};

export type Image = {
  label: string;
  src: string;
};

export type PackageData = {
  label: string;
  src: string;
  isPremium: boolean;
  attention: string;
  time: string;
  price: string;
  available: boolean;
};
