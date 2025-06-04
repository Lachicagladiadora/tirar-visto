import type { Image, NumberData, Process } from "./types";

export const NUMBERS: NumberData[] = [
  {
    number: "509",
    label: "Vistos Tirados",
  },
  {
    number: "602",
    label: "Passaportes Tirados",
  },
  {
    number: "634",
    label: "Famílias Felizes",
  },
];

export const PROCESS: Process[] = [
  {
    title: "Etapa Inicial",
    summary: "Leia mais",
    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    title: "Processo de Entrevista",
    summary: "Leia mais Leia mais",
    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    title: "Entrega de Documentos",
    summary: "Leia mais",
    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
];

export const FIRST_DESTINATION: Image[] = [
  {
    label: "Bali, Indonesia",
    src: "./indonesia.png",
  },
  {
    label: "Nova York, Estados Unidos",
    src: "./us.png",
  },
  {
    label: "Santorini, Grecia",
    src: "./grecia.png",
  },
];
export const SECOND_DESTINATION: Image[] = [
  {
    label: "Paris, França",
    src: "./france.png",
  },
  {
    label: "Cidade do Cabo, Africa do Sul",
    src: "./africa.png",
  },
  {
    label: "Mumbai, India",
    src: "india.png",
  },
];
