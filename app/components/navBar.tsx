"use client"
import Image from "next/image";
import { useEffect, useState } from "react";

const NavBar = () => {
  const [visivel, setVisivel] = useState(true);

  useEffect(() => {
    let ultimaScrolada = window.scrollY;

    const handleScroll = () => {
      const scrollCima = window.scrollY;

      // Sempre visível no topo
      if (scrollCima < 50) {
        setVisivel(true);
      }
      // Subindo
      else if (scrollCima < ultimaScrolada) {
        setVisivel(true);
      }
      // Descendo
      else {
        setVisivel(false);
      }

      ultimaScrolada = scrollCima;
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (

    <div className={`md:fixed md:z-10 md:text-[#D9D9D9] md:mt-20 xl:mt-22.25 left-1/2 -translate-x-1/2 md:flex z-50 transition-all duration-300 
      ${visivel
        ? "opacity-100 translate-y-0"
        : "opacity-0 -translate-y-10"
      }
  `}>
      <div className="md:flex md:gap-3">
        <Image
          src="/logoNavbar.svg"
          alt="logo"
          width={69}
          height={63}
          className="md:object-contain"
        ></Image>
        <p className="font-spartan md:z-10 md:text-[20px] md:font-medium md:w-40 md:leading-6 ">
          <span
            className="text-transparent bg-clip-text"
            style={{
              backgroundImage: "url('/texturaDourada.svg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            ESSENCIAL
          </span> ODONTOLOGIA FAMILIAR
        </p>
      </div>

      <nav className="mx-auto flex bg-[#B4B4B4]/20 items-center justify-between px-6 pt-1 md:w-180 xl:w-295 md:h-14.25 md:rounded-2xl md:border md:border-white/20">

        <ul className="font-spartan flex items-center md:gap-5 xl:gap-14 md:text-[22px] xl:text-[30px] md:text-[#D9D9D9]">
          <li>
            <a href="#inicio" className="">
              Início
            </a>
          </li>

          <li>
            <a href="#sobre" className="">
              Sobre
            </a>
          </li>

          <li>
            <a href="#serviços" className="">
              Serviços
            </a>
          </li>

          <li>
            <a href="#diferenciais" className="">
              Diferenciais
            </a>
          </li>

          <li>
            <a href="#depoimentos" className="">
              Depoimentos
            </a>
          </li>

          <li>
            <a href="#" className="">
              Agende sua consulta
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar