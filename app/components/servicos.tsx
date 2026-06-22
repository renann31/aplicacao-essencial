import Image from "next/image";
import Data from "../data/data.json";

const Servicos = () => {
    const servicos = Data.servicos;

    return (
        <div className="mx-auto text-[#347070] md:w-325 md:mt-16 md:gap-23.5">
        <h1 className="font-spartan text-[#759E9E] md:text-[64px] md:font-light md:px-25">Soluções completas para sua saúde bucal </h1>

        <div className="md:grid md:grid-cols-2 md:space-y-4.5 ">
          {servicos.map((servico, index) => (
            <div className="md:flex md:flex-row md:gap-2.5">
              <div className="md:w-79 md:h-97.5 bg-[#759E9E] md:px-14.75 md:py-14.25 md:text-center md:leading-8 md:rounded-4xl" key={index}>
                <h1 className="font-spartan text-[#D9D9D9] md:text-[30px] md:font-semibold md:mb-8">{servico.titulo}</h1>
                <p className="font-spartan text-[#D9D9D9] md:text-[30px] md:font-extralight">{servico.texto}</p>
              </div>

              <Image
                src={servico.imagem}
                alt={servico.titulo}
                width={316}
                height={394}
                className="md:object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    );
}

export default Servicos;