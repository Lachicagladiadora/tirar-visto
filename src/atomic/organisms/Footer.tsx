import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "../atoms/Button";
import { H2 } from "../atoms/H2";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

export const Footer = () => {
  return (
    <footer className="w-full ">
      <div className="w-full flex flex-col gap-10 py-[70px] px-[14px] md:px-[60px]">
        <aside className="w-full flex flex-col gap-5 justify-center items-center md:flex-row md:justify-between">
          <div className="w-full max-w-[546px]">
            <H2>Está com alguma dúvida?</H2>
            <p className="w-full pt-3 pb-10">
              Entre em contato através do nosso canal direto ao cliente através
              do botão abaixo
            </p>
            <Button>Central de Atendimento</Button>
          </div>
          <div className="h-[68px] w-full max-w-[500px] border-b border-b-dark pb-3 text-dark text-3xl flex items-center justify-between my-10 md:text-[40px] md:my-0">
            Receba novidades
            <FontAwesomeIcon icon={faArrowUp} className="rotate-[45deg]" />
          </div>
        </aside>
        <div className="w-full flex flex-col items-center justify-center  md:flex-row md:justify-between">
          <aside className="w-full max-w-[451px]">
            <h4 className="font-semibold text-dark pb-5">
              Siga em nossa redes:
            </h4>
            <div className="flex gap-5 flex-wrap">
              <Button className="py-2.5 px-2 border bg-light border-dark text-dark flex items-center justify-center gap-1">
                Instagram
              </Button>
              <Button className=" border bg-light border-dark text-dark flex items-center justify-center gap-1">
                X
              </Button>
              <Button className="py-2.5 px-2 border bg-light border-dark text-dark flex items-center justify-center gap-1">
                Facebook
              </Button>
              <Button className="py-2.5 px-2 border bg-light border-dark text-dark flex items-center justify-center gap-1">
                Youtube
              </Button>
            </div>
          </aside>
          <div className="w-full max-w-[612px] flex flex-wrap justify-center items-center gap-4 mt-20 md:mt-0 md:justify-between md:gap-10">
            <div>
              <h4 className="pb-5 font-medium text-dark">Empresa</h4>
              <ul className="flex flex-col gap-3">
                <li>Home</li>
                <li>Quem somos</li>
                <li>Serviços</li>
                <li>Contato</li>
              </ul>
            </div>

            <div>
              <h4 className="pb-5 font-medium text-dark">Novidades</h4>
              <ul className="flex flex-col gap-3">
                <li>Passaporte</li>
                <li>Visto</li>
                <li>Entrevista</li>
                <li>Polícia Federal</li>
              </ul>
            </div>

            <div>
              <h4 className="pb-5 font-medium text-dark">Suporte</h4>
              <ul className="flex flex-col gap-3">
                <li>FAQ</li>
                <li>Contato</li>
                <li>Dúvidas Frequentes</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div
        role="copywriting"
        className="w-full h-20 text-center text-dark border-t border-t-border py-8"
      >
        © 2025 Tirar Visto - Todos os Direitos Reservados
      </div>
    </footer>
  );
};
