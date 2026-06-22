import Image from "next/image";

const Header = () => {
    return (
        <div className="relative w-full h-screen">
            <Image
                src="/hero.png"
                alt="Hero image"
                fill
                className="object-cover"
            />

            {/* TÍTULO */}
            <div className="absolute top-65 ml-30 w-165 h-39.5 space-y-8 z-10">
                <h1 className="font-spartan text-[#D9D9D9] text-[100px] font-light leading-20">
                    Seu sorriso é nossa <span className="font-bold">essência</span>
                </h1>

                <p className="font-spartan text-[#D9D9D9] text-[28px] font-light leading-7">
                    Clínica odontológica familiar com atendimento humanizado,
                    tecnologia moderna e cuidado com cada detalhe da sua saúde bucal.
                </p>

                <button className="font-spartan bg-[#D9D9D9]/20 border border-white/20 text-white text-[30px] rounded-xl py-2 w-70.5 h-14">
                    Agende sua consulta
                </button>
            </div>

            {/* SOBRE NÓS */}
            <div className="text-[#D9D9D9] font-spartan md:text-[40px] absolute -bottom-2.5 w-full flex justify-center">
                <p>Sobre nós</p>
            </div>
        </div>
    );
};

export default Header;