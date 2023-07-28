import React from "react";

const About = () => {
  // .about-flex {
  //   height: 870px;
  // }

  // .about-content {
  //   margin-left: 156px;
  //   margin-bottom: 213px;
  // }

  // .about-heading {
  //   line-height: 82px;
  //   width: 565px;
  // }

  // .about-description {
  //   font-size: 20px;
  //   line-height: 32px;
  //   width: 570px;
  // }

  // .about-section #btn-id {
  //   width: 570px;
  // }

  // .image-container {
  //   height: 100%;
  //   width: 6200px;
  //   align-items: center;
  // }

  // .about-image {
  //   background-image: url("../public/about-desktop-image.svg");
  //   width: 335.39px;
  //   height: 490.38px;
  //   margin-bottom: -181px;
  // }

  // .about-section hr {
  //   width: 1558px;
  //   max-width: calc(100% - 300px);
  //   margin-top: -300px;
  //   margin-left: 150px;
  // }

  // .about-list {
  //   flex-direction: row;
  //   align-items: baseline;
  //   justify-content: space-evenly;
  //   margin-top: 3px;
  //   width: 1383px;
  //   max-width: calc(100% - 61px);
  //   padding-bottom: 0;
  // }

  // .language-list {
  //   text-align: justify;
  //   margin-bottom: 356px;
  // }

  // .frameworks-list {
  //   text-align: justify;
  // }

  // .skills-list {
  //   text-align: justify;
  // }
  return (
    <section id='about' className='about-section bg-blackColor'>
      <div className='about-flex h-[1513px] mt-[120px] flex justify-between items-center content-center lg:h-[870px]'>
        <div className='about-content flex flex-col justify-center items-center ml-[92px] absolute mb-[253px] lg:ml-[156px] lg:mb-[213px]'>
          <h1 className='about-heading font-crete not-italic font-[400] text-[72px] leading-[88px] tracking-[0.37px] text-orangeColor mb-[24px] w-[322px] lg:leading-[82px] lg:w-[565px]'>
            About me
          </h1>
          <p className='about-description font-inter not-italic font-[400] text-[16px] leading-[24px] text-[#f4f5f7] w-[320px] mb-[24px] lg:text-[20px] lg:leading-[32px] lg:w-[570px]'>
            Hello I&apos;m a Web developer! I can help you build a product ,
            feature or website Look through some of my work and experience! If
            you like what you see and have a project you need coded, don&apos;t
            hesitate to contact me.
          </p>
          <div className='btn-left w-[322px] lg:w-[570px] ' id='btn-id'>
            <a
              href='https://docs.google.com/document/d/1zvEf50SNzfS8f5M1-spD68IDhyzXA1XR3O19nY3LpU8/edit?usp=sharing'
              target='_blank'
              className='bg-orangeColor font-inter w-[150px] font-normal text-base text-white border border-solid flex gap-3 border-orangeColor p-3 cursor-pointer transition-all ease-in-out mr-5 duration-[0.5s] hover:bg-[#fff5e1] hover:border hover:border-solid hover:border-orangeColor hover:text-orangeColor hover:rounded-full active:bg-orangeColor active:font-inter active:font-normal active:text-base active:text-orangeColor'
              rel='noreferrer'
            >
              Get My Resume
            </a>
          </div>
        </div>
        <div className='image-container h-[30%] flex w-[994px] items-end justify-end lg:h-[100%] lg:w-[6200px] lg:items-center'>
          <div className="about-image bg-[url('../public/about-mob-image.svg')] bg-no-repeat bg-contain w-[160.27px] h-[286.7px] lg:bg-[url('../public/about-desktop-image.svg')] lg:w-[335.39px] lg:h-[490.38px] lg:mb-[-181px] xl:w-[600.39px] xl:h-[744.38px]" />
        </div>
      </div>
      <hr className='w-[897px] text-white ml-[24px] mt-[-521px] mb-[133px] lg:w-[1558px] lg:ml-[150px] lg:mt-[-300px]' />
      <ul className='about-list flex flex-col items-center justify-center font-inter text-white mt-[136px] text-center pb-[200px] lg:flex-row lg:items-baseline lg:justify-evenly lg:mt-[3px] lg:w-[1383px] lg:pb-0'>
        <li className='language-list not-italic font-bold text-[32px] leading-[114px] lg:text-justify'>
          Languages
          <ul>
            <li className='list-style-none not-italic font-[400] text-[22px] leading-[43px]'>
              Javascript
            </li>
            <li className='list-style-none not-italic font-[400] text-[22px] leading-[43px]'>
              Ruby
            </li>
            <li className='list-style-none not-italic font-[400] text-[22px] leading-[43px]'>
              Html
            </li>
            <li className='list-style-none not-italic font-[400] text-[22px] leading-[43px]'>
              Css
            </li>
          </ul>
        </li>
        <li className='frameworks-list not-italic font-bold text-[32px] leading-[114px] lg:text-justify lg:mb-[356px]'>
          Frameworks
          <ul>
            <li className='list-style-none not-italic font-[400] text-[22px] leading-[43px]'>
              Bootstrap
            </li>
            <li className='list-style-none not-italic font-[400] text-[22px] leading-[43px]'>
              Ruby on Rails
            </li>
            <li className='list-style-none not-italic font-[400] text-[22px] leading-[43px]'>
              React Js
            </li>
            <li className='list-style-none not-italic font-[400] text-[22px] leading-[43px]'>
              Node Js
            </li>
            <li className='list-style-none not-italic font-[400] text-[22px] leading-[43px]'>
              Express Js
            </li>
            <li className='list-style-none not-italic font-[400] text-[22px] leading-[43px]'>
              Material UI
            </li>
            <li className='list-style-none not-italic font-[400] text-[22px] leading-[43px]'>
              Tailwind CSS
            </li>
          </ul>
        </li>
        <li className='skills-list not-italic font-bold text-[32px] leading-[114px] lg:text-justify'>
          Skills
          <ul>
            <li className='list-style-none not-italic font-[400] text-[22px] leading-[43px]'>
              Codekit
            </li>
            <li className='list-style-none not-italic font-[400] text-[22px] leading-[43px]'>
              Github
            </li>
            <li className='list-style-none not-italic font-[400] text-[22px] leading-[43px]'>
              Codepen
            </li>
            <li className='list-style-none not-italic font-[400] text-[22px] leading-[43px]'>
              Terminal
            </li>
          </ul>
        </li>
      </ul>
    </section>
  );
};

export default About;
