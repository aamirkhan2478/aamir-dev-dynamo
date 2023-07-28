import React from "react";

const Footer = () => {
  return (
    <footer className='footer'>
      <hr className='bg-[#dfe1e6]' />
      <ul className='footer-social-icons flex justify-center items-center h-[60px]'>
        <li className='hover:transition-all hover:duration-[0.5s] hover:transform hover:rotate-[10deg]'>
          <a
            href='https://github.com/aamirkhan2478'
            target='_blank'
            rel='noreferrer'
          >
            <div className="github-icon bg-[url('../public/footer-github.svg')] w-[40px] h-[40px]" />
          </a>
        </li>
        <li className='hover:transition-all hover:duration-[0.5s] hover:transform hover:rotate-[10deg]'>
          <a
            href='https://www.linkedin.com/in/aamir-kh/'
            target='_blank'
            rel='noreferrer'
          >
            <div className="linkedin-icon bg-[url('../public/footer-linkedin.svg')] w-[40px] h-[40px]" />
          </a>
        </li>
        <li className='hover:transition-all hover:duration-[0.5s] hover:transform hover:rotate-[10deg]'>
          <a
            href='https://angel.co/u/aamirkhan2478'
            target='_blank'
            rel='noreferrer'
          >
            <div className="angel-list-icon bg-[url('../public/footer-angellist.svg')] w-[40px] h-[40px]" />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
