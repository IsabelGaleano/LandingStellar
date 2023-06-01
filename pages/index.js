import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";
import Team from "../components/team";
import Services from "../components/services";

const Home = () => {
  return (
    <>
      <Head>
        <title>StellarSoft</title>
        <meta
          name="description"
          content="StellarSoft"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      <SectionTitle
        pretitle="StellarSoft Servicios"
        title="¿Por qué deberías utilizar StellarSoft?">
        Somos tu socio confiable en desarrollo de software, 
        ofreciendo soluciones a medida para potenciar tu negocio 
        y satisfacer tus necesidades específicas
      </SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <SectionTitle
        pretitle="StellarSoft Beneficios"
        title="Servicios adicionales">
        Nuestros diversos servicios de diseño se enfocan en brindar valor, 
        impulsar el crecimiento y mejorar las experiencias de 
        los usuarios para consolidar la presencia digital.
      </SectionTitle>
      <Services />
      <SectionTitle
        pretitle="Nuestro Equipo"
        title="Conozca nuestro equipo">
        Nuestro equipo se destaca por su enfoque colaborativo y su compromiso con la excelencia. 
        Fomentamos un ambiente de trabajo en equipo donde se comparten ideas, se fomenta la creatividad 
        y se promueve el crecimiento profesional.
      </SectionTitle>
      <Team />
      <SectionTitle
        pretitle="Testimonios"
        title="Testimonios de nuestros clientes">
        Su apoyo y confianza en los servicios de StellarSoft son fundamentales para nuestro éxito 
        y nos inspiran a seguir brindando soluciones de calidad.
      </SectionTitle>
      <Testimonials />
      <SectionTitle pretitle="FAQ" title="Preguntas frecuentes">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle>
      <Faq />
      <Cta />
      <Footer />
      <PopupWidget />
    </>
  );
}

export default Home;