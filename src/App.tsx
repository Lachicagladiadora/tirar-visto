import { useEffect, useState } from "react";
import { Header } from "./atomic/molecules/Header";
import type { Page } from "./types";
import { NUMBERS, PROCESS } from "./constants";
import { NumberData } from "./atomic/molecules/NumberData";
import { Button } from "./atomic/atoms/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faClock,
  faPhoneVolume,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { H2 } from "./atomic/atoms/H2";
import { H3 } from "./atomic/atoms/H3";
import { Details } from "./atomic/molecules/Details";

function App() {
  const [currentPage, setCurrentPage] = useState<Page>("Home");

  useEffect(() => {
    const page = window.localStorage.getItem("currentPage");
    if (!page) return;
    setCurrentPage(JSON.parse(page));
  }, []);

  return (
    <div className="h-full min-h-[100dvh] w-full max-w-[1440px] flex flex-col items-center justify-center bg-white">
      {/* first section: about */}
      <section className="w-full h-full px-3.5 py-4 flex flex-col max-h-auto  gap-[60px] md:min-h-[940px] md:px-20 md:py-5 lg:flex-row">
        <div className="w-full flex-1">
          <Header currentPage={currentPage} updatePage={setCurrentPage} />
          <H2 className="border-b-2 border-b-border">
            Tire seu Visto conosco e não tenha nenhuma surpresa negativa!
          </H2>
          <div className="w-full  flex flex-col py-[30px] gap-10 md:flex-row md:items-end md:py-[60px] md:gap-5">
            <div className="flex-1">
              <p className="pb-10">
                Com uma equipe altamente treinada, nós temos todos os
                procedimentos para que seu processo seja o mais tranquilo e
                rápido. Uma consultoria completa para você e sua família não ter
                nenhuma preocupação na sua viagem.
              </p>
              <Button className="w-[140px] flex items-center justify-between px-5">
                Saiba mais <FontAwesomeIcon icon={faArrowRight} />
              </Button>
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
          <div className="flex items-center justify-center gap-7 mt-5 lg:justify-start">
            {NUMBERS.map((c, i) => (
              <NumberData key={i} label={c.label} number={c.number} />
            ))}
          </div>
        </div>
        <div className="relative min-h-[900px] md:h-full w-full md:max-w-[762px] lg:w-[792px] bg-[url(./roda-gigante.png)] bg-cover rounded-3xl overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-linear-to-t from-dark/60 to-dark/20 " />
          <Button isDark={false} className="absolute top-0 right-0 m-4">
            Tirar meu visto agora!
          </Button>
          <div className="absolute w-full max-w-[522px] text-light bottom-0 left-0 ml-7 mb-6 pr-7 md:ml-10 md:mb-9 md:pr-12">
            <H3 isLight>Realize o seu sonho com a ajuda da Tirar Visto!</H3>
            <p className="mt-3">
              Com um serviço profissional, você não terá dor de cabeça para todo
              o processo do visto e entrevistas no consulado.
            </p>
          </div>
        </div>
      </section>

      {/* second section: banner */}
      <aside className="relative w-full h-full min-h-[340px] bg-light-dark uppercase text-dark font-medium text-4xl lg:text-[56px]">
        <p className="absolute top-0 left-0 mb-8 py-[40px] px-[30px] w-full max-w-[854px]  md:py-[70px] md:px-[60px] md:mb-0">
          Consultoria completa para tirar seu visto
        </p>
        <div className="absolute top-[176px] right-16 size-12 text-2xl bg-light flex items-center justify-center shadow-md rounded-md text-light stroke-[24px] stroke-dark rotate-[10deg] md:top-[120px] md:right-72 lg:right-80">
          <FontAwesomeIcon icon={faPhoneVolume} />
        </div>
        <div className="absolute bottom-[120px] left-16 size-12 text-2xl bg-light flex items-center justify-center shadow-md rounded-md text-light stroke-[24px] stroke-dark rotate-[10deg] md:bottom-[80px] md:left-40 lg:bottom-[60px] lg:left-60">
          <FontAwesomeIcon icon={faClock} />
        </div>

        <p className="absolute bottom-0 right-0 py-[40px] px-[30px] italic  md:py-[70px] px:right-[60px]">
          você esta em boas mãos!
        </p>
      </aside>

      {/* third section: functionality */}
      <section className="w-full py-10 px-[30px] md:py-[95px] md:px-[60px]">
        <div className="w-full mb-[60px]">
          <Button isDark={false}>Veja como funciona</Button>
          <div className="flex flex-col items-center justify-between lg:flex-row">
            <H2 className="w-full lg:max-w-[420px]">
              Sua tranquilidade não tem preço!
            </H2>
            <p className="flex-1 w-full max-w-[826px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
        </div>
        <div className="w-full flex flex-col gap-9 md:flex-row md:items-center">
          <img
            src="./process.png"
            alt=""
            className="h-full w-full max-h-[444px] min-w-[50%] max-w-[756px]"
          />
          <div>
            {PROCESS.map((c, i) => (
              <Details
                key={i}
                titleDetail={c.title}
                summaryText={
                  <>
                    <FontAwesomeIcon icon={faPlus} /> {c.summary}
                  </>
                }
                details={c.details}
              />
            ))}
            {/* <Details
              titleDetail={"Etapa Inicial"}
              summaryText={
                <>
                  <FontAwesomeIcon icon={faPlus} /> Leia mais
                </>
              }
              details="Lorem Ipsum is simply dummy text of the printing and typesetting
                industry."
            /> */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
