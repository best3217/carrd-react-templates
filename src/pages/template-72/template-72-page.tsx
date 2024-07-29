import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faTwitter, faUnsplash, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Template72Page = () => {
  return (
    <div className="min-w-[320px] overflow-x-hidden font-arial">
      <div className="w-screen h-screen fixed top-0 z-0 transform scale-100 bg-72-main bg-center bg-72-main-size"></div>

      <div className="items-center flex flex-col justify-center overflow-hidden relative p-6 min-h-screen z-[2]">
        <div className="main flex items-center justify-center relative text-center z-1 bg-white rounded-lg max-w-full">
          <div className="inner w-[24rem] rounded-lg py-12 px-8 max-w-full md:px-10">
            <h1 className="text-[3em] font-bold leading-[1.25] text-[#363636] mb-3 tracking-[-0.125rem] md:text-[3.25em]">
              Jane D.
            </h1>

            <p className="my-3 text-[#363636] text-[1em] leading-[1.75]">
              Professional Image Capturer
            </p>

            <div className="my-9 -mx-8 md:-mx-10 md:my-12">
              <div className="h-[17.5rem] sm:h-[21.875rem] md:h-[22.375rem]">
                <img
                  src="https://res.cloudinary.com/ddefgw6lg/image/upload/v1722243750/image01_2_gb4ucv.jpg"
                  alt="image01"
                  className="object-cover h-full object-center w-full"
                />
              </div>
            </div>

            <ul className="mb-0 mt-4.5 text-[1em] flex flex-wrap justify-center gap-3 p-0">
              <Link
                to="#"
                className="w-[2em] h-[2em] rounded-full bg-[#363636] flex items-center justify-center text-white duration-[250ms] hover:bg-[#606C82]"
                aria-label="Twitter"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </Link>
              <Link
                to="#"
                className="w-[2em] h-[2em] rounded-full bg-[#363636] flex items-center justify-center text-white duration-[250ms] hover:bg-[#606C82]"
                aria-label="Instagram"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </Link>
              <Link
                to="#"
                className="w-[2em] h-[2em] rounded-full bg-[#363636] flex items-center justify-center text-white duration-[250ms] hover:bg-[#606C82]"
                aria-label="Unsplash"
              >
                <FontAwesomeIcon icon={faUnsplash} />
              </Link>
              <Link
                to="#"
                className="w-[2em] h-[2em] rounded-full bg-[#363636] flex items-center justify-center text-white duration-[250ms] hover:bg-[#606C82]"
                aria-label="Email"
              >
                <FontAwesomeIcon icon={faEnvelope} />
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template72Page;
