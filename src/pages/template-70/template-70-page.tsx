import {
  faFacebook,
  faInstagram,
  faTwitter,
  faUnsplash,
} from "@fortawesome/free-brands-svg-icons";
import {
  faArrowLeft,
  faEnvelope,
  faMobileScreenButton,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Template70 = () => {
  const location = useLocation();
  const [currentSection, setCurrentSection] = useState<any>(null);
  const navigate = useNavigate();
  useEffect(() => {
    const sections: any = document.getElementsByTagName("section");
    const initialHash = location.hash ? location.hash.substring(1) : "home";
    for (const section of sections) {
      if (initialHash !== section.getAttribute("data-id")) {
        section.classList.add("hidden", "opacity-0");
      } else {
        setCurrentSection(section);
      }
    }
  }, [location.hash]);

  const handleLinkClick = (event: any) => {
    const id = event.target.getAttribute("href");
    event.preventDefault();
    showSection(id);
    setTimeout(() => {
      navigate(`${id}`);
    }, 500);
  };

  const showSection = (id: string) => {
    const nextSection = document.getElementsByClassName(
      `${id.slice(1)}-section`
    )[0];

    if (currentSection) {
      currentSection.classList.add(
        "transition",
        "transform",
        "duration-[0.5s]",
        "scale-75",
        "opacity-0"
      );

      setTimeout(() => {
        currentSection.classList.add("hidden");
        currentSection.classList.remove(
          "transition",
          "transform",
          "scale-75",
          "duration-[0.5s]",
          "opacity-0"
        );

        nextSection.classList.remove("hidden");
        nextSection.classList.add(
          "transition",
          "transform",
          "scale-90",
          "duration-[0.5s]",
          "opacity-0"
        );

        setTimeout(() => {
          nextSection.classList.remove("scale-90", "opacity-0");
          window.scrollTo(0, 0);
          setCurrentSection(nextSection);
        }, 50);
      }, 500);
    }
  };

  return (
    <div className="min-w-[320px] overflow-x-hidden font-arial">
      <div className="bg-[#F2F2F2] items-center flex flex-col justify-center overflow-hidden relative min-h-screen">
        <div className="relative flex items-center justify-center max-w-full rounded-lg main z-1 font-raleway">
          <div className="inner flex flex-col lg:flex-col-reverse lg:flex-nowrap w-[74rem] relative py-[0.9375rem] px-[0.9375rem] min-[360px]:py-5 min-[360px]:px-5 md:py-12 md:px-12">
            <section data-id="home" className="home-section">
              <div className="mb-3 bg-white">
                <div className="wrapper">
                  <div className="flex flex-wrap flex-col-reverse lg:flex-row items-center py-[2.625rem] px-6 min-[360px]:py-[3.5rem] min-[360px]:px-8 md:py-24 md:px-16">
                    <div className="m-0 w-full pt-[2.25rem] min-[360px]:pt-12 text-center md:pt-16 lg:text-left lg:pt-0 lg:pl-32 lg:w-70-item lg:-ml-32">
                      <h1 className="text-[#474747] mb-3 w-70-title text-[1.5em] leading-[1.375] tracking-[0.4375rem] font-bold uppercase min-[360px]:text-[1.875em] md:mb-4 md:tracking-[0.5rem]">
                        Cayce Pollard
                      </h1>
                      <h3 className="my-[0.5625rem] w-70-subtitle tracking-[0.21875rem] leading-[1.875] color-[#474747] text-[0.75em] uppercase font-light min-[360px]:my-3 md:tracking-[0.25rem]">
                        Multiverse Analyst
                      </h3>
                      <p className="my-[1.875rem] w-70-description text-[#474747] tracking-[0.021875rem] text-[1em] leading-[1.875] font-light font-source-sans-pro md:my-10 md:tracking-[0.025rem]">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit.
                        Duis dapibus rutrum facilisis. Class aptent taciti
                        sociosqu ad litora torquent per nostra inceptos.
                      </p>
                      <ul className="buttons mt-5 mb-0 p-0 flex flex-col gap-3 justify-center sm:flex-row lg:justify-start min-[360px]:gap-4">
                        <li>
                          <a
                            role="button"
                            href="#work"
                            onClick={handleLinkClick}
                            className="max-w-[32rem] w-full sm:max-w-full sm:w-auto inline-block text-[#474747] border border-[#CCCCCC] h-10 leading-70-btn px-5 pl-6 uppercase font-raleway tracking-[0.25rem] text-[0.625em] font-bold rouded-[0.25rem] transition duration-[0.25s] rounded-[0.25rem] hover:border-[#1CCBD6] hover:text-[#1CCBD6]"
                          >
                            Work
                          </a>
                        </li>
                        <li>
                          <a
                            role="button"
                            href="#about"
                            className="max-w-[32rem] w-full sm:max-w-full sm:w-auto inline-block text-[#474747] border border-[#CCCCCC] h-10 leading-70-btn px-5 pl-6 uppercase font-raleway tracking-[0.25rem] text-[0.625em] font-bold rouded-[0.25rem] transition duration-[0.25s] rounded-[0.25rem] hover:border-[#1CCBD6] hover:text-[#1CCBD6]"
                            onClick={handleLinkClick}
                          >
                            About
                          </a>
                        </li>
                        <li>
                          <a
                            role="button"
                            href="#contact"
                            onClick={handleLinkClick}
                            className="max-w-[32rem] w-full sm:max-w-full sm:w-auto inline-block text-[#474747] border border-[#CCCCCC] h-10 leading-70-btn px-5 pl-6 uppercase font-raleway tracking-[0.25rem] text-[0.625em] font-bold rouded-[0.25rem] transition duration-[0.25s] rounded-[0.25rem] hover:border-[#1CCBD6] hover:text-[#1CCBD6]"
                          >
                            Contact
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div className="h-auto min-h-full pb-[2.25rem] min-[360px]:pb-12 self-stretch w-full lg:min-h-[26rem] lg:w-70-item lg:pl-32 lg:pb-0 md:pb-16 lg:mb-0">
                      <div className="h-auto relative -ml-[1.5rem] -mt-[2.625rem] -mb-[2.25rem] w-70-right-inner-xs min-[360px]:w-70-right-inner-sm min-[360px]:-ml-8 min-[360px]:-mt-[3.5rem] min-[360px]:-mb-12 md:-mt-[6rem] md:-mb-[4rem] md:-ml-16 md:w-70-right-inner lg:-mt-[6rem] lg:-mb-[6rem] lg:h-70-right">
                        <div className="relative h-[15.75rem] min-[360px]:h-[18rem] sm:h-[22.5rem] w-auto md:h-auto lg:w-full lg:h-full lg:absolute">
                          <img
                            src="/assets/template-70/profile.jpg"
                            alt=""
                            className="object-center h-full object-cover w-full md:max-h-[35rem] lg:max-h-full"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full mt-8 md:mt-10">
                <div className="w-full">
                  <div className="flex flex-col items-center lg:flex-row">
                    <div className="w-full pb-[0.234375rem] min-[360px]:pb-[0.3125rem] lg:pb-0">
                      <ul className="flex flex-wrap justify-center p-0 m-0 text-[1.5em] gap-[0.9375rem] lg:justify-start min-[360px]:gap-5">
                        {/* <!-- Twitter --> */}
                        <li>
                          <Link
                            to="#"
                            className="w-[1em] h-[1em] transition duration-[0.25s] items-center flex justify-center text-[#B3B3B3] hover:text-[#787878]"
                          >
                            <FontAwesomeIcon
                              icon={faTwitter}
                              className="text-[1.3rem]"
                            />
                          </Link>
                        </li>

                        {/* <!-- Facebook --> */}
                        <li>
                          <Link
                            to="#"
                            className="w-[1em] h-[1em] transition duration-[0.25s] items-center flex justify-center text-[#B3B3B3] hover:text-[#787878]"
                          >
                            <FontAwesomeIcon
                              icon={faFacebook}
                              className="text-[1.3rem]"
                            />
                          </Link>
                        </li>

                        {/* <!-- Instagram --> */}
                        <li>
                          <Link
                            to="#"
                            className="w-[1em] h-[1em] transition duration-[0.25s] items-center flex justify-center text-[#B3B3B3] hover:text-[#787878]"
                          >
                            <FontAwesomeIcon
                              icon={faInstagram}
                              className="text-[1.3rem]"
                            />
                          </Link>
                        </li>

                        {/* <!-- Unsplash --> */}
                        <li>
                          <Link
                            to="#"
                            className="w-[1em] h-[1em] transition duration-[0.25s] items-center flex justify-center text-[#B3B3B3] hover:text-[#787878]"
                          >
                            <FontAwesomeIcon
                              icon={faUnsplash}
                              className="text-[1.3rem]"
                            />
                          </Link>
                        </li>

                        {/* <!-- Tel --> */}
                        <li>
                          <Link
                            to="#"
                            className="w-[1em] h-[1em] transition duration-[0.25s] items-center flex justify-center text-[#B3B3B3] hover:text-[#787878]"
                          >
                            <FontAwesomeIcon
                              icon={faMobileScreenButton}
                              className="text-[1.3rem]"
                            />
                          </Link>
                        </li>

                        {/* <!-- Email --> */}
                        <li>
                          <Link
                            to="#"
                            className="w-[1em] h-[1em] transition duration-[0.25s] items-center flex justify-center text-[#B3B3B3] hover:text-[#787878]"
                          >
                            <FontAwesomeIcon
                              icon={faEnvelope}
                              className="text-[1.3rem]"
                            />
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="pl-0 pt-[0.234375rem] w-full text-center lg:pt-0 lg:text-right min-[360px]:pt-[0.3125rem] lg:pl-[0.625rem]">
                      <p className="text-[#B3B3B3] tracking-[0.025rem] text-[0.875em] leading-[1.875] my-0 font-source-sans-pro">
                        © Cayce Pollard. All rights reserved.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section data-id="work" className="work-section">
              <div className="bg-white">
                <div className="wrapper">
                  <div className="flex flex-wrap flex-col lg:flex-row items-center py-[2.625rem] px-6 min-[360px]:py-[3.5rem] min-[360px]:px-8 md:py-24 md:px-16">
                    <div className="h-auto min-h-full pb-[2.25rem] self-stretch w-full min-[360px]:pb-12 md:pb-16 lg:min-h-[26rem] lg:-ml-32 lg:w-70-item lg:pl-32 lg:pb-0 lg:mb-0">
                      <div className="h-auto relative -ml-[1.5rem] -mt-[2.625rem] -mb-[2.25rem] w-70-right-inner-xs min-[360px]:w-70-right-inner-sm min-[360px]:-ml-8 min-[360px]:-mt-[3.5rem] min-[360px]:-mb-12 md:-mt-[6rem] md:-mb-[4rem] md:-ml-16 md:w-70-right-inner lg:-mt-[6rem] lg:-mb-[6rem] lg:h-70-right">
                        <div className="relative h-[12.25rem] min-[360px]:h-[14rem] sm:h-[17.5rem] w-auto md:h-auto lg:w-full lg:h-full lg:absolute">
                          <img
                            src="/assets/template-70/work.jpg"
                            alt=""
                            className="object-center h-full object-cover w-full md:max-h-[35rem] lg:max-h-full"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="m-0 w-full pt-[2.25rem] min-[360px]:pt-12 text-left md:pt-16 lg:pt-0 lg:pl-32 lg:w-70-item">
                      <h2 className="text-[#474747] mb-3 w-70-title text-[1.25em] leading-[1.375] tracking-[0.39375rem] font-bold uppercase min-[360px]:text-[1.25em] sm:mb-[0.9375rem] md:mb-5 md:tracking-[0.45rem]">
                        Work
                      </h2>

                      <p className="my-[1.96875rem] w-70-description text-[#474747] tracking-[0.021875rem] text-[1em] leading-[1.875] font-light font-source-sans-pro md:my-[2.625rem] md:tracking-[0.025rem]">
                        <span>
                          Lorem ipsum dolor sit amet consectetur adipiscing
                          elit. Duis dapibus rutrum facilisis. Class aptent
                          taciti sociosqu ad litora per conubia nostra, per
                          inceptos himenaeos. Etiam tristique libero eu nibh
                          porttitor. Nullam venenatis erat id vehicula ultrices
                          sed ultricies condimentum. Magna sed etiam consequat,
                          et lorem adipiscing sed nulla.
                        </span>

                        <span className="block mt-4">
                          Vehicula ultrices dolor amet ultricies et condimentum.
                          Magna sed etiam consequat, et lorem adipiscing sed
                          dolor sit amet, consectetur amet do eiusmod tempor
                          incididunt ipsum suspendisse ultrices gravida.
                        </span>

                        <span className="block mt-4">
                          Etiam tristique libero eu nibh porttitor amet
                          fermentum. Nullam venenatis erat id vehicula ultrices.
                        </span>
                      </p>

                      <ul className="buttons mt-3 mb-0 p-0 flex flex-col gap-3 sm:flex-row lg:justify-start min-[360px]:gap-4">
                        <li>
                          <a
                            role="button"
                            onClick={handleLinkClick}
                            href="#home"
                            className="max-w-[32rem] inline-block text-[#474747] border border-[#CCCCCC] h-10 leading-70-btn px-5 pl-6 uppercase font-raleway tracking-[0.25rem] text-[0.625em] font-bold rouded-[0.25rem] transition duration-[0.25s] rounded-[0.25rem] hover:border-[#1CCBD6] hover:text-[#1CCBD6]"
                          >
                            <FontAwesomeIcon
                              icon={faArrowLeft}
                              className="-ml-[0.125em] mr-3"
                            />
                            Back
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section data-id="about" className="about-section">
              <div className="bg-white">
                <div className="wrapper">
                  <div className="flex flex-wrap flex-col-reverse lg:flex-row items-center py-[2.625rem] px-6 min-[360px]:py-[3.5rem] min-[360px]:px-8 md:py-24 md:px-16">
                    <div className="m-0 w-full pt-[2.25rem] min-[360px]:pt-12 md:pt-16 lg:pt-0 lg:pl-32 lg:w-70-item lg:-ml-32">
                      <h2 className="text-[#474747] mb-3 w-70-title text-[1.25em] leading-[1.375] tracking-[0.39375rem] font-bold uppercase min-[360px]:text-[1.25em] sm:mb-[0.9375rem] md:mb-5 md:tracking-[0.45rem]">
                        About
                      </h2>
                      <p className="my-[1.96875rem] w-70-description text-[#474747] tracking-[0.021875rem] text-[1em] leading-[1.875] font-light font-source-sans-pro md:my-[2.625rem] md:tracking-[0.025rem]">
                        Aenean ornare velit lacus, ac varius enim ullamcorper
                        eu. Magna aliquam sed facilisis ante interdum congue.
                        Integer mollis, nisl amet convallis, porttitor magna
                        ullamcorper, amet mauris. Ut magna finibus nisi nec
                        lacinia ipsum maximus ac varius enim lorem dolore.
                      </p>
                      <ul className="buttons mt-[0.5625rem] mb-0 p-0 flex flex-col gap-3 md:mt-3 sm:flex-row min-[360px]:gap-4">
                        <li>
                          <a
                            role="button"
                            onClick={handleLinkClick}
                            href="#home"
                            className="max-w-[32rem] inline-block text-[#474747] border border-[#CCCCCC] h-10 leading-70-btn px-5 pl-6 uppercase font-raleway tracking-[0.25rem] text-[0.625em] font-bold rouded-[0.25rem] transition duration-[0.25s] rounded-[0.25rem] hover:border-[#1CCBD6] hover:text-[#1CCBD6]"
                          >
                            <FontAwesomeIcon
                              icon={faArrowLeft}
                              className="-ml-[0.125em] mr-3"
                            />
                            Back
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div className="h-auto min-h-full pb-[2.25rem] min-[360px]:pb-12 self-stretch w-full lg:min-h-[26rem] lg:w-70-item lg:pl-32 lg:pb-0 md:pb-16 lg:mb-0">
                      <div className="h-auto relative -ml-[1.5rem] -mt-[2.625rem] -mb-[2.25rem] w-70-right-inner-xs min-[360px]:w-70-right-inner-sm min-[360px]:-ml-8 min-[360px]:-mt-[3.5rem] min-[360px]:-mb-12 md:-mt-[6rem] md:-mb-[4rem] md:-ml-16 md:w-70-right-inner lg:-mt-[6rem] lg:-mb-[6rem] lg:h-70-right">
                        <div className="relative h-[12.25rem] min-[360px]:h-[14rem] sm:h-[17.5rem] w-auto md:h-auto lg:w-full lg:h-full lg:absolute">
                          <img
                            src="/assets/template-70/about.jpg"
                            alt=""
                            className="object-center h-full object-cover w-full md:max-h-[35rem] lg:max-h-full"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section data-id="contact" className="text-center contact-section">
              <div className="mt-0 mb-8 md:mb-10">
                <div className="w-full max-w-[30rem] inline-block mx-auto text-left">
                  <div>
                    <ul className="flex flex-col p-0 m-0 buttons">
                      <li>
                        <a
                          role="button"
                          onClick={handleLinkClick}
                          href="#home"
                          className="max-w-[32rem] inline-block text-[#474747] border border-[#CCCCCC] h-10 leading-70-btn px-5 pl-6 uppercase font-raleway tracking-[0.25rem] text-[0.625em] font-bold rouded-[0.25rem] transition duration-[0.25s] rounded-[0.25rem] hover:border-[#1CCBD6] hover:text-[#1CCBD6]"
                        >
                          <FontAwesomeIcon
                            icon={faArrowLeft}
                            className="-ml-[0.125em] mr-3"
                          />
                          Back
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-[0.5625rem] min-[360px]:mt-[0.65625rem] sm:mt-3">
                <div className="bg-white w-full max-w-[30rem] inline-block text-left">
                  <div className="py-[2.625rem] px-6 min-[360px]:py-[3.5rem] min-[360px]:px-8 md:py-16 md:px-12">
                    <h2 className="font-raleway uppercase text-[#474747] text-[1.25em] mb-[0.9375rem] tracking-[0.39375rem] leading-[1.375] w-70-title font-bold mt-0 md:mb-[1.25rem] md:tracking-[0.45rem]">
                      Contact
                    </h2>

                    <p className="font-[1em] my-[1.96875rem] tracking-[0.021875rem] w-70-description leading-[1.875] text-[#474747] font-source-sans-pro font-light md:my-[2.625rem] md:tracking-[0.025rem]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Praesent vestibulum risus sit amet lectus condimentum, ac
                      fermentum nibh ullamcorper magna.
                    </p>

                    <form className="mt-[0.5625rem] min-[360px]:mt-[0.65625rem] md:mt-3">
                      <div className="flex flex-col">
                        <div>
                          <label
                            htmlFor="form-70-name"
                            className="text-[0.625em] leading-[1.5] tracking-[0.275rem] pl-[0.275rem] uppercase font-bold text-[#474747] mb-5 font-raleway block"
                          >
                            Name
                          </label>

                          <input
                            id="form-70-name"
                            type="text"
                            className="text-[1em] tracking-[0.025rem] h-12 px-[1.05rem] leading-70-input text-[#474747] font-source-sans-pro rounded-[0.25rem] font-light border border-[#CCCCCC] w-full focus:border-[#1CCBD6] focus:shadow-70-input outline-none"
                          />
                        </div>

                        <div className="mt-[1.875rem]">
                          <label
                            htmlFor="form-70-email"
                            className="text-[0.625em] leading-[1.5] tracking-[0.275rem] uppercase font-bold text-[#474747] mt-1 mb-5 font-raleway pl-[0.275rem] block"
                          >
                            Email
                          </label>

                          <input
                            id="form-70-email"
                            type="text"
                            className="text-[1em] tracking-[0.025rem] h-12 px-[1.05rem] leading-70-input text-[#474747] font-source-sans-pro rounded-[0.25rem] font-light border border-[#CCCCCC] w-full focus:border-[#1CCBD6] focus:shadow-70-input outline-none"
                          />
                        </div>

                        <div className="mt-[1.875rem] flex flex-col">
                          <label
                            htmlFor="form-70-message"
                            className="text-[0.625em] leading-[1.5] tracking-[0.275rem] uppercase font-bold text-[#474747] mt-1 mb-5 font-raleway pl-[0.275rem] block"
                          >
                            Message
                          </label>

                          <textarea
                            id="form-70-message"
                            className="text-[1em] p-[1.05rem] pt-[0.7875rem] pl-[1.075rem] tracking-[0.025rem] h-[13rem] px-[1.05rem] leading-[1.5] text-[#474747] font-source-sans-pro rounded-[0.25rem] font-light border border-[#CCCCCC] w-full focus:border-[#1CCBD6] focus:shadow-70-input outline-none"
                          ></textarea>
                        </div>

                        <div className="mt-[2.578125rem]">
                          <button
                            type="submit"
                            className="max-w-[32rem] w-full text-[0.625em] leading-70-textarea tracking-[0.25rem] pl-6 h-10 inline-block px-5 uppercase font-raleway font-bold rounded-[0.25rem] overflow-hidden text-[#474747] border border-[#CCCCCC] transition duration-[0.25s] relative hover:border-[#1CCBD6] hover:text-[#1CCBD6] min-[480px]:max-w-none min-[480px]:w-auto"
                          >
                            Send Message
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </section>

            <section
              data-id="contact-done"
              className="text-center contact-done-section"
            >
              <div>
                <div className="bg-white w-full max-w-[25rem] inline-block mx-auto">
                  <div className="py-[2.625rem] px-6 min-[360px]:py-[3.5rem] min-[360px]:px-8 md:py-[4rem] md:px-[3rem]">
                    <h2 className="font-raleway uppercase text-[#474747] text-[1.25em] mb-[0.9375rem] tracking-[0.39375rem] leading-[1.375] w-70-title font-bold mt-0 md:mb-[1.25rem] md:tracking-[0.45rem]">
                      Thank You
                    </h2>

                    <p className="font-[1em] my-[1.96875rem] tracking-[0.021875rem] w-70-description leading-[1.875] text-[#474747] font-source-sans-pro font-light md:my-[2.625rem] md:tracking-[0.025rem]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Praesent vestibulum risus sit amet lectus condimentum, ac
                      fermentum nibh ullamcorper magna.
                    </p>

                    <ul className="buttons mt-[0.5625rem] mb-0 p-0 flex md:mt-3 justify-center">
                      <li>
                        <a
                          onClick={handleLinkClick}
                          href="#home"
                          className="max-w-[32rem] inline-block text-[#474747] border border-[#CCCCCC] h-10 leading-70-btn px-5 pl-6 uppercase font-raleway tracking-[0.25rem] text-[0.625em] font-bold rouded-[0.25rem] transition duration-[0.25s] rounded-[0.25rem] hover:border-[#1CCBD6] hover:text-[#1CCBD6]"
                        >
                          Okay
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template70;
