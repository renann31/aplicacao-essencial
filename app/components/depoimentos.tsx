import Image from "next/image";
import Data from "../data/data.json";

const Depoimentos = () => {
  const depoimentos = Data.depoimentos;

  return (
    <>

      {/* LINHA-2 */}
      <Image
        src="/linha-2.svg"
        alt="linha-2"
        width={1800}
        height={330}
        className="absolute object-cover rotate-24 -translate-y-1/2 translate-x-1/5 z-0 pl-120"
      ></Image>

      {/* LINHA-3 */}
      <Image
        src="/linha-3.svg"
        alt="linha-2"
        width={2000}
        height={230}
        className="absolute object-cover translate-y-1/6 z-0"
      ></Image>

      {/* LINHA-4 */}
      <Image
        src="/linha-4.svg"
        alt="linha-2"
        width={800}
        height={120}
        className="absolute object-cover translate-y-1/2 pt-5 z-0"
      ></Image>

      <div
        className="relative md:225 xl:w-325 mx-auto md:text-center md:mb-36"
        id="depoimentos">
        {/* Trapézio */}
        <div className="mx-auto md:w-78.75 md:h-15 md:-translate-y-3 md:flex md:items-center md:justify-center">
          <Image
            src="/depoimentos.svg"
            alt="depoimentos"
            width={315}
            height={54}
            className="md:object-contain md:absolute"
          ></Image>
          <p className="font-spartan text-[#D9D9D9] md:absolute md:font-light md:text-[40px]">Depoimentos</p>
        </div>


        <h1 className="font-spartan text-[#759E9E] md:text-[64px] md:my-16.5">
          O que nossos pacientes dizem
        </h1>

        <div className="md:flex md:gap-3 md:w-225 md:mx-auto xl:w-auto xl:gap-5.25">
          {depoimentos.map((depoimento, index) => (
            <div
              key={index}
              className="bg-[#759E9E] text-[#D9D9D9] md:w-85 xl:w-103.5 md:h-94 xl:h-88.5 md:px-4.75 md:text-left md:rounded-2xl md:shadow-[1px_4px_4px_rgba(0,0,0,0.3)]"
            >
              <h1 className="md:text-[25px] md:my-5 md:[text-shadow:0_4px_2px_rgba(0,0,0,0.2)]">
                ★★★★★
              </h1>

              <p className="font-spartan md:text-[25px] md:font-light md:my-5">
                {depoimento.nome}
              </p>

              <p className="font-spartan md:text-[25px] md:font-light md:leading-6 xl:leading-7">
                {depoimento.texto}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Depoimentos