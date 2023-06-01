import React from "react";
import Container from "./container";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-indigo-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqdata = [
  {
    question: "¿Cuál es el tiempo estimado de entrega para un proyecto de diseño web?",
    answer: "El tiempo de entrega puede variar según la complejidad del proyecto, pero trabajamos diligentemente para completarlo en un plazo razonable, generalmente dentro de las 4-6 semanas.",
  },
  {
    question: "¿Ofrecen servicios de mantenimiento y actualización para los sitios web desarrollados?",
    answer: "Sí, ofrecemos servicios de mantenimiento y actualización para garantizar que tu sitio web esté seguro, funcione sin problemas y se mantenga al día con los cambios tecnológicos. Ofrecemos diferentes paquetes de mantenimiento para adaptarse a tus necesidades.",
  },
  {
    question: "¿Proporcionan soporte técnico después de la finalización del proyecto?",
    answer:
      "Sí, brindamos soporte técnico continuo después de la finalización del proyecto. Estamos aquí para responder tus preguntas, solucionar problemas y ayudarte en caso de cualquier consulta relacionada con tu sitio web o aplicación.",
  },
  {
    question: " ¿Cuál es su enfoque en cuanto a la seguridad de los sitios web?",
    answer:
      "La seguridad de los sitios web es una prioridad para nosotros. Implementamos las mejores prácticas de seguridad, como el uso de certificados SSL y la implementación de medidas de protección contra ataques cibernéticos. También ofrecemos opciones de respaldo regular y monitoreo constante para garantizar la integridad de tu sitio web.",
  },
];

export default Faq;