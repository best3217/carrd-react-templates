import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Template210 = () => {
  const [currentSection, setCurrentSection] = useState<any>(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const sections: any = document.getElementsByTagName("section");
    const initialHash = location.hash ? location.hash.substring(1) : "home";
    for (const section of sections) {
      if (`${initialHash}-section` !== section.getAttribute("id")) {
        section.classList.add("hidden", "opacity-0");
      } else {
        setCurrentSection(section);
      }
    }
  }, [location.hash]);

  const handleContinue = (event: any) => {
    event.preventDefault();
    const id = "#home";
    showSection(id);
    setTimeout(() => {
      navigate(`${id}`);
    }, 500);
  };

  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
            html {
                font-size: 12pt;
            }
            @media (min-width: 980px) {
                html {
                    font-size: 9pt;
                }
            }
            @media (min-width: 1280px) {
                html {
                    font-size: 11pt;
                }
            }
            @media (min-width: 1680px) {
                html {
                    font-size: 15pt;
                }
            }
        `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const showSection = (id: string) => {
    const nextSection = document.getElementById(`${id.slice(1)}-section`);
    if (!nextSection) return;

    if (currentSection) {
      currentSection.classList.add(
        "transition",
        "transform",
        "duration-[0.3s]",
        "opacity-0"
      );

      setTimeout(() => {
        currentSection.classList.add("hidden");
        currentSection.classList.remove(
          "transition",
          "transform",
          "duration-[0.3s]",
          "opacity-0"
        );

        nextSection.classList.remove("hidden");
        nextSection.classList.add(
          "transition",
          "transform",
          "duration-[0.3s]",
          "opacity-0"
        );

        setTimeout(() => {
          nextSection.classList.remove("opacity-0");
          window.scrollTo(0, 0);
          setCurrentSection(nextSection);
        }, 50);
      }, 400);
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    showSection("#done");
  };

  return (
    <div className="bg-[#141414] min-w-[320px] overflow-x-hidden tex-white min-h-screen leading-[1]">
      <div className="fixed left-0 right-0 z-0 w-screen h-screen bg-center bg-512 bg-210-main"></div>

      <div className="flex items-start flex-col justify-center min-h-screen overflow-hidden relative z-[2]">
        <div className="relative flex items-center justify-center max-w-full">
          <div className="inner relative max-w-full w-[60rem] py-[2.625rem] px-6 min-[360px]:py-14 min-[360px]:px-8 md:px-16 md:py-16">
            <section id="home-section" className="">
              <div className="relative flex min-h-screen items-end justify-start w-screen max-w-[100vw] my-[-2.625rem] ml-[-1.5rem] min-[360px]:my-[-3.5rem] min-[360px]:-ml-8 md:-my-16 md:-ml-16">
                <div className="z-[-1] absolute left-0 right-0 w-screen h-screen bg-center-0-0 bg-512-cover bg-210-inner"></div>
                {/* Slide image */}
                <div className="h-full object-cover bg-black absolute z-[-2] w-full left-0 overflow-hidden">
                  <div className="h-full w-[150%] bg-center bg-no-repeat bg-cover bg-210-cover-1" />
                  <div className="h-full w-[150%] bg-center bg-no-repeat bg-cover bg-210-cover-2" />
                  <div className="h-full w-[150%] bg-center bg-no-repeat bg-cover bg-210-cover-3" />
                </div>
                {/*  */}

                {/* Content */}
                <div className="wrapper max-w-[60rem] w-full">
                  <div className="inner py-[2.625rem] px-6 min-[360px]:py-14 min-[360px]:px-8 md:px-16 md:py-16">
                    <div className="relative mb-6 image md:mb-8 leading-[0]">
                      <span className="inline-block w-16 md:w-[5.5rem]">
                        <img src="/assets/template-210/profile.svg" alt="" />
                      </span>
                    </div>

                    <h1 className="text-[2.5em] text-white font-extrabold font-jetbrains-mono leading-[1.375] w-full my-[1.125rem] min-[360px]:my-[1.3125rem] min-[480px]:my-6 md:text-[3.5em]">
                      Lorem ipsum dolor magna sit nullam.
                    </h1>

                    <p className="text-[1em] tracking-[0.021875rem] text-white font-inter font-light leading-[2] my-[1.125rem] min-[360px]:my-[1.3125rem] min-[480px]:my-6 md:tracking-[0.025rem]">
                      Integer et elit erat condimentum ac imperdiet aenean
                      ullamcorper pretium. Imperdiet egestas donec lobortis eu
                      ut consectetur diam tempus nisi risus. Risus montes duis
                      duis.
                    </p>

                    <form
                      className="mt-[2.25rem] flex md:mt-12"
                      onSubmit={handleSubmit}
                    >
                      <div className="flex flex-col items-start w-full md:flex-row">
                        <div className="w-full">
                          <input
                            type="email"
                            className="w-full text-[1em] tracking-[0.025rem] pl-210-input h-16 px-[1.4rem] font-light rounded-[2.5rem] text-[#141414] bg-white font-inter leading-[4rem] outline-none focus:shadow-210-input"
                            maxLength={128}
                            required
                            placeholder="Email"
                          />
                        </div>

                        <div className="mt-6 md:mt-0 w-full md:ml-6 min-[480px]:w-auto">
                          <button
                            type="submit"
                            className="inline-flex items-center h-16 leading-[4rem] px-8 uppercase font-inter font-semibold pl-210-btn rounded-[2.5rem] flex-row-reverse bg-[#2EEC9B] text-[#141414] transition duration-[0.375s] relative justify-center text-center whitespace-nowrap max-w-[32rem] w-full min-[480px]:w-auto min-[480px]:max-w-full text-[0.75em] tracking-[0.275rem]"
                          >
                            <FontAwesomeIcon
                              icon={faArrowRight}
                              className="h-full min-w-[18px] w-5 ml-4 max-h-[0.8rem] mr-210-arrow-icon"
                            />
                            <span>Subscribe</span>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                {/*  */}
              </div>
            </section>

            <section id="done-section">
              <h2 className="text-[1.75em] text-white font-extrabold font-jetbrains-mono leading-[1.375] w-full mb-[1.125rem] min-[360px]:mb-[1.3125rem] min-[480px]:mb-6 md:text-[2.625em]">
                Thank you.
              </h2>

              <p className="text-[1em] tracking-[0.021875rem] text-white font-inter font-light leading-[1.875] my-[1.6875rem] md:my-[2.25rem] md:tracking-[0.025rem]">
                Nisi turpis mi mi viverra mauris neque ut sollicitudin natoque
                ata justo quis.
              </p>

              <ul className="mt-[1.125rem] min-[360px]:mt-[1.3125rem] min-[480px]:mt-6 flex flex-col">
                <li>
                  <button
                    onClick={handleContinue}
                    type="button"
                    className="inline-flex items-center h-16 leading-[4rem] px-8 uppercase font-inter font-semibold pl-210-btn rounded-[2.5rem] flex-row-reverse bg-[#2EEC9B] text-[#141414] transition duration-[0.375s] relative justify-center text-center whitespace-nowrap max-w-[32rem] w-full min-[480px]:w-auto min-[480px]:max-w-full text-[0.75em] tracking-[0.275rem]"
                  >
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="h-full min-w-[18px] w-5 ml-4 max-h-[0.8rem] mr-210-arrow-icon"
                    />
                    <span>Continue</span>
                  </button>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template210;
