import {
  faDiscord,
  faLinkedinIn,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Template230Page = () => {
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
                    font-size: 12pt;
                }
            }
            @media (min-width: 1680px) {
                html {
                    font-size: 17pt;
                }
            }
        `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="min-w-[320px] overflow-x-hidden tex-white bg-[#101015] min-h-screen leading-[1]">
      <div className="fixed left-0 right-0 z-0 w-screen h-screen bg-center bg-230-main-size bg-main-230"></div>
      <div className="min-h-screen overflow-hidden relative z-[2] flex flex-col justify-center">
        <div className="flex items-center justify-center max-w-full z-[1] backdrop-blur-[0.15rem">
          <div className="inner relative max-w-full w-[56rem] p-3 min-[360px]:p-4 md:p-12">
            <div className="flex w-full items-center justify-center bg-cover backdrop-blur-[0.15rem] rounded-[2.25rem] bg-230-inner-box bg-position-230-inner-box">
              <div className="w-full max-w-[56rem]">
                <div className="inner flex items-center flex-col rounded-[2.25rem] p-6 min-[360px]:p-8 md:p-12 md:flex-row">
                  <div className="w-full pb-4 md:pb-0 md:-ml-8 md:pl-8 md:w-230-left">
                    {/* profile image */}
                    <div className="mb-[1.3125rem] md:mb-7">
                      <div className="w-24 overflow-hidden rounded-full">
                        <img src="/assets/template-230/profile.jpg" alt="" />
                      </div>
                    </div>
                    {/*  */}

                    <p className="text-[0.75em] tracking-[0.2625rem] w-230-subtitle uppercase text-[rgba(255,255,255,0.412)] leading-[1.5] font-inter font-light my-[0.9375rem] min-[360px]:my-[1.09375rem] min-[480px]:my-5 md:tracking-[0.3rem] md:w-w-230-subtitle-md">
                      Aliquam lorem
                    </p>

                    <h1 className="text-white text-[2.5em] font-inter font-light leading-[1.125] my-[0.9375rem] min-[360px]:my-[1.09375rem] min-[480px]:my-5 md:text-[2.875em]">
                      Molly Pollard
                    </h1>

                    <p className="text-[rgba(255,255,255,0.62)] font-inter text-[1em] font-light leading-[1.75]  mt-[0.9375rem] min-[360px]:mt-[1.09375rem] min-[480px]:mt-5">
                      Scelerisque mollis iaculis commodo dolor vis metus
                      vestibulum eget. Sapien dui diam vitae.
                    </p>
                  </div>

                  <div className="flex w-full pt-4 md:w-230-right md:pt-0 md:pl-8">
                    <ul className="flex flex-col justify-end w-full gap-[0.9375rem] min-[360px]:gap-5">
                      <li className="text-right">
                        <Link
                          to={`#`}
                          className="bg-[#3EBAE6] text-[#01477D] bg-230-linkedin bg-position-0-0 bg-cover transition h-[3.5rem] leading-[3.5rem] px-[1.75rem] font-inter rounded-[1.75rem] flex flex-row-reverse justify-end items-center duration-[0.25s] max-w-full text-[1em] w-full min-[480px]:w-screen hover:scale-[1.0425]"
                        >
                          <FontAwesomeIcon
                            icon={faLinkedinIn}
                            className="text-[#01477D] w-[1.625em] ml-[0.5em] transition duration-[0.25s] h-full max-h-[1.3rem] min-w-4 mr-230-social-icon"
                          />
                          <div className="flex-1 text-[#01477D] text-left">
                            Gravida posuere
                          </div>
                        </Link>
                      </li>
                      <li className="text-right">
                        <Link
                          to={`#`}
                          className="bg-[#5A64F7] text-[#282F7D] bg-230-discord bg-position-0-0 bg-cover transition h-[3.5rem] leading-[3.5rem] px-[1.75rem] font-inter rounded-[1.75rem] flex flex-row-reverse justify-end items-center duration-[0.25s] max-w-full text-[1em] w-full min-[480px]:w-screen hover:scale-[1.0425]"
                        >
                          <FontAwesomeIcon
                            icon={faDiscord}
                            className="text-[#282F7D] w-[1.625em] ml-[0.5em] transition duration-[0.25s] h-full min-w-4 mr-230-social-icon"
                          />
                          <div className="flex-1 text-[#282F7D] text-left">
                            Mattis urna amet
                          </div>
                        </Link>
                      </li>
                      <li className="text-right">
                        <Link
                          to={`#`}
                          className="bg-[#FA2941] text-[#850516] bg-230-youtube bg-position-0-0 bg-cover transition h-[3.5rem] leading-[3.5rem] px-[1.75rem] font-inter rounded-[1.75rem] flex flex-row-reverse justify-end items-center duration-[0.25s] max-w-full text-[1em] w-full min-[480px]:w-screen hover:scale-[1.0425]"
                        >
                          <FontAwesomeIcon
                            icon={faYoutube}
                            className="text-[#850516] w-[1.625em] ml-[0.5em] transition duration-[0.25s] h-full min-w-4 mr-230-social-icon"
                          />
                          <div className="flex-1 text-[#850516] text-left">
                            Arcu lorem
                          </div>
                        </Link>
                      </li>
                      <li className="text-right">
                        <Link
                          to={`#`}
                          className="bg-[rgba(51,51,64,0.478)] text-[#FFFFFF] bg-230-twitter bg-position-0-0 bg-cover transition h-[3.5rem] leading-[3.5rem] px-[1.75rem] font-inter rounded-[1.75rem] flex flex-row-reverse justify-end items-center duration-[0.25s] max-w-full text-[1em] w-full min-[480px]:w-screen hover:scale-[1.0425]"
                        >
                          <FontAwesomeIcon
                            icon={faXTwitter}
                            className="text-[#FFFFFF] w-[1.625em] ml-[0.5em] transition duration-[0.25s] h-full min-w-4 mr-230-social-icon"
                          />
                          <div className="flex-1 text-[#FFFFFF] text-left">
                            Laoreet valupat
                          </div>
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

export default Template230Page;
