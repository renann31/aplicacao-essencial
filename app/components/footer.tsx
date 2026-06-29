import Image from "next/image"

const Footer = () => {
    return (
        <div 
            className="bg-[#759E9E] md:h-139.5 md:py-16 md:text-center"
            id="footer">

            <h1 className="font-spartan text-[#D9D9D9] md:text-[56px] xl:text-[64px] md:font-medium">Pronto para transformar seu sorriso?</h1>
            <p className="font-spartan text-[#D9D9D9] md:text-[25px] md:font-light md:px-30 xl:px-105">Agende sua consulta hoje mesmo e decubra como podemos ajudar você e sua família a manter um sorriso saudável e bonito
            </p>
            <button className="font-spartan bg-[#D9D9D9]/20 text-[#D9D9D9] md:text-[30px] md:w-70.5 md:h-14 md:my-15 md:rounded-2xl border border-white/20 shadow-md">Agende   sua Consulta
            </button>

            <div className="md:w-225 xl:w-325 md:h-px bg-[#D9D9D9] md:mx-auto md:mb-4"></div>

            <div className="md:w-230 xl:w-360 md:mx-auto md:flex">

                <div className="md:flex-1">
                    <h1 className="font-spartan text-[#D9D9D9] md:text-[24px] md:font-light">Contatos</h1>
                    <div className="md:flex md:justify-center">
                        <Image
                            src="/whatsapp.svg"
                            alt="WhatsApp"
                            width={38}
                            height={38}
                            className="md:object-contain" />
                        <p className="font-spartan text-[#D9D9D9] md:text-[20px] md:font-light md:translate-y-2">(48) 996273275</p>
                    </div>
                    <div className="md:flex md:justify-center">
                        <Image
                            src="/insta.svg"
                            alt="Instagram"
                            width={20}
                            height={20}
                            className="md:object-contain md:mx-2" />
                        <a href="https://www.instagram.com/essencialodontologiafamiliar/" className="font-spartan text-[#D9D9D9] md:text-[20px] md:font-light">@essencialodontologiafamiliar</a>
                    </div>
                </div>

                <div className="md:flex-1">
                    <a href="https://www.google.com/maps/dir//Essencial+Odontologia+Familiar,+Av.+Salvador+di+Bernardi,+150+-+Campinas,+São+José+-+SC,+88101-440/@-27.6119217,-48.5287276,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x952737d348393527:0x8b9229784b6571a6!2m2!1d-48.6063704!2d-27.597929?entry=ttu&g_ep=EgoyMDI2MDUxMy4wIKXMDSoASAFQAw%3D%3D">
                        <h1 className="font-spartan text-[#D9D9D9] md:text-[24px] md:font-light md:mb-1.5">Endereço</h1>

                        <p className="font-spartan text-[#D9D9D9] md:text-[20px] md:font-light md:leading-7">
                            Essencial Odontologia Familiar, Av. Salvador di Bernardi, 150 - Campinas, São José - SC, 88101-440</p>
                    </a>

                </div>

                <div className="md:flex-1">
                    <h1 className="font-spartan text-[#D9D9D9] md:text-[24px] md:font-light md:mt-1">Horário de Funcionamento</h1>
                    <p className="font-spartan text-[#D9D9D9] md:text-[20px] md:font-light"> Seg a Sex, das</p>
                    <p className="font-spartan text-[#D9D9D9] md:text-[20px] md:font-light">09h às 18h</p>
                </div>
            </div>
        </div>
    );
}

export default Footer