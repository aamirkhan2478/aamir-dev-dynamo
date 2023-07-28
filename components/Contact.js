import React from "react";

const Contact = () => {
  return (
    <section
      id='contact'
      className='contact-section flex flex-col justify-center items-center mt-[150px] mb-[300px] lg:flex-row'
    >
      <h3 className='contact-heading font-inter not-italic font-bold text-[32px] leading-[44px] text-center text-[#172b4d] w-[327px] h-[216px] mb-[72px] md:text-[40px] md:leading-[52px] md:text-left md:text-[#262626] md:w-[626px] md:h-[192px] md:mr-[23px] lg:w-[426px] lg:h-[292px] xl:text-[40px] xl:leading-[52px] xl:text-left xl:text-[#262626] xl:w-[426px] xl:h-[292px] xl:mr-[23px]'>
        I&apos;m always interested in hearing about new projects, so if
        you&apos;d like to chat please get in touch.
      </h3>
      <form className='form-control flex flex-col items-center mb-[20px] lg:items-start'>
        <input
          placeholder='Full Name'
          className='text-field font-inter not-italic font-[400] text-[15px] leading-[24px] text-[#979493] border-t-0 border-l-0 border-r-0 border-b border-solid border-[#dbd8d7] mb-[29px] pb-[11px] pl-[16px] w-[327px] h-[48px] focus:border-[#6b6867] focus:outline-[0px] md:w-[684px] md:h-[48px] lg:w-[572px] xl:w-[684px]'
          type='text'
          name='name'
          id='fullName'
          maxLength={30}
          required
        />
        <input
          placeholder='Email Address'
          className='text-field text-field font-inter not-italic font-[400] text-[15px] leading-[24px] text-[#979493] border-t-0 border-l-0 border-r-0 border-b border-solid border-[#dbd8d7] mb-[29px] pb-[11px] pl-[16px] w-[327px] h-[48px] focus:border-[#6b6867] focus:outline-[0px] md:w-[684px] md:h-[48px] lg:w-[572px] xl:w-[684px]'
          type='email'
          name='email'
          id='email'
          required
        />
        <textarea
          className='message-field font-inter not-italic font-[400] text-[15px] leading-[24px] text-[#3c3a39] bg-[#fbf8f7] border-[0] mb-[24px] pl-[12px] pr-[12px] pt-[12px] pb-[12px] w-[327px] h-[114px] focus:outline-[0px] md:w-[684px] lg:w-[572px] xl:w-[684px]'
          placeholder='Enter text here'
          name='message'
          id='message'
          maxLength={500}
          required
          defaultValue={""}
        />
        <div className=' flex'>
          <button
            type='submit'
            className='btn-primary bg-orangeColor font-inter w-32 font-normal text-base text-white border border-solid flex gap-3 border-orangeColor p-3 cursor-pointer transition-all ease-in-out mr-5 duration-[0.5s] hover:bg-[#fff5e1] hover:border hover:border-solid hover:border-orangeColor hover:text-orangeColor hover:rounded-full active:bg-orangeColor active:font-inter active:font-normal active:text-base active:text-orangeColor'
          >
            Get In Touch
          </button>
          <button className='btn-primary bg-orangeColor font-inter w-32 font-normal text-base text-white border border-solid flex gap-3 border-orangeColor p-3 cursor-pointer transition-all ease-in-out mr-5 duration-[0.5s] hover:bg-[#fff5e1] hover:border hover:border-solid hover:border-orangeColor hover:text-orangeColor hover:rounded-full active:bg-orangeColor active:font-inter active:font-normal active:text-base active:text-orangeColor'>
            Reset
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
