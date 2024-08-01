import {
  faGithub,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faArrowRight, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Template203 = () => {
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
    <div className="min-w-[320px] overflow-x-hidden">
      <div className="fixed top-0 z-0 w-full h-screen transform scale-100 bg-203-main bg-size-512-cover-cover bg-position-center-0-0-center"></div>

      <div className="flex items-center flex-col justify-center min-h-screen overflow-hidden relative z-[2]">
        <div className="relative flex items-center justify-center max-w-full text-center">
          <div className="inner w-[60rem] p-3 max-w-full min-[360px]:p-4 md:p-12">
            <div>
              <div className="inline-block shadow-203-inner-box rounded-[2rem] border-[rgba(69,69,69,0.122)] backdrop-blur-[0.775rem] bg-203-inner-box bg-cover bg-position-0-0 w-[75rem] max-w-full">
                <div className="inner relative text-center flex items-center flex-col md:flex-row rounded-[2rem] py-[2.625rem] px-[1.5rem] min-[360px]:px-8 min-[360px]:py-14 md:px-16 md:py-16 md:text-left">
                  <div className="w-full min-h-full pb-10 md:pl-32 md:-ml-32 md:w-203-left md:pb-0">
                    <div className="mb-[1.125rem] min-[360px]:mb-[1.3125rem] min-[480px]:mb-6">
                      <div className="w-[3.625rem] mx-auto md:mx-0">
                        <img src="/assets/template-203/profile.svg" alt="" />
                      </div>
                    </div>

                    <h1 className="text-[#555F61] font-source-sans-pro tracking-[-0.065625rem] font-normal w-full text-[2.75em] leading-[1.125] my-[1.125rem] min-[360px]:my-[1.3125rem] min-[480px]:my-6 md:tracking-[-0.075rem] md:text-[3em]">
                      Gravida nullam sed veroeros
                    </h1>

                    <p className="text-[1em] font-light leading-[1.75] w-full font-source-sans-pro text-[#555F61] my-[1.125rem] min-[360px]:my-[1.3125rem] min-[480px]:my-6">
                      Sed lorem ipsum dolor sit amet nullam consequat feugiat
                      consequat magna adipiscing magna etiam amet veroeros.
                      Lorem ipsum dolor tempus.
                    </p>

                    <ul className="flex justify-center p-0 mt-[1.875rem] gap-3 text-[1.5em] md:mt-10 min-[360px]:gap-4 md:text-[1.25em] md:justify-start">
                      <li>
                        <Link
                          to={`#`}
                          className="rounded-full w-[2em] h-[2em] text-[#555F61] bg-[rgba(255,255,255,0.6)] transition duration-[0.25s] flex items-center justify-center hover:scale-[1.1125]"
                        >
                          <FontAwesomeIcon icon={faTwitter} />
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={`#`}
                          className="rounded-full w-[2em] h-[2em] text-[#555F61] bg-[rgba(255,255,255,0.6)] transition duration-[0.25s] flex items-center justify-center hover:scale-[1.1125]"
                        >
                          <FontAwesomeIcon icon={faGithub} />
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={`#`}
                          className="rounded-full w-[2em] h-[2em] text-[#555F61] bg-[rgba(255,255,255,0.6)] transition duration-[0.25s] flex items-center justify-center hover:scale-[1.1125]"
                        >
                          <FontAwesomeIcon icon={faLinkedinIn} />
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={`#`}
                          className="rounded-full w-[2em] h-[2em] text-[#555F61] bg-[rgba(255,255,255,0.6)] transition duration-[0.25s] flex items-center justify-center hover:scale-[1.1125]"
                        >
                          <FontAwesomeIcon icon={faEnvelope} />
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="w-full max-w-full pt-10 text-left md:pt-0 md:w-203-right md:pl-32">
                    <div className="border-t border-[rgba(69,69,69,0.122)] h-0 top-auto left-0 mt-203-divider w-full block absolute md:h-full md:top-0 md:w-0 md:left-auto md:ml-203-divider-md md:mt-0 md:border-t-0 border-l"></div>

                    <ul className="flex flex-col justify-center md:justify-start gap-[1.03125rem] min-[360px]:gap-[1.375rem]">
                      <li className="max-w-full">
                        <Link
                          to={`#`}
                          className="bg-[rgba(255,255,255,0.6)] text-[#555F61] w-full max-w-full tracking-[0] text-[1em] inline-flex h-[3.5rem] leading-[3.5rem] px-7 font-source-sans-pro font-light rounded-[2.5rem] flex-row-reverse justify-end transition duration-[0.25s] md:w-screen hover:bg-white hover:scale-[1.0425]"
                        >
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className="h-full w-[1.125em] ml-[0.5em]"
                          />

                          <span className="flex-1 w-full text-left">
                            Aliquam nullam
                          </span>
                        </Link>
                      </li>
                      <li className="max-w-full">
                        <Link
                          to={`#`}
                          className="bg-[rgba(255,255,255,0.6)] text-[#555F61] w-full max-w-full tracking-[0] text-[1em] inline-flex h-[3.5rem] leading-[3.5rem] px-7 font-source-sans-pro font-light rounded-[2.5rem] flex-row-reverse justify-end transition duration-[0.25s] md:w-screen hover:bg-white hover:scale-[1.0425]"
                        >
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className="h-full w-[1.125em] ml-[0.5em]"
                          />

                          <span className="flex-1 w-full text-left">
                            Sed etiam adipiscing
                          </span>
                        </Link>
                      </li>
                      <li className="max-w-full">
                        <Link
                          to={`#`}
                          className="bg-[rgba(255,255,255,0.6)] text-[#555F61] w-full max-w-full tracking-[0] text-[1em] inline-flex h-[3.5rem] leading-[3.5rem] px-7 font-source-sans-pro font-light rounded-[2.5rem] flex-row-reverse justify-end transition duration-[0.25s] md:w-screen hover:bg-white hover:scale-[1.0425]"
                        >
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className="h-full w-[1.125em] ml-[0.5em]"
                          />

                          <span className="flex-1 w-full text-left">
                            Gravida amet nisl
                          </span>
                        </Link>
                      </li>
                      <li className="max-w-full">
                        <Link
                          to={`#`}
                          className="bg-[rgba(255,255,255,0.6)] text-[#555F61] w-full max-w-full tracking-[0] text-[1em] inline-flex h-[3.5rem] leading-[3.5rem] px-7 font-source-sans-pro font-light rounded-[2.5rem] flex-row-reverse justify-end transition duration-[0.25s] md:w-screen hover:bg-white hover:scale-[1.0425]"
                        >
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className="h-full w-[1.125em] ml-[0.5em]"
                          />

                          <span className="flex-1 w-full text-left">
                            Consequat et feugiat
                          </span>
                        </Link>
                      </li>
                      <li className="max-w-full">
                        <Link
                          to={`#`}
                          className="bg-[rgba(255,255,255,0.6)] text-[#555F61] w-full max-w-full tracking-[0] text-[1em] inline-flex h-[3.5rem] leading-[3.5rem] px-7 font-source-sans-pro font-light rounded-[2.5rem] flex-row-reverse justify-end transition duration-[0.25s] md:w-screen hover:bg-white hover:scale-[1.0425]"
                        >
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className="h-full w-[1.125em] ml-[0.5em]"
                          />

                          <span className="flex-1 w-full text-left">
                            Nullam phasellus
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

export default Template203;
