import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Template184Page = () => {
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
        html {
            font-size: 12pt;
        }
        @media (min-width: 980px) {
            html {
                font-size: 11pt;
            }
        }
        @media (min-width: 1280px) {
            html {
                font-size: 13pt;
            }
        }
        @media (min-width: 1680px) {
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

  return (
    <div className="min-w-[320px] overflow-x-hidden tex-white bg-[#292A2B] min-h-screen lg:bg-transparent">
      <div className="relative top-0 z-0 w-full h-screen transform scale-100 bg-center max-h-[45vh] bg-184-main-lg bg-184-main-size lg:w-screen lg:max-h-none lg:bg-184-main lg:fixed"></div>

      <div className="flex flex-col justify-end overflow-hidden relative z-[2] items-stretch min-h-0 lg:pt-[4.5rem] lg:min-h-screen">
        <div className="relative flex justify-center items-center max-w-full w-full bg-[#292A2B] lg:bg-transparent">
          <div className="inner py-[2.625rem] px-6 w-full max-w-full md:max-w-[75%] lg:max-w-full min-[360px]:py-14 min-[360px]:px-8 md:py-24 md:px-24">
            <div className="relative flex items-end justify-center w-full bg-transparent">
              <div className="w-full wrapper max-w-screen">
                <div className="flex flex-col items-end text-left inner lg:flex-row">
                  <div className="w-full pb-4 lg:w-184-left md:pb-8 lg:pb-0">
                    <p className="text-[0.75em] tracking-[0.371875rem] uppercase leading-[2.25] text-[#66C8FF] font-inter font-normal w-full mb-[1.125rem] min-[360px]:mb-[1.3125rem] min-[480px]:mb-6 md:tracking-[0.425rem]">
                      Lorem ipsum
                    </p>

                    <h1 className="text-white font-vidaloka tracking-[0rem] leading-[1.125] w-full text-[2.75em] my-[1.125rem] min-[360px]:my-[1.3125rem] min-[480px]:my-6 md:text-[5.5em]">
                      Dolor sit amet
                    </h1>

                    <p className="font-inter text-[rgba(255,255,255,0.62)] text-[1em] leading-[2] mb-0 mt-[1.125rem] min-[360px]:mt-[1.3125rem] min-[480px]:mt-6">
                      <strong className="text-white">
                        Gravida in fermentum{" "}
                      </strong>
                      sollicitudin orci phasellus odio feugiat pretium nibh
                      ipsum pretium. Lorem ipsum dolor nisl tempus{" "}
                      <Link to="#" className="text-[#66C8FF] underline">
                        magna consequat
                      </Link>
                      .
                    </p>
                  </div>

                  <div className="w-full min-h-full pt-4 text-right lg:w-184-right md:pt-8 lg:pt-0 lg:pl-16">
                    <ul className="gap-[1.125rem] flex flex-col flex-wrap justify-end min-[360px]:gap-6 min-[480px]:flex-row ">
                      <li className="max-w-full">
                        <Link
                          to="#"
                          className="flex w-screen text-white border-[3px] border-[#66C8FF] max-w-full text-[1em] leading-[2rem] px-[1.875rem] font-inter rounded-[1.5rem] flex-row-reverse py-[1.171875rem] items-start transition duration-[0.25s] text-center hover:border-[#66C8FF] hover:text-[#66C8FF] hover:scale-[1.025]"
                        >
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className="text-[#66C8FF] w-[2em] h-[2rem] ml-[0.5rem] min-w-4 transition duration-[0.25s] block"
                          />
                          <span className="flex-1 w-full text-left">
                            Sed bibendum arcu curabitur vitae
                          </span>
                        </Link>
                      </li>

                      <li className="max-w-full">
                        <Link
                          to="#"
                          className="flex w-screen text-white border-[3px] border-[#66C8FF] max-w-full text-[1em] leading-[2rem] px-[1.875rem] font-inter rounded-[1.5rem] flex-row-reverse py-[1.171875rem] items-start transition duration-[0.25s] text-center hover:border-[#66C8FF] hover:text-[#66C8FF] hover:scale-[1.025]"
                        >
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className="text-[#66C8FF] w-[2em] h-[2rem] ml-[0.5rem] min-w-4 transition duration-[0.25s] block"
                          />
                          <span className="flex-1 w-full text-left">
                            Porta ornare arcu odio consequat
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template184Page;
