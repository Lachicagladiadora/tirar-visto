import { useEffect, useState } from "react";
import { Header } from "./atomic/molecules/Header";
import type { Page } from "./types";
import { NUMBERS } from "./constants";
import { NumberData } from "./atomic/atoms/NumberData";
import { Button } from "./atomic/atoms/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons/faArrowCircleLeft";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [currentPage, setCurrentPage] = useState<Page>("Home");

  useEffect(() => {
    const page = window.localStorage.getItem("currentPage");
    if (!page) return;
    setCurrentPage(JSON.parse(page));
  }, []);

  return (
    <div className="h-full min-h-[100dvh] w-full max-w-[1440px] flex items-center justify-center bg-white">
      {/* first section: about */}
      <section className="w-full h-full p-3.5 flex flex-col max-h-auto md:min-h-[940px] md:p-20 lg:flex-row gap-[60px]">
        <div className="w-full lg:w-1/2">
          <Header currentPage={currentPage} updatePage={setCurrentPage} />
          <h1 className="py-6 font-[500] text-[28px] text-dark border-b-2 border-b-border md:text-[54px] md:py-8">
            Tire seu Visto conosco e não tenha nenhuma surpresa negativa!
          </h1>
          <div className="w-full flex flex-col py-[30px] gap-10 md:flex-row md:items-end md:py-[60px] md:gap-5">
            <div className="flex-1">
              <p className="pb-10">
                Com uma equipe altamente treinada, nós temos todos os
                procedimentos para que seu processo seja o mais tranquilo e
                rápido. Uma consultoria completa para você e sua família não ter
                nenhuma preocupação na sua viagem.
              </p>
              <Button>Saiba mais</Button>
            </div>
            <div className="w-fit md:max-w-[191px] flex flex-col mx-auto md:mx-0">
              <img
                src="./bruna.png"
                alt="Portada de video de Bruna"
                className=""
              />
              <div className="w-full py-10 flex items-center justify-between md:py-5">
                <div className="flex flex-col gap-1">
                  <p className="font-bold">Conheça a Bruna</p>
                  <p>Ver vídeo</p>
                </div>
                <Button className="py-2 px-3 text-2xl font-light">
                  <FontAwesomeIcon icon={faArrowRight} />
                </Button>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-7 lg:justify-start">
            {NUMBERS.map((c, i) => (
              <NumberData key={i} label={c.label} number={c.number} />
            ))}
          </div>
        </div>
        <div className="relative min-h-[940px] md:h-full w-full md:flex-1 bg-[url(./roda-gigante.png)] bg-cover rounded-3xl overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-dark opacity-10 " />
          <Button isDark className="absolute top-0 right-0 m-4">
            Tirar meu visto agora!
          </Button>
          <div className="absolute w-full max-w-[522px] text-light bottom-0 left-0 ml-7 mb-6 pr-7 md:ml-10 md:mb-9 md:pr-12">
            <h3 className="font-semibold text-[44px] leading-[130.8%] tracking-tighter">
              Realize o seu sonho com a ajuda da Tirar Visto!
            </h3>
            <p className="mt-3">
              Com um serviço profissional, você não terá dor de cabeça para todo
              o processo do visto e entrevistas no consulado.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
