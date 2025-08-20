import Image from "next/image";
import React, { useState } from "react";
import Modal from "./Modal";
import { useShowProjects } from "@/hooks/useProject";

const Work = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const { data: projects, isLoading } = useShowProjects();

  const openModal = (project) => {
    setSelectedProject(project);
    setIsOpen(true);
  };

  // Loading skeleton for cards
  const renderLoadingSkeletons = () => (
    <>
      <div
        role="status"
        className="main-card animate-pulse mt-[-90px] md:flex md:items-center"
      >
        <div className="image flex items-center justify-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700 mt-[140px] md:mr-[20px] md:w-[390px] md:h-[207px] lg:w-[612px] lg:h-[293px]" />
        <div className="main-card-content md:mt-[52px] md:flex md:flex-col md:justify-center">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className={`h-2 bg-gray-200 rounded-full dark:bg-gray-700 ${
                i === 0
                  ? "h-2.5 w-48 max-w-[250px] min-w-[325px] mt-[24px] mb-[15px]"
                  : "max-w-[480px] mb-2.5"
              }`}
            />
          ))}
          <div className="h-10 bg-gray-200 dark:bg-gray-700 max-w-[100px] mb-2.5" />
        </div>
      </div>
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="card animate-pulse bg-gray-700 w-[324px] h-[386px] mt-[10px] mb-[20px] overflow-hidden rounded-[10px] shadow-md md:w-[324px]"
        />
      ))}
    </>
  );

  // Main project card component
  const MainProjectCard = ({ project }) => (
    <div className="main-card flex flex-col mt-[-90px] md:justify-center md:items-center">
      <Image
        src={project?.pics[0]}
        className="post-image w-[327px] h-[173px] mt-[140px] object-contain object-top md:mr-[20px] md:w-[390px] md:h-[207px] lg:w-[473px] lg:h-[467px]"
        width={327}
        height={173}
        alt="project-image"
      />
      <div className="main-card-content md:flex md:flex-col md:justify-center">
        <h4 className="work-title-post font-crete not-italic font-[400] text-[32px] leading-[44px] max-w-[250px] text-blueColor min-w-[325px] mt-[24px] mb-[15px] md:text-[40px] md:leading-[52px]">
          {project?.name}
        </h4>
        <p className="work-supporting-text font-inter text-blueColor not-italic font-[400] text-[16px] leading-[24px] max-w-[322px] md:text-[20px] md:leading-[28px] md:max-w-[426px]">
          {project?.description.slice(0, 100)} ...
        </p>
        <ul className="languages-list flex w-[322px] mt-[5px] mb-[10px] flex-wrap md:mt-[23px] md:mb-[24px]">
          {project?.languages.map((language) => (
            <LanguageTag key={language} language={language} color="blue" />
          ))}
        </ul>
        <div className="btn-left">
          <ProjectButton onClick={() => openModal(project)} />
        </div>
      </div>
    </div>
  );

  // Project card component
  const ProjectCard = ({ project }) => (
    <div className="card max-w-[324px] h-[386px] flex flex-col mt-[10px] mb-[20px] justify-center items-center relative overflow-hidden rounded-[10px] shadow-md md:max-w-[324px] md:hover:transition-all md:hover:ease-in-out md:hover:duration-[0.5s] md:hover:transform md:hover:translate-y-3">
      <Image
        src={project?.pics[0]}
        alt="card image"
        className="w-full h-full object-cover absolute"
        width={500}
        height={500}
      />
      <div className="card-info relative bg-gradient-to-tr to-[#26262600] from-[#262626e6] top-0 h-full flex flex-col justify-end items-center">
        <h1 className="card-heading font-crete text-white not-italic font-[400] text-[32px] leading-[44px] max-w-[285px] mb-[19px]">
          {project?.name}
        </h1>
        <p className="card-text font-inter not-italic font-[400] text-[16px] leading-[24px] max-w-[285px] text-white mb-[26px]">
          {project?.description.slice(0, 100)} ...
        </p>
        <ul className="card-languages-list flex text-white w-[285px] mt-[5px] mb-[10px] flex-wrap">
          {project?.languages.map((language) => (
            <LanguageTag key={language} language={language} color="white" />
          ))}
        </ul>
        <ProjectButton
          onClick={() => openModal(project)}
          className="btn-block btn-hidden rounded-tl-[50%] rounded-tr-[50%] w-[380px] h-[48px] border-[#fff5e1] hover:bg-[#f7bd4a] hover:border-[#fff5e1] md:invisible md:h-0"
        />
      </div>
    </div>
  );

  // Reusable components
  const LanguageTag = ({ language, color }) => (
    <li
      className={`font-inter not-italic font-[500] text-[15px] leading-[20px] mr-[5px] mt-[8px] p-[5px] ${
        color === "blue"
          ? "text-blueColor border border-solid border-[#8993a4]"
          : "text-white bg-[#ffffff3d]"
      }`}
    >
      {language.toUpperCase()}
    </li>
  );

  const ProjectButton = ({ onClick, className = "" }) => (
    <button
      className={`btn-primary btn bg-orangeColor font-inter font-normal text-base border border-solid flex justify-center items-center gap-3 border-orangeColor p-3 cursor-pointer transition-all ease-in-out mr-5 duration-[0.5s] hover:bg-[#fff5e1] hover:border hover:border-solid hover:border-orangeColor hover:text-orangeColor hover:rounded-full active:bg-orangeColor active:font-inter active:font-normal active:text-base active:text-orangeColor ${className}`}
      onClick={onClick}
    >
      See Project
    </button>
  );

  return (
    <>
      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        title={selectedProject?.name || ""}
        desc={selectedProject?.description || ""}
        languages={selectedProject?.languages || []}
        live={selectedProject?.live || ""}
        source={selectedProject?.source || ""}
        isSource={selectedProject?.isSource || false}
        isLive={selectedProject?.isLive || false}
        pics={selectedProject?.pics || []}
        loading={false}
      />

      <section id="portfolio" className="work-section">
        <div className="grid-items">
          <h1 className="work-main-heading font-crete not-italic font-[400] text-[40px] leading-[52px] text-blackColor md:text-[30px] lg:text-[35px] lg:self-center">
            My Recent Works
          </h1>
          <hr className="divider w-[327px] border border-solid border-[#212121]" />

          {isLoading ? (
            renderLoadingSkeletons()
          ) : (
            <>
              {projects?.data?.projects[0] && (
                <MainProjectCard project={projects.data.projects[0]} />
              )}
              {projects?.data?.projects?.slice(1).map((project) => (
                <ProjectCard key={project?._id} project={project} />
              ))}
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default Work;
