import Data from "../data/data.json";

const Diferenciais = () => {
    const diferenciais = Data.diferenciais;

    return (
        <div className="bg-[#759E9E] md:h-144.25 md:mt-10 md:pt-1">
        <div className="md:w-325 mx-auto">
          <h1 className="font-spartan text-[#D9D9D9] md:text-[64px] md:my-10 md:px-35">Diferenciais que fazem a diferença</h1>
          <div className="md:grid md:grid-cols-2 md:gap-4.5">
            {diferenciais.map((card, i) => (
              <div key={i} className="md:w-158 md:h-38.5 md:bg-[#D9D9D9]/20 md:text-center md:rounded-2xl md:py-5 md:px-26">
                <h1 className="font-spartan text-[#D9D9D9] md:text-[27px] md:font-bold">{card.titulo}</h1>
                <p className="font-spartan text-[#D9D9D9] md:text-[27px] md:font-light">{card.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
}

export default Diferenciais;