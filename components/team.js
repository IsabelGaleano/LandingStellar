import Image from "next/image";
import React from "react";
import Container from "./container";

import userOneImg from "../public/img/Isabel.jpg";
import userTwoImg from "../public/img/David.jpeg";
import userThreeImg from "../public/img/Daniel.jpg";
import userFourImg from "../public/img/Alex.jpeg";

const Team = () => {
    return (
        <Container>
            <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-4">
                <div className="">
                    <div className="flex flex-col justify-between text-center w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
                        <div className="col-lg-4 col-md-6 p-4">
                            <Image
                                src={userOneImg}
                                alt="Card image cap"
                                className="img-fluid d-block mb-3 mx-auto rounded-circle"
                                width={250}
                                style={{ borderRadius: '10%' }}
                            />
                            <h3 className="text-3xl mt-4"><b>Isabel Galeano</b></h3>
                            <p className="mb-0 text-xl mt-4">Coordinadora</p>
                        </div>

                    </div>
                </div>
                <div className="">
                    <div className="flex flex-col justify-between text-center w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
                        <div className="col-lg-4 col-md-6 p-4">
                            <Image
                                src={userTwoImg}
                                alt="Card image cap"
                                className="img-fluid d-block mb-3 mx-auto rounded-circle"
                                width={250}
                                style={{ borderRadius: '10%' }}
                            />
                            <h3 className="text-3xl mt-4"><b>David Rodríguez</b></h3>
                            <p className="mb-0 text-xl mt-4">Calidad</p>
                        </div>

                    </div>
                </div>
                <div className="">
                    <div className="flex flex-col justify-between text-center w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
                        <div className="col-lg-4 col-md-6 p-4">
                            <Image
                                src={userThreeImg}
                                alt="Card image cap"
                                className="img-fluid d-block mb-3 mx-auto rounded-circle"
                                width={250}
                                style={{ borderRadius: '10%' }}
                            />
                            <h3 className="text-3xl mt-4"><b>Daniel Zúñiga</b></h3>
                            <p className="mb-0 text-xl mt-4">Desarrollo</p>
                        </div>

                    </div>
                </div>
                <div className="">
                    <div className="flex flex-col justify-between text-center w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
                        <div className="col-lg-4 col-md-6 p-4">
                            <Image
                                src={userFourImg}
                                alt="Card image cap"
                                className="img-fluid d-block mb-3 mx-auto rounded-circle"
                                width={250}
                                style={{ borderRadius: '10%' }}
                            />
                            <h3 className="text-3xl mt-4"><b>Alex García</b></h3>
                            <p className="mb-0 text-xl mt-4">Soporte</p>
                        </div>

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

export default Team;