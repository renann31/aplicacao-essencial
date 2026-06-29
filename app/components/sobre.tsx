import Image from "next/image";

const Sobre = () => {
    return (
        <>
            <div 
                className="mx-auto text-[#347070] flex md:w-225 xl:w-325 md:mt-16 md:gap-23.5"
                id="sobre">
                <div className="max-w-157.75">
                    <Image
                        src="/sobreNos.webp"
                        alt="foto sobre"
                        width={631}
                        height={464}
                        className="md:object-contain"
                    ></Image>
                </div>

                <div className="md:max-w-100 xl:max-w-126.25 md:space-y-8">
                    <h1 className="font-spartan md:text-[56px] xl::text-[64px] md:font-light md:leading-14">Cuidado familiar com excelência:</h1>
                    <p className="font-spartan md:text-[25px] xl:text-[28px] md:font-light md:leading-7">A Essencial Odontologia familiar nasceu com o propósito de oferecer um atendimento diferenciado, onde cada paciente é tratado  como parte da família.</p>
                    <ul className="font-spartan md:text-[25px] xl:text-[28px] md:font-light md:list-disc md:marker:text-[16px] md:ml-6">
                        <li>Atendimento humanizado e acolhedor</li>
                        <li>Tecnologia de ponta</li>
                        <li>Profissionais altamente qualificados</li>
                        <li>Ambiente limpo e confortável</li>
                    </ul>

                </div>
            </div>
            <div className="md:w-225 xl:w-325 md:h-0.5 bg-[#347070]/50 md:mx-auto md:mt-15"></div>

            <div className="md:w-225 xl:w-325 md:flex md:justify-end md:mx-auto">
                <div className="md:max-w-195 xl:max-w-252 md:mt-22.5 md:text-center">
                    <p className="font-spartan text-[#347070] md:text-[28px] md:font-light md:leading-7">Localizado em São José- SC, nossa clínica atende desde crianças até idosos, oferecendo uma gama completa de serviçoes odontológicos com foco em prevenção e bem estar.</p>
                </div>
            </div>
        </>

    );
}

export default Sobre;