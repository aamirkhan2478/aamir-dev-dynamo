import Image from "next/image";
import React from "react";
import iconExport from "@/public/Icon-Export.svg";
import iconGitHub from "@/public/Icon-GitHub.svg";
import { Close } from "@mui/icons-material";
import Loader from "./Loader";

const Modal = ({
  title,
  languages,
  img,
  desc,
  source,
  live,
  isSource,
  isLive,
  isOpen,
  setIsOpen,
  loading,
}) => {
  return (
    <div
      className={`modal-container ${
        isOpen ? "block" : "hidden"
      } fixed z-[1] left-0 top-0 h-screen w-full bg-[#00000080] overflow-auto lg:overflow-y-hidden lg:z-[23]`}
    >
      <div className='modal bg-white border border-solid border-[#dfe1e6] mt-[25%] mb-[25%] ml-auto mr-auto p-[20px] w-[352px] h-[789px] rounded-[10px] lg:mt-[10%] lg:mb-[10%] lg:ml-auto lg:mr-auto lg:w-[1000px] lg:h-[530px]'>
        {loading ? (
          <div className='flex justify-center items-center h-full'>
            <Loader />
          </div>
        ) : (
          <>
            <div className='modal-header flex justify-between mt-[5px]'>
              <h1 className='font-roboto not-italic font-bold text-[32px] leading-[44px] mt-[-12px] lg:font-crete lg:font-[400]'>
                {title}
              </h1>
              <Close
                onClick={() => setIsOpen(!isOpen)}
                className='w-[25px] h-[30px] text-[#67798e] hover:cursor-pointer hover:text-red-600'
              />
            </div>
            <ul className='modal-languages-list flex mt-[20px] mb-[10px]'>
              {languages?.map((language, index) => (
                <li
                  key={index}
                  className='font-inter not-italic font-[500] text-[15px] leading-[20px] text-blueColor border border-solid border-[#8993a4] mr-[5px] p-[5px]'
                >
                  {language.toUpperCase()}
                </li>
              ))}
            </ul>
            <div className='modal-content lg:flex'>
              <Image
                src={img}
                alt='modal image'
                className='w-[300px] h-[220px] lg:w-[503px] lg:h-[356px] lg:mt-[30px]'
                width={300}
                height={220}
              />
              <p className='title w-auto h-[126px] font-inter not-italic font-[400] text-[16px] leading-[24px] mt-[10px] lg:leading-[29px] lg:ml-[20px] lg:mt-[28px]'>
                {desc}
              </p>
            </div>
            <div className='buttons mt-[200px] flex w-[314px] lg:ml-[519px] lg:mb-[-18px] lg:relative lg:h-[59px] lg:bottom-[117px] lg:mt-[74px] lg:flex-none'>
              {isLive && (
                <a
                  href={live}
                  className='btn-primary m-[4px] lg:m-[3px] bg-orangeColor font-inter max-w-full font-bold text-[16px] leading-[24px] text-white border border-solid flex gap-3 border-orangeColor p-3 cursor-pointer transition-all ease-in-out mr-5 duration-[0.5s] hover:bg-[#fff5e1] hover:border hover:border-solid hover:border-orangeColor hover:text-orangeColor hover:rounded-full active:bg-orangeColor active:font-inter active:font-normal active:text-base active:text-orangeColor'
                  target='_blank'
                  rel='noreferrer'
                >
                  See Live
                  <span>
                    <Image
                      src={iconExport}
                      alt='live-icon'
                      className='icon-right bg-orangeColor rounded-[20px]'
                      height='18'
                    />
                  </span>
                </a>
              )}
              {isSource && (
                <a
                  href={source}
                  className='btn-primary m-[4px] lg:m-[3px] bg-orangeColor font-inter max-w-full font-bold text-base text-white border border-solid flex gap-3 border-orangeColor p-[12px] cursor-pointer transition-all ease-in-out mr-5 duration-[0.5s] hover:bg-[#fff5e1] hover:border hover:border-solid hover:border-orangeColor hover:text-orangeColor hover:rounded-full active:bg-orangeColor active:font-inter active:font-normal active:text-base active:text-orangeColor'
                  target='_blank'
                  rel='noreferrer'
                >
                  See Source
                  <span>
                    <Image
                      src={iconGitHub}
                      alt='live-icon'
                      className='icon-right bg-orangeColor rounded-[20px]'
                      height='18'
                    />
                  </span>
                </a>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Modal;
