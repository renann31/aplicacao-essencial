import Header from "./components/header";
import Sobre from "./components/sobre";
import Servicos from "./components/servicos";
import Diferenciais from "./components/diferenciais";
import Depoimentos from "./components/depoimentos";
import Footer from "./components/footer";
import NavBar from "./components/navBar";

export default function Home() {

  return (
    <div className="relative hidden md:block overflow-x-hidden">

      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-white/90" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/texturaFundo.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

      </div>

      <div className="relative z-10">
        <NavBar />
        <Header />
        <Sobre />
        <Servicos />
        <Diferenciais />
        <Depoimentos />
        <Footer />
      </div>

    </div>
  );
}