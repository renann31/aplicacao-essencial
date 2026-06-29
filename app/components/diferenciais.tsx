import Data from "../data/data.json";

const Diferenciais = () => {
  const diferenciais = Data.diferenciais;

  return (
    <div 
      className="bg-[#759E9E] md:h-144.25 md:mt-10 md:pt-1 z-10"
      id="diferenciais">

      <div className="md:w-225 xl:w-325 mx-auto z-20">
        <h1 className="z-20 font-spartan text-[#D9D9D9] md:text-[50px] xl:text-[64px] md:my-10 md:px-20 xl:px-35">Diferenciais que fazem a diferença</h1>

        <div className="md:grid md:grid-cols-2 md:gap-4.5">
          {diferenciais.map((card, i) => (
            <div key={i} className="z-10 md:w-110 xl:w-158 md:h-30 xl:h-38.5 md:bg-[#D9D9D9]/20 md:text-center md:rounded-2xl md:py-3 xl:py-5 md:px-14 xl:px-26 border border-white/20 bg-white/10 shadow-lg">
              <h1 className="font-spartan text-[#D9D9D9] md:text-[22px] xl:text-[27px] md:pb-3 xl:pb-0 md:font-bold">{card.titulo}</h1>
              <p className="font-spartan text-[#D9D9D9] md:text-[22px] xl:text-[27px] md:font-light md:leading-5 xl:leading-11">{card.texto}</p>
            </div>
          ))}
        </div>

      </div>

    </div>
  );
}

export default Diferenciais;