import Image from "next/image";
import Data from "../data/data.json";

const Servicos = () => {
  const servicos = Data.servicos;

  return (
    <>
      {/* LINHA-1 */}
      <Image
        src="/linha-1.svg"
        alt="linha-2"
        width={2000}
        height={300}
        className="absolute object-cover md:-translate-y-1/3 xl:-translate-y-1/2 xl:pb-20 z-0"
      ></Image>
      <div
        className="z-10 mx-auto text-[#347070] md:w-225 xl:w-325 md:mt-16 md:gap-23.5"
        id="serviços">


        <h1 className="font-spartan text-[#759E9E] md:text-[50px] xl:text-[64px] md:font-light md:px-9 xl:px-25">Soluções completas para sua saúde bucal </h1>

        <div className="md:grid md:grid-cols-2 md:space-y-4.5 z-10">
          {servicos.map((servico, index) => (
            <div key={index} className="md:flex md:flex-row md:gap-1.5 xl:gap-2.5">
              <div className="md:w-55 xl:w-79 md:h-70 xl:h-98.5 bg-[#759E9E] md:px-12 md:py-2 xl:px-14.75 xl:py-14.25 md:text-center md:leading-8 md:rounded-4xl" key={index}>
                <h1 className="font-spartan text-[#D9D9D9] md:text-[26px] xl:text-[30px] md:font-semibold md:mb-6">{servico.titulo}</h1>
                <p className="font-spartan text-[#D9D9D9] md:text-[26px] xl:text-[30px] md:font-extralight md:leading-5.5 xl:leading-9">{servico.texto}</p>
              </div>

              <Image
                src={servico.imagem}
                alt={servico.titulo}
                width={220}
                height={280}
                className="md:object-contain xl:w-79 xl:h-98.5"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Servicos;