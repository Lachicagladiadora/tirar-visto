import type { Page } from "../../types";
import { Logo } from "../atoms/Logo";

type HeaderProps = {
  currentPage: Page;
  updatePage: (_p: Page) => void;
};
export const Header = ({ currentPage, updatePage }: HeaderProps) => {
  return (
    <header className="w-full flex flex-col gap-1.5 text-dark md:items-center lg:justify-between lg:flex-row md:py-[29px]">
      <a
        href="#"
        onClick={() => {
          window.localStorage.setItem("currentPage", JSON.stringify("Home"));
          updatePage("Home");
        }}
        className={`${currentPage == "Home" ? "font-bold" : "font-normal"}`}
      >
        <Logo />
      </a>
      <nav className="w-full flex-1 flex gap-1 items-center justify-center ">
        <a
          href="#"
          onClick={() => {
            window.localStorage.setItem("currentPage", JSON.stringify("Home"));
            updatePage("Home");
          }}
          className={`px-3 py-2.5 ${
            currentPage == "Home" ? "font-bold" : "font-normal"
          }`}
        >
          Home
        </a>
        <a
          href="#"
          onClick={() => {
            window.localStorage.setItem(
              "currentPage",
              JSON.stringify("Quem somos")
            );
            updatePage("Quem somos");
          }}
          className={`px-3 py-2.5 ${
            currentPage == "Quem somos" ? "font-bold" : "font-normal"
          }`}
        >
          Quem somos
        </a>
        <a
          href="#"
          onClick={() => {
            window.localStorage.setItem(
              "currentPage",
              JSON.stringify("Serviços")
            );
            updatePage("Serviços");
          }}
          className={`px-3 py-2.5 ${
            currentPage == "Serviços" ? "font-bold" : "font-normal"
          }`}
        >
          Serviços
        </a>
        <a
          href="#"
          onClick={() => {
            window.localStorage.setItem(
              "currentPage",
              JSON.stringify("Contato")
            );
            updatePage("Contato");
          }}
          className={`px-3 py-2.5 ${
            currentPage == "Contato" ? "font-bold" : "font-normal"
          }`}
        >
          Contato
        </a>
      </nav>
    </header>
  );
};
