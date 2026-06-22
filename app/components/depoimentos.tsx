import Data from "../data/data.json";

const Depoimentos = () => {
    const depoimentos = Data.depoimentos;

    return(
        <div className="md:w-325 mx-auto md:text-center md:mb-36">
        <h1 className="font-spartan text-[#759E9E] md:text-[64px] md:my-16.5">O que nossos pacientes dizem</h1>
        <div className="md:flex md:gap-5.25">
        {depoimentos.map((depoimento, index) => (
          <div className="bg-[#759E9E] text-[#D9D9D9] md:w-103.5 md:h-88.5 md:px-4.75 md:text-left md:rounded-2xl" key={index}>
            <h1 className="md:text-[25px] md:my-5 md:[text-shadow:0_4px_2px_rgba(0,0,0,0.2)]">★★★★★ </h1>
            <p className="font-spartan md:text-[25px] md:font-light md:my-5">{depoimento.nome}</p>
            <p className="font-spartan md:text-[25px] md:font-light md:leading-7">{depoimento.texto}</p>
          </div>
        ))}
        </div>
      </div>
    );
}

export default Depoimentos;