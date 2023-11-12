import Image from "next/image";
import Facebook from "../../public/icons/Facebook.svg";
import Twitter from "../../public/icons/Twitter.svg";
import Instagram from "../../public/icons/Instagram.svg";
import Whatsapp from "../../public/icons/whatsapp.svg";
import Schedule from "../../public/icons/Schedule.svg";
import Phone from "../../public/icons/Phone.svg";
import Email from "../../public/icons/Email.svg";

import LogoColor from "../../public/logoColor.svg";
import LogoSmallColor from "../../public/favicon.svg";
import LogoLight from "../../public/logoLight.svg";
import LogoSmallLight from "../../public/logoSmallLight.svg";
import LogoDark from "../../public/logoDark.svg";
import LogoSmallDark from "../../public/logoSmallDark.svg";

import Spartan from "../../public/services/spartan.svg";
import Stair from "../../public/services/stair.svg";
import Tree from "../../public/services/tree.svg";

import WaveDown from "../../public/waveDown.svg";
import WaveUp from "../../public/waveUp.svg";

import Github from "../../public/github.svg";

import React, { useEffect, useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

import Link from "next/link";

import Head from "next/head";

const Prueba = () => {
  return (
    <>
      <Swiper
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        direction="vertical"
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        loop
        spaceBetween={32}
        modules={[Pagination, Autoplay]}
        className="mySwiper w-full h-full"
      >
        <SwiperSlide className="bg-[url('/images/small/hero.png')] bg-cover bg-center sm:rounded-[32px] shadow-inner"></SwiperSlide>
        <SwiperSlide className="bg-[url('/images/small/servers.png')] bg-cover bg-center sm:rounded-[32px] shadow-inner"></SwiperSlide>
        <SwiperSlide className="bg-[url('/images/small/desk.png')] bg-cover bg-center sm:rounded-[32px] shadow-inner"></SwiperSlide>
        <SwiperSlide className="bg-[url('/images/small/wires.png')] bg-cover bg-center sm:rounded-[32px] shadow-inner"></SwiperSlide>
        <SwiperSlide className="bg-[url('/images/small/lock.png')] bg-cover bg-center sm:rounded-[32px] shadow-inner"></SwiperSlide>
      </Swiper>
    </>
  );
};

const NavBar = ({ state, setState, scrollPosition }) => {
  let firstLine = state
    ? "bg-white w-full h-1 rounded-full absolute left-0 top-1/2 rotate-45 -translate-y-1/2"
    : "bg-white w-full h-1 rounded-full absolute left-0 top-0";
  let scondLine = state
    ? ""
    : "bg-white w-full h-1 rounded-full absolute -right-1 top-1/2 -translate-y-1/2";
  let tirthLine = state
    ? "bg-white w-full h-1 rounded-full absolute left-0 top-1/2 -rotate-45 -translate-y-1/2"
    : "bg-white w-full h-1 rounded-full absolute left-0 bottom-0";

  let background =
    scrollPosition > 0 ? "backdrop-blur-md bg-white/30" : "bg-transparent";

  let position = state ? "relative" : "fixed";

  const changeState = (e) => {
    setState((s) => !s);
  };

  return (
    <div className={"w-full sm:p-12 p-4 z-40 fixed"}>
      <div
        className={
          "w-full flex justify-between items-center p-4 rounded-[2rem] duration-300 transition-all " +
          "backdrop-blur-md bg-white/30"
        }
      >
        <div className="h-16 shrink-0">
          {!state ? (
            <>
              <Image
                className="h-full hidden xs:block w-auto transition-all"
                src={LogoColor}
                alt=""
              />
              <Image
                className="h-full block xs:hidden w-auto transition-all"
                src={LogoSmallColor}
                alt=""
              />
            </>
          ) : (
            <>
              <Image
                className="h-full hidden xs:block w-auto transition-all"
                src={scrollPosition > 0 ? LogoColor : LogoDark}
                alt=""
              />
              <Image
                className="h-full block xs:hidden w-auto transition-all"
                src={scrollPosition > 0 ? LogoSmallColor : LogoSmallDark}
                alt=""
              />
            </>
          )}
        </div>
        <div
          className={
            "aspect-square h-12 py-4 px-[14px] rounded-full flex transition-all cursor-pointer bg-[#3A3B3A]"
          }
          onClick={changeState}
        >
          <div className="relative flex flex-1">
            <div className={"transition-all " + firstLine}></div>
            <div className={"transition-all " + scondLine}></div>
            <div className={"transition-all " + tirthLine}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  const [open, setOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const body = useRef();
  const handleScroll = () => {
    const position = body.current.scrollTop;
    setScrollPosition(position);
  };

  useEffect(() => {
    body.current.addEventListener("scroll", handleScroll, { passive: true });
    console.log(scrollPosition);
    return () => {
      body.current.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const selected = " text-white bg-[#F07024] hover:shadow-md transition-all";

  const NavSpace = open ? "sm:h-[192px] h-[128px]" : "h-0";
  const MiddleSpace00 = open ? "sm:mx-[64px] mx-[32px]" : "mx-0";
  const MiddleSpace01 = open ? "w-[240px] 2xl:mr-8" : "w-0";
  const MiddleSpace02 = open ? "rounded-[2rem]" : "rounded-none";
  const content = open ? "hidden overflow-auto" : "flex";
  const BottomSpace = open ? "h-[160px]" : "h-[0px]";

  const RickLink = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";

  return (
    <div className="w-full relative select-none">
      <Head>
        <link rel="shortcut icon" href="/favicon.svg" />
        <title>NetReady</title>
      </Head>
      <div className="w-full min-h-screen flex flex-col">
        <NavBar
          state={open}
          setState={setOpen}
          scrollPosition={scrollPosition}
        />
        <div className={"w-full transition-all " + NavSpace}></div>
        <div className="w-full flex flex-1 justify-center">
          <div
            className={
              "w-full flex flex-1 items-center transition-all justify-center " +
              MiddleSpace00
            }
          >
            <div className={"transition-all " + MiddleSpace01}>
              <ul className="flex flex-col space-y-4 font-coolvetica tall03:text-[39.06px] tall04:text-[31.25px] text-[18px]">
                <a href={RickLink} target="_blank">
                  <li
                    className={
                      "py-2 px-4 rounded-[10px] overflow-hidden 2xl:text-left text-center" +
                      selected
                    }
                  >
                    Inicio
                  </li>
                </a>
                <a href={RickLink} target="_blank">
                  <li
                    className={
                      "py-2 px-4 rounded-[10px] overflow-hidden hover:bg-slate-100 2xl:text-left text-center"
                    }
                  >
                    Nosotros
                  </li>
                </a>
                <a href={RickLink} target="_blank">
                  <li
                    className={
                      "py-2 px-4 rounded-[10px] overflow-hidden hover:bg-slate-100 2xl:text-left text-center"
                    }
                  >
                    Portafolio
                  </li>
                </a>
                <a href={RickLink} target="_blank">
                  <li
                    className={
                      "py-2 px-4 rounded-[10px] overflow-hidden hover:bg-slate-100 2xl:text-left text-center"
                    }
                  >
                    Contacto
                  </li>
                </a>
                <a href={RickLink} target="_blank">
                  <li
                    className={
                      "py-2 px-4 rounded-[10px] overflow-hidden hover:bg-slate-100 2xl:text-left text-center"
                    }
                  >
                    Área legal
                  </li>
                </a>
              </ul>
            </div>
            <div
              className={
                "2xl:flex flex-1 flex-col bg-white h-full relative transition-all p-0 shadow-xl " +
                content +
                " " +
                MiddleSpace02
              }
            >
              <div
                className={
                  "w-full absolute h-full top-0 left-0 transition-all " +
                  MiddleSpace02
                }
                ref={body}
              >
                <div className="w-full flex justify-center bg-white">
                  <div className="w-full h-screen p-0 sm:p-8 flex flex-col bg-[#F2F2F2] rounded-b-[2rem]">
                    <div className="flex flex-1 sm:rounded-[2rem] relative overflow-hidden">
                      <Prueba />
                    </div>
                    <div className="w-full flex justify-center pt-8 pb-8 sm:pb-0">
                      <div className="container flex flex-col xl:flex-row justify-between xl:space-y-0 space-y-4 sm:px-8 px-4">
                        <div className="xl:text-left text-center flex flex-col justify-center">
                          <span className="sm:text-[48.83px] xs:text-[31.25px] text-[25px] font-coolvetica text-zinc-900 ">
                            Nos enfocamos en brindar
                          </span>
                          <h1 className="2xl:text-[76.29px] lg:text-[61.04px] xs:text-[48.83px] text-[31.25px] font-coolvetica text-transparent bg-clip-text bg-gradient-to-b from-[#F4A618] to-[#FF5600]">
                            Soluciones que aporten valor
                          </h1>
                        </div>
                        <div className="xl:w-[400px] w-full flex flex-col xs:space-y-8">
                          <p className="md:text-[1.25rem] text-[1rem] xl:text-left text-center hidden xs:block text-zinc-900">
                            Integración de <b>servicios y soluciones</b> de
                            Ciberseguridad, redes, telecomunicaciones y gestión
                            corporativa.
                          </p>
                          <a
                            href={RickLink}
                            target="_blank"
                            className="2xl:text-[31.25px] w-full flex justify-center bg-gradient-to-r to-[#F4A618] from-[#FF5600] from-0% to-100% transition-all shadow-md hover:shadow-xl p-4 rounded-[10px] xl:text-left text-center"
                          >
                            <span className="font-coolvetica text-white">
                              ¡Agenda tu sesión ahora!
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full xl:py-[128px] py-[64px] flex justify-center bg-white">
                  <div className="container flex xl:flex-row flex-col px-4 sm:px-8 xl:space-x-16 space-x-0 xl:space-y-0 space-y-16 justify-between">
                    <div className="flex flex-col flex-none xl:w-[800px] w-full space-y-8 ">
                      <div>
                        <h1 className="xl:text-left text-center sm:text-[48.83px] text-[39.06px] font-coolvetica text-transparent bg-clip-text bg-gradient-to-b from-[#F4A618] to-[#FF5600]">
                          Portafolio
                        </h1>
                      </div>
                      <div>
                        <p className="sm:text-[20px] text-base font-[Arial] text-zinc-900 text-justify xl:text-left">
                          <b>Acompañamos a su organización</b> en todas las
                          fases de la habilitación tecnológica de soluciones de
                          ciberseguridad y telecomunicaciones, diseñamos,
                          implementamos, monitoreamos y gestionamos su
                          plataforma en diferentes niveles. Gestionamos
                          incidentes bajo estándares y procesos internacionales
                          porque entendemos la criticidad de su negocio.
                        </p>
                        <br />
                        <p className="sm:text-[20px] text-base font-[Arial] text-zinc-900 text-justify xl:text-left">
                          <b>Contamos con un grupo expertos</b> de una amplia
                          trayectoria, certificados en las diferentes
                          tecnologías que le asesoraran con las mejoras
                          prácticas en la implementación satisfactoria de
                          nuestro portafolio de soluciones.
                        </p>
                      </div>
                      <a
                        href={RickLink}
                        target="_blank"
                        className="text-[20px] xl:w-64 w-full flex justify-center bg-gradient-to-r to-[#F4A618] from-[#FF5600] from-0% to-100% transition-all shadow-md hover:shadow-xl py-4 rounded-[10px] xl:text-left text-center"
                      >
                        <span className="font-coolvetica text-white">
                          Más información
                        </span>
                      </a>
                    </div>
                    <div className="flex flex-1 relative xl:space-x-8 space-x-0 overflow-auto 4xl:justify-between xl:justify-normal justify-around flex-wrap xl:flex-nowrap">
                      <a
                        href={RickLink}
                        target="_blank"
                        className="relative transition-all"
                      >
                        <div className="flex flex-none flex-col space-y-4 justify-center px-4 py-8 xl:my-0 my-4 bg-[#F2F2F2] rounded-[2rem] w-[252px] duration-500 transition-all shadow-inner hover:bg-[#e9e9e9]">
                          <div className="w-full h-64 flex justify-center">
                            <Image
                              className="h-full w-auto"
                              src={Spartan}
                              alt=""
                            />
                          </div>
                          <div className="flex items-center justify-center h-[100px] text-[31.25px] font-coolvetica text-transparent bg-clip-text bg-gradient-to-b from-[#F4A618] to-[#FF5600] text-center align-middle">
                            Ciberseguridad
                          </div>
                        </div>
                      </a>
                      <a href={RickLink} target="_blank">
                        <div className="flex flex-none flex-col space-y-4 justify-center px-4 py-8 xl:my-0 my-4 bg-[#F2F2F2] rounded-[2rem] w-[252px] duration-500 transition-all shadow-inner hover:bg-[#e9e9e9]">
                          <div className="w-full h-64 flex justify-center">
                            <Image
                              className="h-full w-auto"
                              src={Stair}
                              alt=""
                            />
                          </div>
                          <div className="flex items-center justify-center h-[100px] text-[31.25px] font-coolvetica text-transparent bg-clip-text bg-gradient-to-b from-[#F4A618] to-[#FF5600] text-center align-middle">
                            Gestión Corporativa
                          </div>
                        </div>
                      </a>
                      <a href={RickLink} target="_blank">
                        <div className="flex flex-none flex-col space-y-4 justify-center px-4 py-8 xl:my-0 my-4 bg-[#F2F2F2] rounded-[2rem] w-[252px] duration-500 transition-all shadow-inner hover:bg-[#e9e9e9]">
                          <div className="w-full h-64 flex justify-center">
                            <Image
                              className="h-full w-auto"
                              src={Tree}
                              alt=""
                            />
                          </div>
                          <div className="flex items-center justify-center h-[100px] text-[31.25px] font-coolvetica text-transparent bg-clip-text bg-gradient-to-b from-[#F4A618] to-[#FF5600] text-center align-middle">
                            Redes e infraestructura
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="w-full xl:py-[64px] py-[32px] flex justify-center bg-white">
                  <div className="container flex xl:flex-row flex-col-reverse px-4 sm:px-8 xl:space-x-16 space-x-0 justify-between">
                    <div className="flex flex-1 bg-[url('/images/small/laptop.png')] bg-cover bg-center rounded-[2rem] md:shadow-[-32px_-32px_0px_0px_rgba(255,86,0,1)] shadow-[-16px_-16px_0px_0px_rgba(255,86,0,1)] p-4 xl:mt-0 mt-16 min-h-[290px]"></div>
                    <div className="flex flex-col flex-none xl:w-[800px] w-full space-y-8 ">
                      <div>
                        <h1 className="xl:text-left text-center sm:text-[48.83px] text-[39.06px] font-coolvetica text-transparent bg-clip-text bg-gradient-to-b from-[#F4A618] to-[#FF5600]">
                          Que hacemos
                        </h1>
                      </div>
                      <div>
                        <p className="sm:text-[20px] text-base font-[Arial] text-zinc-900 text-justify xl:text-left">
                          <b>Integramos soluciones</b> y servicios de
                          Ciberseguridad, Redes, Telecomunicaciones y Gestión
                          Corporativa, para diseñar, implementar, monitorear y
                          gestionar su plataforma en diferentes niveles.{" "}
                          <b>Gestionamos incidentes</b> bajo estándares y
                          procesos internacionales porque entendemos la
                          criticidad de su negocio.
                        </p>
                      </div>
                      <a
                        href={RickLink}
                        target="_blank"
                        className="text-[20px] xl:w-64 w-full flex justify-center bg-gradient-to-l from-[#F4A618] to-[#FF5600] py-4 rounded-[10px] xl:text-left text-center shadow-md hover:shadow-xl transition-all"
                      >
                        <span className="font-coolvetica text-white">
                          Más información
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="w-full xl:py-[128px] py-[64px] flex justify-center bg-[#F2F2F2]">
                  <div className="container flex xl:flex-row flex-col px-4 sm:px-8 xl:space-x-16 space-x-0 justify-between items-center">
                    <div className="flex flex-col flex-none xl:w-[800px] w-full space-y-8 ">
                      <div>
                        <h1 className="xl:text-left text-center sm:text-[48.83px] text-[39.06px] font-coolvetica text-transparent bg-clip-text bg-gradient-to-b from-[#F4A618] to-[#FF5600]">
                          Satisfacción del servicio
                        </h1>
                      </div>
                      <div>
                        <p className="sm:text-[20px] text-base font-[Arial] text-zinc-900 text-justify xl:text-left">
                          Hemos capitalizado mas de 20 años de experiencia en la
                          implementación de soluciones de ciberseguridad, redes,
                          servicios de consultoría y manage services provider en
                          más de 500 proyectos ejecutados.
                        </p>
                        <br />
                        <p className="sm:text-[20px] text-base font-[Arial] text-zinc-900 text-justify xl:text-left">
                          Con un equipo de profesionales del más alto nivel,
                          certificados por los fabricantes más reconocidos de la
                          industria de seguridad. Contamos con operaciones en
                          Colombia, Costa Rica, Dominicana, Panamá, Perú, USA,
                          Venezuela y clientes en Latinoamérica.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-1 min-h-[400px] xl:w-auto w-full rounded-[2rem] p-4 my-16 xl:my-0 bg-[url('/images/small/team.png')] bg-cover bg-center md:shadow-[32px_-32px_0px_0px_rgba(255,86,0,1)] shadow-[16px_-16px_0px_0px_rgba(255,86,0,1)]"></div>
                  </div>
                </div>
                <div className="w-full xl:py-[128px] py-[64px] flex justify-center bg-white">
                  <div className="container px-4 sm:px-8 min-h-screen flex flex-col space-y-8">
                    <div>
                      <h1 className="xl:text-left text-center sm:text-[48.83px] text-[39.06px] font-coolvetica text-transparent bg-clip-text bg-gradient-to-b from-[#F4A618] to-[#FF5600]">
                        Satisfacción del servicio
                      </h1>
                    </div>
                    <div className="w-full flex flex-wrap">
                      <div className="px-6 py-4 m-4 from-[#F4A618] to-[#FF5600] bg-gradient-to-t flex flex-col justify-center items-center text-white font-[Arial] rounded-[10px] flex-1">
                        <span className="text-[31.25px] text-center">
                          <b>100</b>
                        </span>
                        <span className="text-[25px] text-center">
                          <b>Consultores certificados</b>
                        </span>
                      </div>
                      <div className="px-6 py-4 m-4 from-[#F4A618] to-[#FF5600] bg-gradient-to-t flex flex-col justify-center items-center text-white font-[Arial] rounded-[10px] flex-1">
                        <span className="text-[31.25px] text-center">
                          <b>+23K</b>
                        </span>
                        <span className="text-[25px] text-center">
                          <b>Reportes de seguridad</b>
                        </span>
                      </div>
                      <div className="px-6 py-4 m-4 from-[#F4A618] to-[#FF5600] bg-gradient-to-t flex flex-col justify-center items-center text-white font-[Arial] rounded-[10px] flex-1">
                        <span className="text-[31.25px] text-center">
                          <b>+72K</b>
                        </span>
                        <span className="text-[25px] text-center">
                          <b>Ataques bloqueados</b>
                        </span>
                      </div>
                      <div className="px-6 py-4 m-4 from-[#F4A618] to-[#FF5600] bg-gradient-to-t flex flex-col justify-center items-center text-white font-[Arial] rounded-[10px] flex-1">
                        <span className="text-[31.25px] text-center">
                          <b>+500</b>
                        </span>
                        <span className="text-[25px] text-center">
                          <b>Clientes activos</b>
                        </span>
                      </div>
                      <div className="px-6 py-4 m-4 from-[#F4A618] to-[#FF5600] bg-gradient-to-t flex flex-col justify-center items-center text-white font-[Arial] rounded-[10px] flex-1">
                        <span className="text-[31.25px] text-center">
                          <b>+500</b>
                        </span>
                        <span className="text-[25px] text-center">
                          <b>Mantenimientos realizados</b>
                        </span>
                      </div>
                    </div>
                    <div className="w-full flex-1 p-4 bg-[url('/images/small/hero.png')] bg-cover bg-center flex overflow-hidden min-h-[256px] rounded-[32px]  md:shadow-[-32px_32px_0px_0px_rgba(255,86,0,1)] shadow-[-16px_16px_0px_0px_rgba(255,86,0,1)]"></div>
                  </div>
                </div>
                <div className="w-full xl:py-[128px] py-[64px] flex justify-center bg-[#F2F2F2] rounded-t-[2rem] overflow-hidden relative">
                  <Image
                    className="absolute -bottom-10 -left-10 h-96"
                    src={WaveDown}
                  />
                  <Image className="absolute -top-10 right-0" src={WaveUp} />
                  <div className="container flex xl:flex-row flex-col px-4 sm:px-8 xl:space-x-16 space-x-0 xl:space-y-0 space-y-16 justify-center z-10">
                    <div className="flex flex-col flex-none xl:w-[800px] w-full space-y-8 ">
                      <div>
                        <h1 className="xl:text-left text-center sm:text-[48.83px] text-[39.06px] font-coolvetica text-transparent bg-clip-text bg-gradient-to-b from-[#F4A618] to-[#FF5600]">
                          Contáctanos ahora
                        </h1>
                      </div>
                      <div>
                        <p className="sm:text-[20px] text-base font-[Arial] text-zinc-900 text-justify xl:text-left">
                          Integramos soluciones y servicios de Ciberseguridad,
                          Redes, Telecomunicaciones y Gestión Corporativa, para
                          diseñar, implementar, monitorear y gestionar su
                          plataforma en diferentes niveles. Gestionamos
                          incidentes bajo estándares y procesos internacionales
                          porque entendemos la criticidad de su negocio.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row xl:flex-col xl:justify-end justify-center flex-wrap">
                      <div className="m-4 bg-[#25D366] text-white p-4 rounded-[10px] flex font-coolvetica space-x-4 justify-center text-[25px] w-64 transition-all shadow-md hover:shadow-xl">
                        <Image src={Whatsapp} alt="" />
                        <span>¡Chat directo!</span>
                      </div>
                      <a href={RickLink} target="_blank">
                        <div className="m-4 bg-gradient-to-l from-[#F4A618] to-[#FF5600] text-white p-4 rounded-[10px] flex font-coolvetica space-x-4 justify-center text-[25px] w-64 transition-all shadow-md hover:shadow-xl">
                          <span>¡Escribenos!</span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="w-full xl:py-[128px] py-[64px] flex justify-center bg-zinc-800 font-[Arial]">
                  <div className="container flex flex-col px-4 sm:px-8 space-y-8">
                    <div className="w-full flex lg:justify-between justify-center lg:flex-row flex-col lg:space-y-0 space-y-8 items-center">
                      <div className="flex justify-between items-center">
                        <a href={RickLink} target="_blank">
                          <div className="h-16">
                            <Image
                              className="h-full w-auto hidden lg:block"
                              src={LogoLight}
                              alt=""
                            />
                            <Image
                              className="h-full w-auto block lg:hidden"
                              src={LogoSmallLight}
                              alt=""
                            />
                          </div>
                        </a>
                      </div>
                      <div className="lg:w-auto w-full">
                        <ul className="flex lg:justify-normal justify-center text-white flex-wrap">
                          <li className="mx-4 my-2">
                            <a href={RickLink} target="_blank">
                              Nosotros
                            </a>
                          </li>
                          <li className="mx-4 my-2">
                            <a href={RickLink} target="_blank">
                              Portafolio
                            </a>
                          </li>
                          <li className="mx-4 my-2">
                            <a href={RickLink} target="_blank">
                              Área Legal
                            </a>
                          </li>
                          <li className="mx-4 my-2">
                            <a href={RickLink} target="_blank">
                              Contactenos
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="w-full h-1 bg-zinc-900/50"></div>
                    <div className="flex flex-wrap lg:justify-between justify-center items-center">
                      <div className="flex">
                        <div className="bg-zinc-700 p-3 rounded-[10px] m-2">
                          <Image src={Email} alt="" />
                        </div>
                        <div className="bg-zinc-700 p-3 rounded-[10px] m-2">
                          <Image src={Phone} alt="" />
                        </div>
                        <div className="bg-zinc-700 p-3 rounded-[10px] m-2">
                          <Image src={Schedule} alt="" />
                        </div>
                      </div>
                      <div className="hidden lg:block">
                        <span className="text-white">
                          NetReady Solutions. © 2023. Todos los derechos
                          reservados.
                        </span>
                      </div>
                      <div className="flex">
                        <div className="bg-zinc-700 p-3 rounded-[10px] m-2">
                          <Image src={Facebook} alt="" />
                        </div>
                        <div className="bg-zinc-700 p-3 rounded-[10px] m-2">
                          <Image src={Instagram} alt="" />
                        </div>
                        <div className="bg-zinc-700 p-3 rounded-[10px] m-2">
                          <Image src={Twitter} alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="lg:hidden flex justify-center">
                      <span className="text-white text-center">
                        NetReady Solutions. © 2023. Todos los derechos
                        reservados.
                      </span>
                    </div>
                  </div>
                </div>
                <div className="w-full flex justify-center items-center py-4 bg-black text-white flex-wrap">
                  <Link
                    href="https://github.com/abraham-j-p-f"
                    className="flex justify-center"
                    target="_blank"
                  >
                    <h1 className="text-[25px] mx-2 font-coolvetica">
                      {"Hi, I'm Abe, GitHub here!"}
                    </h1>
                    <Image className="h-8 w-auto mx-2" src={Github} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={
            "w-full  flex justify-center items-center transition-all overflow-hidden " +
            BottomSpace
          }
        >
          <div className="w-full sm:mx-[64px] mx-[32px] mb-[32px]  flex xs:justify-between justify-center flex-wrap">
            <div className="flex space-x-4 m-2">
              <div className="bg-zinc-700 p-3 rounded-[10px] flex w-12 h-12 justify-center items-center">
                <Image src={Email} alt="" />
              </div>
              <div className="bg-zinc-700 p-3 rounded-[10px] flex w-12 h-12 justify-center items-center">
                <Image src={Phone} alt="" />
              </div>
              <div className="bg-zinc-700 p-3 rounded-[10px] flex w-12 h-12 justify-center items-center">
                <Image src={Schedule} alt="" />
              </div>
            </div>
            <div className="flex space-x-4 m-2">
              <div className="bg-zinc-700 p-3 rounded-[10px] flex w-12 h-12 justify-center items-center">
                <Image src={Facebook} alt="" />
              </div>
              <div className="bg-zinc-700 p-3 rounded-[10px] flex w-12 h-12 justify-center items-center">
                <Image src={Instagram} alt="" />
              </div>
              <div className="bg-zinc-700 p-3 rounded-[10px] flex w-12 h-12 justify-center items-center">
                <Image src={Twitter} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
