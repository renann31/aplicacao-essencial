import Image from "next/image";

const Header = () => {
    return (
        <div 
            className="relative w-full h-[109vh]"
            id="inicio">
            <Image
                src="/hero.webp"
                alt="Hero image"
                fill
                className="object-cover"
            />


            {/* TÍTULO */}
            <div className="md:w-225 xl:w-325 left-1/2 -translate-x-1/2 md:h-auto md:absolute md:mt-65">
                <div className="w-165 h-39.5 space-y-8 z-10">
                    <h1 className="font-spartan text-[#D9D9D9] md:text-[80px] xl:text-[100px] font-light leading-20">
                        Seu sorriso é nossa <span className="font-bold">essência</span>
                    </h1>

                    <p className="font-spartan text-[#D9D9D9] md:text-[24px] xl:text-[28px] font-light leading-10">
                        Clínica odontológica familiar com atendimento humanizado,
                        tecnologia moderna e cuidado com cada detalhe da sua saúde bucal.
                    </p>

                    <button className="font-spartan bg-[#D9D9D9]/20 border border-white/20 text-white md:text-[26px] xl:text-[30px] rounded-xl py-2 w-70.5 h-14">
                        Agende sua consulta
                    </button>
                </div>
            </div>

            {/* SOBRE NÓS */}
            <div className="text-[#D9D9D9] font-spartan md:text-[40px] absolute bottom-1 w-full flex justify-center">
                <p>Sobre nós</p>
            </div>
        </div>
    );
};

export default Header;