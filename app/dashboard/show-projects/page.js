"use client";
import Layout from "@/components/Layout";
import PopUp from "@/components/PopUp";
import { useShowProject, useShowProjects } from "@/hooks/useProject";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const ShowProjects = () => {
  const { data: projects } = useShowProjects();
  const [isOpen, setIsOpen] = useState(false);
  const [projectID, setProjectID] = useState("");
  const { data: project } = useShowProject(projectID);
  const clickHandler = (id) => {
    setProjectID(id);
    setIsOpen(!isOpen);
  };
  const confirmHandler = () => {};
  return (
    <Layout>
      <PopUp
        message={`Are you sure you want to delete ${project?.data?.project?.name}?`}
        btnColor={"red"}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        onClick={confirmHandler}
      />
      <h1 className='text-4xl font-crete font-bold text-center mb-10'>
        My Projects
      </h1>
      <div className='flex justify-center items-center flex-wrap gap-5'>
        {projects?.data?.projects?.map((project) => (
          <div
            key={project?._id}
            className='max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'
          >
            <a href='#'>
              <Image
                className='rounded-t-lg'
                src={project?.pic}
                alt='project image'
                width={500}
                height={500}
              />
            </a>
            <div className='p-5'>
              <a href='#'>
                <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                  {project?.name}
                </h5>
              </a>
              <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
                {project?.description?.slice(0, 100)} ...
              </p>
              <div className='flex gap-4'>
                <Link
                  href={`/dashboard/update-project/${project?._id}`}
                  className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                >
                  Update
                  <svg
                    className='w-3.5 h-3.5 ml-2'
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 14 10'
                  >
                    <path
                      stroke='currentColor'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M1 5h12m0 0L9 1m4 4L9 9'
                    />
                  </svg>
                </Link>
                <button
                  className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800'
                  onClick={() => clickHandler(project?._id)}
                >
                  Delete
                  <svg
                    className='w-3.5 h-3.5 ml-2'
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 14 10'
                  >
                    <path
                      stroke='currentColor'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M1 5h12m0 0L9 1m4 4L9 9'
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default ShowProjects;
