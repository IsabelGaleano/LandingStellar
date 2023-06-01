import Image from "next/image";
import React from "react";
import Container from "./container";

import userOneImg from "../public/img/user1.jpg";
import userTwoImg from "../public/img/user2.jpg";
import userThreeImg from "../public/img/user3.jpg";

const Services  = () => {
  return (
    <Container>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between text-center w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
          <h3 className="text-3xl mt-2"><b>Marca</b></h3>
            <p className="text-2xl mt-5 leading-normal ">
              Colabore con <Mark>expertos</Mark> para crear una marca memorable 
              que fomente la lealtad y aumente el reconocimiento.
            </p>

          </div>
        </div>
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between text-center w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
          <h3 className="text-3xl mt-2"><b>Diseño UI/UX</b></h3>
            <p className="text-2xl mt-5 leading-normal ">
              Cree un diseño <Mark>intuitivo</Mark> de UI/UX que optimice las interacciones de los usuarios, 
              refuerce la lealtad a la marca y genere resultados.
            </p>

          </div>
        </div>
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between text-center w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
          <h3 className="text-3xl mt-2"><b>Diseño de aplicaciones</b></h3>
            <p className="text-2xl mt-5 leading-normal ">
              Mejore el <Mark>rendimiento</Mark> de su aplicación con nuestro enfoque 
              de diseño estratégico que prioriza la usabilidad.
            </p>

          </div>
        </div>
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between text-center w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
          <h3 className="text-3xl mt-2"><b>Desarrollo de aplicaciones web</b></h3>
            <p className="text-2xl mt-5 leading-normal ">
              Acelere su éxito digital con nuestro <Mark>innovador</Mark> desarrollo 
              de aplicaciones web que ofrece resultados.
            </p>

          </div>
        </div>
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between text-center w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
          <h3 className="text-3xl mt-2"><b>Sistema de diseño</b></h3>
            <p className="text-2xl mt-5 leading-normal ">
              Transforme su flujo de trabajo contratando a los expertos de 
              nuestra agencia para crear sistemas de diseño <Mark>escalables</Mark>.
            </p>

          </div>
        </div>
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between text-center w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
          <h3 className="text-3xl mt-2"><b>Startup diseño web</b></h3>
            <p className="text-2xl mt-5 leading-normal ">
              Inicie su startup con una presencia web atractiva, 
              diseñada por nuestro equipo <Mark>creativo</Mark>.
            </p>

          </div>
        </div>
      </div>
    </Container>
  );
}

function Avatar(props) {
  return (
    <div className="flex items-center mt-8 space-x-3">
      <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
        <Image
          src={props.image}
          width="40"
          height="40"
          alt="Avatar"
          placeholder="blur"
        />
      </div>
      <div>
        <div className="text-lg font-medium">{props.name}</div>
        <div className="text-gray-600 dark:text-gray-400">{props.title}</div>
      </div>
    </div>
  );
}

function Mark(props) {
  return (
    <>
      {" "}
      <mark className="text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200">
        {props.children}
      </mark>{" "}
    </>
  );
}

export default Services;