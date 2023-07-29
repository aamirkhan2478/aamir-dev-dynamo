import Image from "next/image";
import React, { useState } from "react";
import profile from "@/public/Cardimage.png";
import Modal from "./Modal";

const Work = () => {
  const [isOpen, setIsOpen] = useState(false);
  const mainCardDetails = {
    title: "Degree Tracking System",
    desc: "Degree tracking system will allow the students to track their degree and check the status of their application of degree. This will facilitate both the students and the university administration. In past the process of applying and receiving the degree was manual. That takes lot of time and many students have to come to university again and again to check the status of their degree but this system will allow the students to check their degree status by sitting at home.",
    languages: ["MongoDB", "NodeJS", "ExpressJS", "ReactJS"],
    live: "https://fuudtvs.netlify.app/",
    source: "https://github.com/aamirkhan2478/fuudtvs.git",
  };

  const { title, desc, languages, live, source } = mainCardDetails;

  return (
    <>
      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        title={title}
        desc={desc}
        languages={languages}
        live={live}
        source={source}
        img={profile}
      />
      <section id='portfolio' className='work-section'>
        <div className='grid-items'>
          <h1 className='work-main-heading font-crete not-italic font-[400] text-[40px] leading-[52px] text-blackColor md:text-[30px] lg:text-[35px] lg:self-center'>
            My Recent Works
          </h1>
          <hr className='divider w-[327px] border border-solid border-[#212121]' />
          <div className='main-card flex flex-col mt-[-90px] md:justify-center md:items-center'>
            <Image
              src={profile}
              className='post-image w-[327px] h-[173px] mt-[140px] object-contain object-top md:mr-[20px] md:w-[390px] md:h-[207px] lg:w-[473px] lg:h-[467px]'
              alt='project-image'
            />
            <div className='main-card-content md:flex md:flex-col md:justify-center'>
              <h4 className='work-title-post font-crete not-italic font-[400] text-[32px] leading-[44px] max-w-[250px] text-blueColor min-w-[325px] mt-[24px] mb-[15px] md:text-[40px] md:leading-[52px]'>
                {title}
              </h4>
              <p className='work-supporting-text font-inter text-blueColor not-italic font-[400] text-[16px] leading-[24px] max-w-[322px] md:text-[20px] md:leading-[28px] md:max-w-[426px]'>
                {desc.slice(0, 100)} ...
              </p>
              <ul className='languages-list flex w-[322px] mt-[5px] mb-[10px] flex-wrap md:mt-[23px] md:mb-[24px]'>
                {languages.map((language) => (
                  <li
                    key={language}
                    className='font-inter not-italic font-[500] text-[15px] leading-[20px] text-blueColor border border-solid border-[#8993a4] mr-[5px] mt-[8px] p-[5px]'
                  >
                    {language}
                  </li>
                ))}
              </ul>
              <div className='btn-left'>
                <button
                  className='btn-primary btn bg-orangeColor font-inter w-32 font-normal text-base text-white border border-solid flex gap-3 border-orangeColor p-3 cursor-pointer transition-all ease-in-out mr-5 duration-[0.5s] hover:bg-[#fff5e1] hover:border hover:border-solid hover:border-orangeColor hover:text-orangeColor hover:rounded-full active:bg-orangeColor active:font-inter active:font-normal active:text-base active:text-orangeColor'
                  onClick={() => setIsOpen(!isOpen)}
                >
                  See Project
                </button>
              </div>
            </div>
          </div>
          <div className='card max-w-[324px] h-[386px] flex flex-col mt-[10px] mb-[20px] justify-center items-center relative overflow-hidden rounded-[10px] shadow-md md:max-w-[324px] md:hover:transition-all md:hover:ease-in-out md:hover:duration-[0.5s] md:hover:transform md:hover:translate-y-3'>
            <Image
              src={profile}
              alt='card image'
              className='w-full h-full object-cover absolute'
            />
            <div className='card-info relative bg-gradient-to-tr to-[#26262600] from-[#262626e6] top-0 h-full flex flex-col justify-end items-center'>
              <h1 className='card-heading font-crete text-white not-italic font-[400] text-[32px] leading-[44px] max-w-[285px] mb-[19px]'>
                {title}
              </h1>
              <p className='card-text font-inter not-italic font-[400] text-[16px] leading-[24px] max-w-[285px] text-white mb-[26px]'>
                {desc.slice(0, 100)} ...
              </p>
              <ul className='card-languages-list flex text-white w-[285px] mt-[5px] mb-[10px] flex-wrap'>
                {languages.map((language) => (
                  <li
                    key={language}
                    className='font-inter bg-[#ffffff3d] not-italic font-[500] text-[15px] leading-[20px] mr-[5px] mt-[8px] p-[5px]'
                  >
                    {language}
                  </li>
                ))}
              </ul>
              <button
                className='btn-block btn-primary btn-hidden rounded-tl-[50%] rounded-tr-[50%] bg-orangeColor font-inter w-[380px] h-[48px] font-normal text-base text-white border border-solid flex gap-3 p-3 cursor-pointer transition-all ease-in-out mr-5 
              justify-center
              duration-[0.5s] border-[#fff5e1] hover:border hover:border-solid  hover:rounded-full active:bg-orangeColor active:font-inter active:font-normal active:text-base active:text-orangeColor hover:bg-[#f7bd4a] hover:border-[#fff5e1] hover:text-white md:invisible md:h-0'
              >
                See Project
              </button>
            </div>
          </div>
          <div className='card max-w-[324px] h-[386px] flex flex-col mt-[10px] mb-[20px] justify-center items-center relative overflow-hidden rounded-[10px] shadow-md md:max-w-[324px] md:hover:transition-all md:hover:ease-in-out md:hover:duration-[0.5s] md:hover:transform md:hover:translate-y-3'>
            <Image
              src={profile}
              alt='card image'
              className='w-full h-full object-cover absolute'
            />
            <div className='card-info relative bg-gradient-to-tr to-[#26262600] from-[#262626e6] top-0 h-full flex flex-col justify-end items-center'>
              <h1 className='card-heading font-crete text-white not-italic font-[400] text-[32px] leading-[44px] max-w-[285px] mb-[19px]'>
                {title}
              </h1>
              <p className='card-text font-inter not-italic font-[400] text-[16px] leading-[24px] max-w-[285px] text-white mb-[26px]'>
                {desc.slice(0, 100)} ...
              </p>
              <ul className='card-languages-list flex text-white w-[285px] mt-[5px] mb-[10px] flex-wrap'>
                {languages.map((language) => (
                  <li
                    key={language}
                    className='font-inter bg-[#ffffff3d] not-italic font-[500] text-[15px] leading-[20px] mr-[5px] mt-[8px] p-[5px]'
                  >
                    {language}
                  </li>
                ))}
              </ul>
              <button
                className='btn-block btn-primary btn-hidden rounded-tl-[50%] rounded-tr-[50%] bg-orangeColor font-inter w-[380px] h-[48px] font-normal text-base text-white border border-solid flex gap-3 p-3 cursor-pointer transition-all ease-in-out mr-5 
              justify-center
              duration-[0.5s] border-[#fff5e1] hover:border hover:border-solid  hover:rounded-full active:bg-orangeColor active:font-inter active:font-normal active:text-base active:text-orangeColor hover:bg-[#f7bd4a] hover:border-[#fff5e1] hover:text-white md:invisible md:h-0'
              >
                See Project
              </button>
            </div>
          </div>
          <div className='card max-w-[324px] h-[386px] flex flex-col mt-[10px] mb-[20px] justify-center items-center relative overflow-hidden rounded-[10px] shadow-md md:max-w-[324px] md:hover:transition-all md:hover:ease-in-out md:hover:duration-[0.5s] md:hover:transform md:hover:translate-y-3'>
            <Image
              src={profile}
              alt='card image'
              className='w-full h-full object-cover absolute'
            />
            <div className='card-info relative bg-gradient-to-tr to-[#26262600] from-[#262626e6] top-0 h-full flex flex-col justify-end items-center'>
              <h1 className='card-heading font-crete text-white not-italic font-[400] text-[32px] leading-[44px] max-w-[285px] mb-[19px]'>
                {title}
              </h1>
              <p className='card-text font-inter not-italic font-[400] text-[16px] leading-[24px] max-w-[285px] text-white mb-[26px]'>
                {desc.slice(0, 100)} ...
              </p>
              <ul className='card-languages-list flex text-white w-[285px] mt-[5px] mb-[10px] flex-wrap'>
                {languages.map((language) => (
                  <li
                    key={language}
                    className='font-inter bg-[#ffffff3d] not-italic font-[500] text-[15px] leading-[20px] mr-[5px] mt-[8px] p-[5px]'
                  >
                    {language}
                  </li>
                ))}
              </ul>
              <button
                className='btn-block btn-primary btn-hidden rounded-tl-[50%] rounded-tr-[50%] bg-orangeColor font-inter w-[380px] h-[48px] font-normal text-base text-white border border-solid flex gap-3 p-3 cursor-pointer transition-all ease-in-out mr-5 
              justify-center
              duration-[0.5s] border-[#fff5e1] hover:border hover:border-solid  hover:rounded-full active:bg-orangeColor active:font-inter active:font-normal active:text-base active:text-orangeColor hover:bg-[#f7bd4a] hover:border-[#fff5e1] hover:text-white md:invisible md:h-0'
              >
                See Project
              </button>
            </div>
          </div>
          <div className='card max-w-[324px] h-[386px] flex flex-col mt-[10px] mb-[20px] justify-center items-center relative overflow-hidden rounded-[10px] shadow-md md:max-w-[324px] md:hover:transition-all md:hover:ease-in-out md:hover:duration-[0.5s] md:hover:transform md:hover:translate-y-3'>
            <Image
              src={profile}
              alt='card image'
              className='w-full h-full object-cover absolute'
            />
            <div className='card-info relative bg-gradient-to-tr to-[#26262600] from-[#262626e6] top-0 h-full flex flex-col justify-end items-center'>
              <h1 className='card-heading font-crete text-white not-italic font-[400] text-[32px] leading-[44px] max-w-[285px] mb-[19px]'>
                {title}
              </h1>
              <p className='card-text font-inter not-italic font-[400] text-[16px] leading-[24px] max-w-[285px] text-white mb-[26px]'>
                {desc.slice(0, 100)} ...
              </p>
              <ul className='card-languages-list flex text-white w-[285px] mt-[5px] mb-[10px] flex-wrap'>
                {languages.map((language) => (
                  <li
                    key={language}
                    className='font-inter bg-[#ffffff3d] not-italic font-[500] text-[15px] leading-[20px] mr-[5px] mt-[8px] p-[5px]'
                  >
                    {language}
                  </li>
                ))}
              </ul>
              <button
                className='btn-block btn-primary btn-hidden rounded-tl-[50%] rounded-tr-[50%] bg-orangeColor font-inter w-[380px] h-[48px] font-normal text-base text-white border border-solid flex gap-3 p-3 cursor-pointer transition-all ease-in-out mr-5 
              justify-center
              duration-[0.5s] border-[#fff5e1] hover:border hover:border-solid  hover:rounded-full active:bg-orangeColor active:font-inter active:font-normal active:text-base active:text-orangeColor hover:bg-[#f7bd4a] hover:border-[#fff5e1] hover:text-white md:invisible md:h-0'
              >
                See Project
              </button>
            </div>
          </div>
          <div className='card max-w-[324px] h-[386px] flex flex-col mt-[10px] mb-[20px] justify-center items-center relative overflow-hidden rounded-[10px] shadow-md md:max-w-[324px] md:hover:transition-all md:hover:ease-in-out md:hover:duration-[0.5s] md:hover:transform md:hover:translate-y-3'>
            <Image
              src={profile}
              alt='card image'
              className='w-full h-full object-cover absolute'
            />
            <div className='card-info relative bg-gradient-to-tr to-[#26262600] from-[#262626e6] top-0 h-full flex flex-col justify-end items-center'>
              <h1 className='card-heading font-crete text-white not-italic font-[400] text-[32px] leading-[44px] max-w-[285px] mb-[19px]'>
                {title}
              </h1>
              <p className='card-text font-inter not-italic font-[400] text-[16px] leading-[24px] max-w-[285px] text-white mb-[26px]'>
                {desc.slice(0, 100)} ...
              </p>
              <ul className='card-languages-list flex text-white w-[285px] mt-[5px] mb-[10px] flex-wrap'>
                {languages.map((language) => (
                  <li
                    key={language}
                    className='font-inter bg-[#ffffff3d] not-italic font-[500] text-[15px] leading-[20px] mr-[5px] mt-[8px] p-[5px]'
                  >
                    {language}
                  </li>
                ))}
              </ul>
              <button
                className='btn-block btn-primary btn-hidden rounded-tl-[50%] rounded-tr-[50%] bg-orangeColor font-inter w-[380px] h-[48px] font-normal text-base text-white border border-solid flex gap-3 p-3 cursor-pointer transition-all ease-in-out mr-5 
              justify-center
              duration-[0.5s] border-[#fff5e1] hover:border hover:border-solid  hover:rounded-full active:bg-orangeColor active:font-inter active:font-normal active:text-base active:text-orangeColor hover:bg-[#f7bd4a] hover:border-[#fff5e1] hover:text-white md:invisible md:h-0'
              >
                See Project
              </button>
            </div>
          </div>
          <div className='card max-w-[324px] h-[386px] flex flex-col mt-[10px] mb-[20px] justify-center items-center relative overflow-hidden rounded-[10px] shadow-md md:max-w-[324px] md:hover:transition-all md:hover:ease-in-out md:hover:duration-[0.5s] md:hover:transform md:hover:translate-y-3'>
            <Image
              src={profile}
              alt='card image'
              className='w-full h-full object-cover absolute'
            />
            <div className='card-info relative bg-gradient-to-tr to-[#26262600] from-[#262626e6] top-0 h-full flex flex-col justify-end items-center'>
              <h1 className='card-heading font-crete text-white not-italic font-[400] text-[32px] leading-[44px] max-w-[285px] mb-[19px]'>
                {title}
              </h1>
              <p className='card-text font-inter not-italic font-[400] text-[16px] leading-[24px] max-w-[285px] text-white mb-[26px]'>
                {desc.slice(0, 100)} ...
              </p>
              <ul className='card-languages-list flex text-white w-[285px] mt-[5px] mb-[10px] flex-wrap'>
                {languages.map((language) => (
                  <li
                    key={language}
                    className='font-inter bg-[#ffffff3d] not-italic font-[500] text-[15px] leading-[20px] mr-[5px] mt-[8px] p-[5px]'
                  >
                    {language}
                  </li>
                ))}
              </ul>
              <button
                className='btn-block btn-primary btn-hidden rounded-tl-[50%] rounded-tr-[50%] bg-orangeColor font-inter w-[380px] h-[48px] font-normal text-base text-white border border-solid flex gap-3 p-3 cursor-pointer transition-all ease-in-out mr-5 
              justify-center
              duration-[0.5s] border-[#fff5e1] hover:border hover:border-solid  hover:rounded-full active:bg-orangeColor active:font-inter active:font-normal active:text-base active:text-orangeColor hover:bg-[#f7bd4a] hover:border-[#fff5e1] hover:text-white md:invisible md:h-0'
              >
                See Project
              </button>
            </div>
          </div>
          <div className='card max-w-[324px] h-[386px] flex flex-col mt-[10px] mb-[20px] justify-center items-center relative overflow-hidden rounded-[10px] shadow-md md:max-w-[324px] md:hover:transition-all md:hover:ease-in-out md:hover:duration-[0.5s] md:hover:transform md:hover:translate-y-3'>
            <Image
              src={profile}
              alt='card image'
              className='w-full h-full object-cover absolute'
            />
            <div className='card-info relative bg-gradient-to-tr to-[#26262600] from-[#262626e6] top-0 h-full flex flex-col justify-end items-center'>
              <h1 className='card-heading font-crete text-white not-italic font-[400] text-[32px] leading-[44px] max-w-[285px] mb-[19px]'>
                {title}
              </h1>
              <p className='card-text font-inter not-italic font-[400] text-[16px] leading-[24px] max-w-[285px] text-white mb-[26px]'>
                {desc.slice(0, 100)} ...
              </p>
              <ul className='card-languages-list flex text-white w-[285px] mt-[5px] mb-[10px] flex-wrap'>
                {languages.map((language) => (
                  <li
                    key={language}
                    className='font-inter bg-[#ffffff3d] not-italic font-[500] text-[15px] leading-[20px] mr-[5px] mt-[8px] p-[5px]'
                  >
                    {language}
                  </li>
                ))}
              </ul>
              <button
                className='btn-block btn-primary btn-hidden rounded-tl-[50%] rounded-tr-[50%] bg-orangeColor font-inter w-[380px] h-[48px] font-normal text-base text-white border border-solid flex gap-3 p-3 cursor-pointer transition-all ease-in-out mr-5 
              justify-center
              duration-[0.5s] border-[#fff5e1] hover:border hover:border-solid  hover:rounded-full active:bg-orangeColor active:font-inter active:font-normal active:text-base active:text-orangeColor hover:bg-[#f7bd4a] hover:border-[#fff5e1] hover:text-white md:invisible md:h-0'
              >
                See Project
              </button>
            </div>
          </div>
          <div className='card max-w-[324px] h-[386px] flex flex-col mt-[10px] mb-[20px] justify-center items-center relative overflow-hidden rounded-[10px] shadow-md md:max-w-[324px] md:hover:transition-all md:hover:ease-in-out md:hover:duration-[0.5s] md:hover:transform md:hover:translate-y-3'>
            <Image
              src={profile}
              alt='card image'
              className='w-full h-full object-cover absolute'
            />
            <div className='card-info relative bg-gradient-to-tr to-[#26262600] from-[#262626e6] top-0 h-full flex flex-col justify-end items-center'>
              <h1 className='card-heading font-crete text-white not-italic font-[400] text-[32px] leading-[44px] max-w-[285px] mb-[19px]'>
                {title}
              </h1>
              <p className='card-text font-inter not-italic font-[400] text-[16px] leading-[24px] max-w-[285px] text-white mb-[26px]'>
                {desc.slice(0, 100)} ...
              </p>
              <ul className='card-languages-list flex text-white w-[285px] mt-[5px] mb-[10px] flex-wrap'>
                {languages.map((language) => (
                  <li
                    key={language}
                    className='font-inter bg-[#ffffff3d] not-italic font-[500] text-[15px] leading-[20px] mr-[5px] mt-[8px] p-[5px]'
                  >
                    {language}
                  </li>
                ))}
              </ul>
              <button
                className='btn-block btn-primary btn-hidden rounded-tl-[50%] rounded-tr-[50%] bg-orangeColor font-inter w-[380px] h-[48px] font-normal text-base text-white border border-solid flex gap-3 p-3 cursor-pointer transition-all ease-in-out mr-5 
              justify-center
              duration-[0.5s] border-[#fff5e1] hover:border hover:border-solid  hover:rounded-full active:bg-orangeColor active:font-inter active:font-normal active:text-base active:text-orangeColor hover:bg-[#f7bd4a] hover:border-[#fff5e1] hover:text-white md:invisible md:h-0'
              >
                See Project
              </button>
            </div>
          </div>
          <div className='card max-w-[324px] h-[386px] flex flex-col mt-[10px] mb-[20px] justify-center items-center relative overflow-hidden rounded-[10px] shadow-md md:max-w-[324px] md:hover:transition-all md:hover:ease-in-out md:hover:duration-[0.5s] md:hover:transform md:hover:translate-y-3'>
            <Image
              src={profile}
              alt='card image'
              className='w-full h-full object-cover absolute'
            />
            <div className='card-info relative bg-gradient-to-tr to-[#26262600] from-[#262626e6] top-0 h-full flex flex-col justify-end items-center'>
              <h1 className='card-heading font-crete text-white not-italic font-[400] text-[32px] leading-[44px] max-w-[285px] mb-[19px]'>
                {title}
              </h1>
              <p className='card-text font-inter not-italic font-[400] text-[16px] leading-[24px] max-w-[285px] text-white mb-[26px]'>
                {desc.slice(0, 100)} ...
              </p>
              <ul className='card-languages-list flex text-white w-[285px] mt-[5px] mb-[10px] flex-wrap'>
                {languages.map((language) => (
                  <li
                    key={language}
                    className='font-inter bg-[#ffffff3d] not-italic font-[500] text-[15px] leading-[20px] mr-[5px] mt-[8px] p-[5px]'
                  >
                    {language}
                  </li>
                ))}
              </ul>
              <button
                className='btn-block btn-primary btn-hidden rounded-tl-[50%] rounded-tr-[50%] bg-orangeColor font-inter w-[380px] h-[48px] font-normal text-base text-white border border-solid flex gap-3 p-3 cursor-pointer transition-all ease-in-out mr-5 
              justify-center
              duration-[0.5s] border-[#fff5e1] hover:border hover:border-solid  hover:rounded-full active:bg-orangeColor active:font-inter active:font-normal active:text-base active:text-orangeColor hover:bg-[#f7bd4a] hover:border-[#fff5e1] hover:text-white md:invisible md:h-0'
              >
                See Project
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Work;
