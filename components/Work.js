import Image from "next/image";
import React, { useState } from "react";
import profile from "@/public/Cardimage.png";

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
      <section id='portfolio'>
        <div className='mx-10'>
          <div className='flex flex-col justify-center items-center md:flex-row md:gap-5'>
            <h2 className='not-italic font-bold font-crete text-[35px] leading-[52px] text-blackColor md:text-[30px] lg:text-[35px] lg:my-9'>
              My Recent Works
            </h2>
            <div className='border border-[#212121] w-[280px] border-solid md:w-[400px] lg:w-[632px]' />
          </div>
          <div
            className='main-card flex flex-col justify-center items-center md:flex-row md:justify-center md:items-start lg:h-[525px]'
            id='main'
          >
            <Image
              src={profile}
              className='post-image w-72 h-44 mt-4 mb-5 object-contain object-top md:mr-5 md:w-[400px] md:h-[400px] md:mt-[110px] lg:w-[680px] lg:h-[550px] lg:object-contain lg:mt-[106px]'
              alt='project-image'
            />
            <div className='main-card-content ml-1 md:flex md:flex-col md:h-[100px] md:justify-center md:mt-[190px] lg:items-center lg:ml-1'>
              <h4 className='work-title-post font-crete not-italic font-[600] text-[35px] leading-[44px] max-w-[250px] text-blueColor min-w-[325px] mb-4 md:text-[30px] md:leading-[52px]'>
                {title}
              </h4>
              <p className='work-supporting-text font-inter text-blueColor not-italic font-[400] text-base max-w-[322px] md:text-xl md:mx-w-[426px]'>
                {desc.slice(0, 100)} ...
              </p>
              <ul className='languages-list flex w-80 mb-3 flex-wrap md:my-6'>
                {languages.map((language) => (
                  <li
                    key={language}
                    className='font-inter not-italic font-[500] text-sm text-blueColor border border-solid border-[#8993a4] mr-1 mt-2 p-1'
                  >
                    {language}
                  </li>
                ))}
              </ul>
              <div className='btn-left lg:self-start'>
                <button
                  className='bg-orangeColor font-inter w-32 font-normal text-base text-white border border-solid flex gap-3 border-orangeColor p-3 cursor-pointer transition-all ease-in-out mr-5 duration-[0.5s] hover:bg-[#fff5e1] hover:border hover:border-solid hover:border-orangeColor hover:text-orangeColor hover:rounded-full active:bg-orangeColor active:font-inter active:font-normal active:text-base active:text-orangeColor '
                  onClick={() => setIsOpen(!isOpen)}
                >
                  See Project
                </button>
              </div>
            </div>
          </div>

          <div
            className='flex flex-col justify-center items-center md:flex-row md:flex-wrap md:gap-5 md:flex'
          >
            <div class='card max-w-[324px] h-[385px] mt-[10px] mb-5 relative overflow-hidden rounded-xl shadow-md shadow-[#00000033] md:h-[386px] md:hover:transition-all md:hover:ease-in-out md:hover:duration-[0.5s] md:hover:transform md:hover:translate-y-3'>
              <Image
                src={profile}
                alt='card image'
                className='w-full h-full object-cover absolute'
              />
              <div class='card-info relative top-0 h-full flex flex-col justify-end items-center bg-gradient-to-tr to-[#26262600] from-[#262626e6] md:hover:invisible'>
                <h1 class='card-heading font-crete text-white not-italic font-[400] text-[32px] leading-[44px] max-w-[285px] mb-5'>
                  {title}
                </h1>
                <p class='card-text font-inter not-italic font-[400] text-base max-w-[285px] text-white mb-6'>
                  {desc.slice(0, 100)} ...
                </p>
                <ul class='card-languages-list flex text-white w-[285px] mt-1 mb-3 flex-wrap'>
                  {languages.map((language) => (
                    <li
                      key={language}
                      className='font-inter bg-[#ffffff3d] not-italic font-[500] text-sm mr-1 mt-2 p-1'
                    >
                      {language}
                    </li>
                  ))}
                </ul>
                <div className='flex justify-center items-center w-[1000px]'>
                  <button
                    class='btn-block btn-primary btn-hidden bg-orangeColor font-inter w-[500px]
                h-12 border-white font-normal text-base text-white border border-solid flex gap-3 p-3 cursor-pointer transition-all ease-in-out mr-5 duration-[0.5s] hover:bg-[#f7bd4a] hover:border hover:border-solid hover:border-[#fff5e1] hover:text-white hover:rounded-full active:bg-orangeColor active:font-inter active:font-normal active:text-base active:text-orangeColor rounded-t-[50%] justify-center md:invisible md:h-0'
                  >
                    See Project
                  </button>
                </div>
              </div>
            </div>
            <div class='card max-w-[324px] h-[385px] mt-[10px] mb-5 relative overflow-hidden rounded-xl shadow-md shadow-[#00000033] md:h-[386px] md:hover:transition-all md:hover:ease-in-out md:hover:duration-[0.5s] md:hover:transform md:hover:translate-y-3'>
              <Image
                src={profile}
                alt='card image'
                className='w-full h-full object-cover absolute'
              />
              <div class='card-info relative top-0 h-full flex flex-col justify-end items-center bg-gradient-to-tr to-[#26262600] from-[#262626e6] md:hover:invisible'>
                <h1 class='card-heading font-crete text-white not-italic font-[400] text-[32px] leading-[44px] max-w-[285px] mb-5'>
                  {title}
                </h1>
                <p class='card-text font-inter not-italic font-[400] text-base max-w-[285px] text-white mb-6'>
                  {desc.slice(0, 100)} ...
                </p>
                <ul class='card-languages-list flex text-white w-[285px] mt-1 mb-3 flex-wrap'>
                  {languages.map((language) => (
                    <li
                      key={language}
                      className='font-inter bg-[#ffffff3d] not-italic font-[500] text-sm mr-1 mt-2 p-1'
                    >
                      {language}
                    </li>
                  ))}
                </ul>
                <div className='flex justify-center items-center w-[1000px]'>
                  <button
                    class='btn-block btn-primary btn-hidden bg-orangeColor font-inter w-[500px]
                h-12 border-white font-normal text-base text-white border border-solid flex gap-3 p-3 cursor-pointer transition-all ease-in-out mr-5 duration-[0.5s] hover:bg-[#f7bd4a] hover:border hover:border-solid hover:border-[#fff5e1] hover:text-white hover:rounded-full active:bg-orangeColor active:font-inter active:font-normal active:text-base active:text-orangeColor rounded-t-[50%] justify-center md:invisible md:h-0'
                  >
                    See Project
                  </button>
                </div>
              </div>
            </div>
            <div class='card max-w-[324px] h-[385px] mt-[10px] mb-5 relative overflow-hidden rounded-xl shadow-md shadow-[#00000033] md:h-[386px] md:hover:transition-all md:hover:ease-in-out md:hover:duration-[0.5s] md:hover:transform md:hover:translate-y-3'>
              <Image
                src={profile}
                alt='card image'
                className='w-full h-full object-cover absolute'
              />
              <div class='card-info relative top-0 h-full flex flex-col justify-end items-center bg-gradient-to-tr to-[#26262600] from-[#262626e6] md:hover:invisible'>
                <h1 class='card-heading font-crete text-white not-italic font-[400] text-[32px] leading-[44px] max-w-[285px] mb-5'>
                  {title}
                </h1>
                <p class='card-text font-inter not-italic font-[400] text-base max-w-[285px] text-white mb-6'>
                  {desc.slice(0, 100)} ...
                </p>
                <ul class='card-languages-list flex text-white w-[285px] mt-1 mb-3 flex-wrap'>
                  {languages.map((language) => (
                    <li
                      key={language}
                      className='font-inter bg-[#ffffff3d] not-italic font-[500] text-sm mr-1 mt-2 p-1'
                    >
                      {language}
                    </li>
                  ))}
                </ul>
                <div className='flex justify-center items-center w-[1000px]'>
                  <button
                    class='btn-block btn-primary btn-hidden bg-orangeColor font-inter w-[500px]
                h-12 border-white font-normal text-base text-white border border-solid flex gap-3 p-3 cursor-pointer transition-all ease-in-out mr-5 duration-[0.5s] hover:bg-[#f7bd4a] hover:border hover:border-solid hover:border-[#fff5e1] hover:text-white hover:rounded-full active:bg-orangeColor active:font-inter active:font-normal active:text-base active:text-orangeColor rounded-t-[50%] justify-center md:invisible md:h-0'
                  >
                    See Project
                  </button>
                </div>
              </div>
            </div>
            <div class='card max-w-[324px] h-[385px] mt-[10px] mb-5 relative overflow-hidden rounded-xl shadow-md shadow-[#00000033] md:h-[386px] md:hover:transition-all md:hover:ease-in-out md:hover:duration-[0.5s] md:hover:transform md:hover:translate-y-3'>
              <Image
                src={profile}
                alt='card image'
                className='w-full h-full object-cover absolute'
              />
              <div class='card-info relative top-0 h-full flex flex-col justify-end items-center bg-gradient-to-tr to-[#26262600] from-[#262626e6] md:hover:invisible'>
                <h1 class='card-heading font-crete text-white not-italic font-[400] text-[32px] leading-[44px] max-w-[285px] mb-5'>
                  {title}
                </h1>
                <p class='card-text font-inter not-italic font-[400] text-base max-w-[285px] text-white mb-6'>
                  {desc.slice(0, 100)} ...
                </p>
                <ul class='card-languages-list flex text-white w-[285px] mt-1 mb-3 flex-wrap'>
                  {languages.map((language) => (
                    <li
                      key={language}
                      className='font-inter bg-[#ffffff3d] not-italic font-[500] text-sm mr-1 mt-2 p-1'
                    >
                      {language}
                    </li>
                  ))}
                </ul>
                <div className='flex justify-center items-center w-[1000px]'>
                  <button
                    class='btn-block btn-primary btn-hidden bg-orangeColor font-inter w-[500px]
                h-12 border-white font-normal text-base text-white border border-solid flex gap-3 p-3 cursor-pointer transition-all ease-in-out mr-5 duration-[0.5s] hover:bg-[#f7bd4a] hover:border hover:border-solid hover:border-[#fff5e1] hover:text-white hover:rounded-full active:bg-orangeColor active:font-inter active:font-normal active:text-base active:text-orangeColor rounded-t-[50%] justify-center md:invisible md:h-0'
                  >
                    See Project
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Work;
