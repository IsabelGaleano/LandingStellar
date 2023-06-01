import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../public/img/benefit-one.png";
import benefitTwoImg from "../public/img/benefit-two.png";

const benefitOne = {
  title: "Nuestras capacidades para tu beneficio",
  desc: " Nos esforzamos por estar al día  de la tecnología, brindando a nuestros clientes soluciones innovadoras y actualizadas que les permitan destacarse en un mercado competitivo y en constante evolución",
  image: benefitOneImg,
  bullets: [
    {
      title: "Experiencia de usuario excepcional",
      desc: "Nuestras aplicaciones se desarrollan con un enfoque centrado en el usuario, brindando interfaces intuitivas, funcionales y atractivas que facilitan la interacción y satisfacen las necesidades de tus clientes.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Innovación continua",
      desc: "En StellarSoft, nos mantenemos al tanto de las últimas tendencias y avances tecnológicos, lo que nos permite ofrecerte soluciones actualizadas.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Eficiencia mejorada",
      desc: "Con las soluciones de StellarSoft, puedes optimizar tus procesos empresariales, automatizar tareas repetitivas y ahorrar tiempo y recursos, lo que te permite enfocarte en aspectos estratégicos y aumentar la productividad de tu equipo",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Nuestras capacidades en servicios de Diseño Web",
  desc: "Nuestras capacidades en diseño web se basan en las últimas tendencias y mejores prácticas de la industria, asegurando sitios web responsive y optimizados para ofrecer una experiencia de usuario intuitiva y adaptada a diferentes dispositivos y navegadores.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Experiencia de usuario",
      desc: "Auditoría UI/UX, arquitectura de la información, diseño inclusivo",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Design & front-end",
      desc: "Diseño visual e interacciones, desarrollo front-end, CMS, iconografía e ilustraciones, integraciones de terceros",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Tecnologías",
      desc: "NEXT.js, React, Angular, CMS, Javascript",
      icon: <SunIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};
