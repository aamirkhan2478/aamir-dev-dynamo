import { Email } from "@mui/icons-material";
import Image from "next/image";
import React, { useEffect } from "react";
import Typewriter from "typewriter-effect/dist/core";
import angellist from "@/public/angellist.svg";
import github from "@/public/github.svg";
import linkedin from "@/public/linkedin.svg";

const Hero = () => {
  useEffect(() => {
    new Typewriter(".typing", {
      strings: [
        "Web Developer",
        "MERN Stack Developer",
        "Full Stack Developer",
        "Front-end Developer",
        "React Native Developer",
      ],
      autoStart: true,
      loop: true,
      delay: 40,
    });
  });

  return (
    <section className='bg-blackColor w-full h-[590px] flex flex-col justify-center gap-[12px] lg:h-[870px]'>
      <div className='intro-portion mt-[100px] lg:flex lg:flex-col lg:ml-[87px] lg:mb-10 lg:absolute'>
        <h1 className='main-heading font-crete max-w-[327px] max-h-[188px] not-italic font-[400] text-6xl text-orangeColor ml-5 mr-5 tracking-[0.37px] leading-[64px] lg:max-w-[407px] lg:text-7xl lg:leading-[82px]'>
          Hey There. I&apos;m Aamir
        </h1>
        <h3 className='supporting-text  font-roboto max-w-[327px] max-h-[70px] text-2xl text-white ml-5 mr-5 font-bold not-italic lg:font-inter lg:max-w-[501px] lg:font-[500] lg:text-3xl lg:mt-3'>
          I&apos;m a <span className='typing'></span>
        </h3>
        <p className='description-text font-poppins max-w-[327px] max-h-[176px] font-[400] not-italic text-base text-white ml-5 mr-5 lg:font-inter lg:max-w-[523px] lg:text-2xl lg:mt-3'>
          I can help you build a product , feature or website Look through some
          of my work and experience! If you like what you see and have a project
          you need coded, don&apos;t hesitate to contact me.
        </p>
      </div>
      <a
        href='#contact'
        className='btn-primary bg-orangeColor font-inter w-40 font-normal text-base text-white border border-solid flex gap-3 border-orangeColor p-3 cursor-pointer transition-all ease-in-out ml-5 mr-5 duration-[0.5s] hover:bg-[#fff5e1] hover:border hover:border-solid hover:border-orangeColor hover:text-orangeColor hover:rounded-full active:bg-orangeColor active:font-inter active:font-normal active:text-base active:text-orangeColor lg:ml-[107px] lg:mt-[500px]'
        rel='noopener'
      >
        Contact Me <Email />
      </a>
      <ul className='social-media-icons flex ml-2 lg:flex-col lg:justify-center lg:mt-[-78px] lg:ml-4 lg:h-[342px] lg:w-12 lg:absolute'>
        <li className='hover:rotate-12'>
          <a
            href='https://github.com/aamirkhan2478'
            target='_blank'
            rel='noreferrer'
            className='lg:ml-[107px] lg:mt-[450px]'
          >
            <Image src={github} alt='github-icon' className='w-10 h-10' />
          </a>
        </li>
        <li className='hover:rotate-12'>
          <a
            href='https://www.linkedin.com/in/aamir-kh/'
            target='_blank'
            rel='noreferrer'
            className='lg:ml-[107px] lg:mt-[450px]'
          >
            <Image src={linkedin} alt='linkedIn-icon' className='w-10 h-10' />
          </a>
        </li>
        <li className='hover:rotate-12'>
          <a
            href='https://angel.co/u/aamirkhan2478'
            target='_blank'
            rel='noreferrer'
            className='lg:ml-[107px] lg:mt-[450px]'
          >
            <Image src={angellist} alt='angellist-icon' className='w-10 h-10' />
          </a>
        </li>
      </ul>
      <div className='profile-pic  flex bg-[url("../public/profile-pic.jpg")] bg-center bg-contain h-[70px] w-[70px] absolute rounded-full mt-32 mr-0 mb-80 ml-72 border border-solid border-orangeColor sm:h-32 sm:w-32 sm:mb-96 sm:ml-80 lg:h-40 lg:w-40 lg:mt-0 lg:mr-0 lg:mb-[200px] lg:ml-[473px]' />
      <div className='main-image bg-[url("../public/main-image.svg")] h-[312.03px] w-[108.89px] bg-contain bg-no-repeat self-end mt-[-250px] lg:bg-[url("../public/main-image-desktop.png")] lg:w-[480px] lg:h-[763px] lg:z-[5] lg:top-80 lg:absolute' />
    </section>
  );
};

export default Hero;
