import {
  faDiscord,
  faInstagram,
  faSnapchat,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Template104Page = () => {
  return (
    <div className="min-w-[320px] overflow-x-hidden font-inter text-white">
      <div className="bg-[#221E3F] w-screen h-screen fixed top-0 z-0 transform scale-100 bg-main-104 bg-main-size-104 bg-main-position-104"></div>

      <div className="items-center flex flex-col justify-center overflow-hidden relative min-h-screen z-[2]">
        <div className="relative flex items-center justify-center max-w-full text-center main z-1">
          <div className="inner w-[30rem] py-12 px-6 max-w-full md:px-8 md:py-16">
            <div className="mt-0 mb-[2.625rem] sm:mb-12">
              <div className="w-[11rem] rounded-full border-[13px] border-[rgba(255,255,255,0.059)] overflow-hidden mx-auto mb-12">
                <img
                  src="/assets/template-104/profile.jpg"
                  alt=""
                  className="max-w-full width-inherit"
                />
              </div>
            </div>

            <div className="my-[2.625rem] flex items-center justify-center relative sm:my-12">
              <div>
                <div>
                  <h1 className="mb-[1.09375rem] sm:mb-[1.25rem] font-karla text-[3rem] md:text-[3.5em] tracking-[-0.065625rem] sm:tracking-[-0.075rem] leading-[1] w-full font-bold">
                    Hi, I'm Molly
                  </h1>

                  <p className="mb-0 mt-[1.09375rem] sm:mt-[1.25rem] tracking-[0.021875rem] md:tracking-[0.025rem] text-[1em] leading-[1.875] font-extralight">
                    Ultricies <strong>tristique nulla</strong> aliquet enim
                    tortor at auctor. Neque gravida in fermentum et
                    sollicitudin.
                  </p>
                </div>
              </div>
            </div>

            <div className="my-[1.125rem] flex w-full items-center justify-center border border-[rgba(255,255,255,0.271)] rounded-[3rem] md:my-6">
              <div className="max-w-[70rem] w-full">
                <div className="flex-wrap flex items-center py-4 px-8 md:py-[1.75rem] md:px-10 rounded-[3rem]">
                  <div className="flex-1 pl-16 -ml-16 w-104-social-item-text">
                    <p className="text-[1em] leading-[1.625] font-light text-left">
                      Lacus turpis ipsum
                    </p>
                  </div>

                  <div className="relative flex gap-8 w-104-social-item-icon">
                    <div className="absolute h-full ml-8">
                      <div className="h-full w-[1px] bg-[rgba(255,255,255,0.271)]"></div>
                    </div>
                    <ul className="flex flex-wrap justify-center p-0 text-[1.375rem] w-full gap-0 pl-16">
                      <li>
                        <Link
                          to="#"
                          aria-label="Instagram"
                          className="flex items-center justify-center bg-[#FF059B] bg-gradient-instagram w-[2em] h-[2em] transition duration-[125ms] bg-cover rounded-full hover:scale-[1.2]"
                        >
                          <FontAwesomeIcon icon={faInstagram} />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="my-[1.125rem] flex w-full items-center justify-center border border-[rgba(255,255,255,0.271)] rounded-[3rem] md:my-6">
              <div className="max-w-[70rem] w-full">
                <div className="flex-wrap flex items-center py-4 px-8 md:py-[1.75rem] md:px-10 rounded-[3rem]">
                  <div className="flex-1 pl-16 -ml-16 w-104-social-item-text">
                    <p className="text-[1em] leading-[1.625] font-light text-left">
                      Dignissim sed lorem
                    </p>
                  </div>

                  <div className="relative flex gap-8 w-104-social-item-icon">
                    <div className="absolute h-full ml-8">
                      <div className="h-full w-[1px] bg-[rgba(255,255,255,0.271)]"></div>
                    </div>
                    <ul className="flex flex-wrap justify-center p-0 text-[1.375rem] w-full gap-0 pl-16">
                      <li>
                        <Link
                          to="#"
                          aria-label="Instagram"
                          className="flex items-center justify-center bg-[#AFFF05] bg-gradient-snapchat w-[2em] h-[2em] transition duration-[125ms] bg-cover rounded-full hover:scale-[1.2]"
                        >
                          <FontAwesomeIcon icon={faSnapchat} />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="my-[1.125rem] flex w-full items-center justify-center border border-[rgba(255,255,255,0.271)] rounded-[3rem] md:my-6">
              <div className="max-w-[70rem] w-full">
                <div className="flex-wrap flex items-center py-4 px-8 md:py-[1.75rem] md:px-10 rounded-[3rem]">
                  <div className="flex-1 pl-16 -ml-16 w-104-social-item-text">
                    <p className="text-[1em] leading-[1.625] font-light text-left">
                      Velit amet tempus
                    </p>
                  </div>

                  <div className="relative flex gap-8 w-104-social-item-icon">
                    <div className="absolute h-full ml-8">
                      <div className="h-full w-[1px] bg-[rgba(255,255,255,0.271)]"></div>
                    </div>
                    <ul className="flex flex-wrap justify-center p-0 text-[1.375rem] w-full gap-0 pl-16">
                      <li>
                        <Link
                          to="#"
                          aria-label="twitter"
                          className="flex items-center justify-center bg-[#05A5FF] bg-gradient-twitter w-[2em] h-[2em] transition duration-[125ms] bg-cover rounded-full hover:scale-[1.2]"
                        >
                          <FontAwesomeIcon icon={faTwitter} />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <ul className="flex flex-wrap justify-center p-0 text-[1.5em] gap-[1rem] mt-[2.625rem] md:mt-14">
              <li>
                <Link
                  to="#"
                  aria-label="Whatsapp"
                  className="flex items-center justify-center w-[2em] h-[2em] transition duration-[125ms] rounded-full hover:scale-[1.2] border border-[rgba(255,255,255,0.271)]"
                >
                  <FontAwesomeIcon icon={faWhatsapp} />
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  aria-label="discrod"
                  className="flex items-center justify-center w-[2em] h-[2em] transition duration-[125ms] rounded-full hover:scale-[1.2] border border-[rgba(255,255,255,0.271)]"
                >
                  <FontAwesomeIcon icon={faDiscord} />
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  aria-label="email"
                  className="flex items-center justify-center w-[2em] h-[2em] transition duration-[125ms] rounded-full hover:scale-[1.2] border border-[rgba(255,255,255,0.271)]"
                >
                  <FontAwesomeIcon icon={faEnvelope} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template104Page;
