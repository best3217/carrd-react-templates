import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Template223Page = () => {
  const location = useLocation();
  const [currentSection, setCurrentSection] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
        html {
            font-size: 11pt;
        }
        @media (min-width: 981px) {
            html {
                font-size: 13pt;
            }
        }
        @media (min-width: 1281px) {
            html {
                font-size: 13pt;
            }
        }
        @media (min-width: 1681px) {
            html {
                font-size: 18pt;
            }
        }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

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

  const handleLinkClick = (event: any) => {
    event.preventDefault();
    const id = event.currentTarget.getAttribute("href");
    if (!id) return;

    showSection(id);
    setTimeout(() => {
      navigate(`${id}`);
    }, 500);
  };

  const showSection = (id: string) => {
    const nextSection = document.getElementById(`${id.slice(1)}-section`);
    if (!nextSection) return;

    if (currentSection) {
      currentSection.classList.add(
        "transition",
        "transform",
        "duration-[0.25s]",
        "opacity-0"
      );

      setTimeout(() => {
        currentSection.classList.add("hidden");
        currentSection.classList.remove(
          "transition",
          "transform",
          "duration-[0.25s]",
          "opacity-0"
        );

        nextSection.classList.remove("hidden");
        nextSection.classList.add(
          "transition",
          "transform",
          "duration-[0.25s]",
          "opacity-0"
        );

        setTimeout(() => {
          nextSection.classList.remove("opacity-0");
          window.scrollTo(0, 0);
          setCurrentSection(nextSection);
        }, 50);
      }, 250);
    }
  };

  const handleOnSubmit = (e: any) => {
    e.preventDefault();
    showSection("#done");
  };

  return (
    <div className="min-w-[320px] overflow-x-hidden tex-white min-h-screen leading-[1]">
      <div className="fixed left-0 right-0 z-0 w-screen h-screen bg-no-repeat bg-cover bg-position-center-0-0 bg-223-main"></div>
      <div className="flex flex-col items-center justify-center min-h-screen overflow-hidden relative z-[2]">
        <div className="relative flex items-center justify-center w-full max-w-full main">
          <div className="inner w-full max-w-[72rem] p-[0.9375rem] min-[360px]:p-5 md:p-16">
            <section id="home-section" className="">
              <div className="bg-223-home bg-cover bg-position-center-0-50 bg-no-repeat flex items-end justify-start shadow-223-card rounded-[2.5rem] min-h-[17.5rem] min-[360px]:min-h-[26.25rem] md:min-h-[35rem]">
                <div className="wrapper w-full max-w-[72rem]">
                  <div className="inner flex flex-col items-end py-[4.5rem] px-6 md:flex-row min-[360px]:py-24 min-[360px]:px-8 md:px-16 md:py-16">
                    <div className="w-full pb-4 md:w-223-inner-left md:pb-0 md:-ml-16 md:pl-16">
                      <p className="text-[1.5em] leading-[1.25] font-medium font-inter text-[#D9458C] mb-[1.125rem] min-[360px]:mb-[1.3125rem] min-[480px]:mb-6 min-[360px]:text-[1.75em]">
                        01.
                      </p>

                      <h1 className="tracking-[-0.04375rem] w-full leading-[1.25] text-white font-inter text-[2.5em] my-[1.125rem] md:tracking-[-0.05rem] min-[360px]:my-[1.3125rem] min-[480px]:my-6">
                        Magna gravida consequat
                      </h1>

                      <p className="text-[1em] font-inter leading-[1.75] text-[rgba(255,255,255,0.659)] mt-[1.125rem] min-[360px]:mt-[1.3125rem] min-[480px]:mt-6">
                        Feugiat pellentesque aliquet phasellus nec consequat dis
                        in primis lacinia et magna ata suscipit posuere arcu
                        elementum orci amet sed pretium mus.
                      </p>
                    </div>

                    <div className="w-full pt-4 md:pt-0 md:w-223-inner-right md:pl-16">
                      <ul className="flex justify-start text-[1.75em] gap-[0.9375rem] min-[360px]:gap-5 md:justify-end">
                        <li>
                          <a
                            href={`#two`}
                            role="button"
                            onClick={handleLinkClick}
                            className="rounded-full text-white h-[2em] w-[2em] bg-[#ED5D3E] bg-223-arrow bg-position-0-0 bg-cover flex items-center justify-center transition duration-[0.25s]"
                          >
                            <FontAwesomeIcon icon={faArrowRight} />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="two-section" className="">
              <div className="bg-223-two bg-cover bg-position-center-0-50 bg-no-repeat flex items-end justify-start shadow-223-card rounded-[2.5rem] min-h-[17.5rem] min-[360px]:min-h-[26.25rem] md:min-h-[35rem]">
                <div className="wrapper w-full max-w-[72rem]">
                  <div className="inner flex flex-col items-end py-[4.5rem] px-6 md:flex-row min-[360px]:py-24 min-[360px]:px-8 md:px-16 md:py-16">
                    <div className="w-full pb-4 md:w-223-inner-left md:pb-0 md:-ml-16 md:pl-16">
                      <p className="text-[1.5em] leading-[1.25] font-medium font-inter text-[#D9458C] mb-[1.125rem] min-[360px]:mb-[1.3125rem] min-[480px]:mb-6 min-[360px]:text-[1.75em]">
                        02.
                      </p>

                      <h1 className="tracking-[-0.04375rem] w-full leading-[1.25] text-white font-inter text-[2.5em] my-[1.125rem] md:tracking-[-0.05rem] min-[360px]:my-[1.3125rem] min-[480px]:my-6">
                        Sapien metus et aliquam
                      </h1>

                      <p className="text-[1em] font-inter leading-[1.75] text-[rgba(255,255,255,0.659)] mt-[1.125rem] min-[360px]:mt-[1.3125rem] min-[480px]:mt-6">
                        Euismod dis et adipiscing magnis sed gravida libero
                        imperdiet auctor penatibus ata laoreet curae iaculis
                        porttitor eu eget erat mi in ullamcorper.
                      </p>
                    </div>

                    <div className="w-full pt-4 md:pt-0 md:w-223-inner-right md:pl-16">
                      <ul className="flex justify-start text-[1.75em] gap-[0.9375rem] min-[360px]:gap-5 md:justify-end">
                        <li>
                          <a
                            role="button"
                            href={`#home`}
                            onClick={handleLinkClick}
                            className="rounded-full text-white h-[2em] w-[2em] bg-[#2A95F7] bg-223-arrow bg-position-0-0 bg-cover flex items-center justify-center transition duration-[0.25s]"
                          >
                            <FontAwesomeIcon icon={faArrowLeft} />
                          </a>
                        </li>
                        <li>
                          <a
                            href={`#three`}
                            role="button"
                            onClick={handleLinkClick}
                            className="rounded-full text-white h-[2em] w-[2em] bg-[#ED5D3E] bg-223-arrow bg-position-0-0 bg-cover flex items-center justify-center transition duration-[0.25s]"
                          >
                            <FontAwesomeIcon icon={faArrowRight} />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="three-section" className="">
              <div className="bg-223-three bg-cover bg-position-center-0-50 bg-no-repeat flex items-end justify-start shadow-223-card rounded-[2.5rem] min-h-[17.5rem] min-[360px]:min-h-[26.25rem] md:min-h-[35rem]">
                <div className="wrapper w-full max-w-[72rem]">
                  <div className="inner flex flex-col items-end py-[4.5rem] px-6 md:flex-row min-[360px]:py-24 min-[360px]:px-8 md:px-16 md:py-16">
                    <div className="w-full pb-4 md:w-223-inner-left md:pb-0 md:-ml-16 md:pl-16">
                      <p className="text-[1.5em] leading-[1.25] font-medium font-inter text-[#D9458C] mb-[1.125rem] min-[360px]:mb-[1.3125rem] min-[480px]:mb-6 min-[360px]:text-[1.75em]">
                        03.
                      </p>

                      <h1 className="tracking-[-0.04375rem] w-full leading-[1.25] text-white font-inter text-[2.5em] my-[1.125rem] md:tracking-[-0.05rem] min-[360px]:my-[1.3125rem] min-[480px]:my-6">
                        Etiam feugiat veroeros
                      </h1>

                      <p className="text-[1em] font-inter leading-[1.75] text-[rgba(255,255,255,0.659)] mt-[1.125rem] min-[360px]:mt-[1.3125rem] min-[480px]:mt-6">
                        Lorem enim ultrices tempus ante phasellus amet suscipit
                        nisi augue pulvinar tempus varius sociis etiam curae ata
                        neque risus quisque in phasellus.
                      </p>
                    </div>

                    <div className="w-full pt-4 md:pt-0 md:w-223-inner-right md:pl-16">
                      <ul className="flex justify-start text-[1.75em] gap-[0.9375rem] min-[360px]:gap-5 md:justify-end">
                        <li>
                          <a
                            href={`#two`}
                            onClick={handleLinkClick}
                            role="button"
                            className="rounded-full text-white h-[2em] w-[2em] bg-[#2A95F7] bg-223-arrow bg-position-0-0 bg-cover flex items-center justify-center transition duration-[0.25s]"
                          >
                            <FontAwesomeIcon icon={faArrowLeft} />
                          </a>
                        </li>
                        <li>
                          <a
                            href={`#four`}
                            role="button"
                            onClick={handleLinkClick}
                            className="rounded-full text-white h-[2em] w-[2em] bg-[#ED5D3E] bg-223-arrow bg-position-0-0 bg-cover flex items-center justify-center transition duration-[0.25s]"
                          >
                            <FontAwesomeIcon icon={faArrowRight} />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="four-section" className="">
              <div className="bg-223-four bg-cover bg-position-center-0-50 bg-no-repeat flex items-end justify-start shadow-223-card rounded-[2.5rem] min-h-[17.5rem] min-[360px]:min-h-[26.25rem] md:min-h-[35rem]">
                <div className="wrapper w-full max-w-[72rem]">
                  <div className="inner flex flex-col items-end py-[4.5rem] px-6 md:flex-row min-[360px]:py-24 min-[360px]:px-8 md:px-16 md:py-16">
                    <div className="w-full pb-4 md:w-223-inner-left md:pb-0 md:-ml-16 md:pl-16">
                      <p className="text-[1.5em] leading-[1.25] font-medium font-inter text-[#D9458C] mb-[1.125rem] min-[360px]:mb-[1.3125rem] min-[480px]:mb-6 min-[360px]:text-[1.75em]">
                        04.
                      </p>

                      <h1 className="tracking-[-0.04375rem] w-full leading-[1.25] text-white font-inter text-[2.5em] my-[1.125rem] md:tracking-[-0.05rem] min-[360px]:my-[1.3125rem] min-[480px]:my-6">
                        Ipsum et lorem fermentum
                      </h1>

                      <p className="text-[1em] font-inter leading-[1.75] text-[rgba(255,255,255,0.659)] mt-[1.125rem] min-[360px]:mt-[1.3125rem] min-[480px]:mt-6">
                        Arcu fermentum mattis sapien tempor blandit magnis sed
                        hendrerit vis cras nec magna nulla massa sociis curae mi
                        velit sit tellus parturient.
                      </p>

                      <form
                        className="flex justify-start mt-6 md:mt-8"
                        onSubmit={handleOnSubmit}
                      >
                        <div className="w-[33rem] flex flex-col md:flex-row items-start">
                          <div className="w-full">
                            <input
                              type="email"
                              placeholder="Email"
                              required
                              maxLength={128}
                              className="w-full h-[3.25rem] px-[1.1375rem] leading-[3.25rem] font-inter rounded-[0.5rem] text-[rgba(0,0,0,0.659)] bg-[rgba(255,255,255,0.69)] text-[1em] outline-none focus:shadow-223-input"
                            />
                          </div>

                          <div className="w-full mt-5 md:mt-0 md:ml-5 min-[480px]:w-auto">
                            <button
                              type="submit"
                              className="inline-block text-[1em] w-full max-w-[32rem] h-[3.25rem] px-[1.625rem] leading-[3.25rem] font-inter rounded-[0.5rem] bg-[#ED5D3E] bg-223-arrow transition duration-[0.25s] bg-cover text-white min-[480px]:max-w-none"
                            >
                              Submit
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>

                    <div className="w-full pt-4 md:pt-0 md:w-223-inner-right md:pl-16">
                      <ul className="flex justify-start text-[1.75em] gap-[0.9375rem] min-[360px]:gap-5 md:justify-end">
                        <li>
                          <a
                            href={`#three`}
                            onClick={handleLinkClick}
                            role="button"
                            className="rounded-full text-white h-[2em] w-[2em] bg-[#ED5D3E] bg-223-arrow bg-position-0-0 bg-cover flex items-center justify-center transition duration-[0.25s]"
                          >
                            <FontAwesomeIcon icon={faArrowLeft} />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="done-section" className="">
              <div className="flex items-end justify-start rounded-[2.5rem]">
                <div className="w-full wrapper max-w-[72rem]">
                  <div className="inner flex flex-col items-end py-6 px-6 md:flex-row min-[360px]:py-8 min-[360px]:px-8 md:px-16 md:py-16">
                    <div className="w-full">
                      <h1 className="tracking-[-0.04375rem] w-full leading-[1.25] text-white font-inter text-[2.5em] mb-[1.125rem] md:tracking-[-0.05rem] min-[360px]:mb-[1.3125rem] min-[480px]:mb-6">
                        Thank you
                      </h1>

                      <p className="text-[1em] font-inter leading-[1.75] text-[rgba(255,255,255,0.659)] mt-[1.125rem] min-[360px]:mt-[1.3125rem] min-[480px]:mt-6">
                        Posuere eget id ultrices pharetra lacus eu sodales
                        sociis non lorem eu magna volutpat aliquam.
                      </p>

                      <ul className="flex justify-start text-[1.75em] mt-6 gap-[0.9375rem] min-[360px]:gap-5 md:mt-8">
                        <li>
                          <a
                            href={`#home`}
                            onClick={handleLinkClick}
                            role="button"
                            className="rounded-full text-white h-[2em] w-[2em] bg-[#ED5D3E] bg-223-arrow bg-position-0-0 bg-cover flex items-center justify-center transition duration-[0.25s]"
                          >
                            <FontAwesomeIcon icon={faArrowRight} />
                          </a>
                        </li>
                      </ul>
                    </div>
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

export default Template223Page;
