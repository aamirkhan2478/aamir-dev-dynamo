import Image from "next/image";
import React, { useState } from "react";
import iconExport from "@/public/Icon-Export.svg";
import iconGitHub from "@/public/Icon-GitHub.svg";
import { Close } from "@mui/icons-material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import Loader from "./Loader";

const Modal = ({
  title,
  languages,
  pics,
  desc,
  source,
  live,
  isSource,
  isLive,
  isOpen,
  setIsOpen,
  loading,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? pics.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === pics.length - 1 ? 0 : prev + 1));
  };

  return (
    <div
      className={`fixed inset-0 z-[100] bg-[#00000080] overflow-auto ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <div className="bg-white border border-solid border-[#dfe1e6] mx-auto my-8 p-5 w-[90%] max-w-[352px] rounded-[10px] lg:my-[5%] lg:max-w-[1000px] lg:p-8">
        {loading ? (
          <div className="flex justify-center items-center h-full">
            <Loader />
          </div>
        ) : (
          <>
            {/* HEADER */}
            <div className="flex justify-between items-start mb-4">
              <h1 className="font-crete text-2xl font-normal lg:text-3xl">
                {title}
              </h1>
              <button
                onClick={() => setIsOpen(false)}
                className="text-[#67798e] hover:text-red-600"
              >
                <Close className="w-6 h-6" />
              </button>
            </div>

            {/* LANGUAGES */}
            <ul className="flex flex-wrap gap-2 mb-4">
              {languages?.map((language, index) => (
                <li
                  key={index}
                  className="font-inter text-xs font-medium text-blueColor border border-solid border-[#8993a4] px-2 py-1"
                >
                  {language.toUpperCase()}
                </li>
              ))}
            </ul>

            {/* CONTENT */}
            <div className="lg:flex lg:gap-8">
              {/* CAROUSEL */}
              <div className="relative w-full aspect-video max-h-[220px] lg:max-w-[503px] lg:max-h-[356px] lg:flex-1">
                {pics?.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-2 top-1/2 -translate-y-1/2 bg-blackColor/50 text-white p-1 rounded-full hover:bg-blackColor z-10"
                    >
                      <ChevronLeft fontSize="medium" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-blackColor/50 text-white p-1 rounded-full hover:bg-blackColor z-10"
                    >
                      <ChevronRight fontSize="medium" />
                    </button>
                  </>
                )}
                <div className="relative w-full h-full rounded-lg overflow-hidden">
                  <Image
                    src={pics?.[currentIndex]}
                    alt="modal image"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              {/* DESCRIPTION */}
              <div className="mt-4 lg:mt-0 lg:flex-1">
                <p className="font-inter text-base leading-6 lg:text-lg lg:leading-7">
                  {desc}
                </p>

                {/* BUTTONS */}
                <div className="mt-6 flex flex-wrap gap-2 lg:mt-8">
                  {isLive && (
                    <a
                      href={live}
                      className="btn-primary flex items-center gap-2 bg-orangeColor font-inter font-bold text-base text-white border border-orangeColor px-4 py-2 hover:bg-[#fff5e1] hover:text-orangeColor hover:rounded-full transition"
                      target="_blank"
                      rel="noreferrer"
                    >
                      See Live
                      <Image
                        src={iconExport}
                        alt="live-icon"
                        width={18}
                        height={18}
                      />
                    </a>
                  )}
                  {isSource && (
                    <a
                      href={source}
                      className="btn-primary flex items-center gap-2 bg-orangeColor font-inter font-bold text-base text-white border border-orangeColor px-4 py-2 hover:bg-[#fff5e1] hover:text-orangeColor hover:rounded-full transition"
                      target="_blank"
                      rel="noreferrer"
                    >
                      See Source
                      <Image
                        src={iconGitHub}
                        alt="github-icon"
                        width={18}
                        height={18}
                      />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Modal;
