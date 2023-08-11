"use client";
import FormModal from "@/components/FormModal";
import Layout from "@/components/Layout";
import PopUp from "@/components/PopUp";
import {
  useDeleteProject,
  useShowProject,
  useShowProjects,
} from "@/hooks/useProject";
import Image from "next/image";
import React, { useState } from "react";
import { useQueryClient } from "react-query";
import { ToastContainer, toast } from "react-toastify";

const ShowProjects = () => {
  const [projectID, setProjectID] = useState("");
  const { data: projects, isLoading, isFetching } = useShowProjects();
  const { data: project } = useShowProject(projectID);
  const { mutate, isSuccess } = useDeleteProject(onError);

  const [isOpen, setIsOpen] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const deleteHandler = (id) => {
    setProjectID(id);
    setIsOpen(!isOpen);
  };

  const updateHandler = (id) => {
    setProjectID(id);
    setIsOpenModal(!isOpenModal);
  };

  const confirmHandler = () => {
    mutate(projectID);
    setIsOpen(false);
  };

  function onError(error) {
    toast.error(error.response.data.error, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }
  return (
    <Layout>
      <ToastContainer
        position='top-center'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='dark'
      />
      <PopUp
        message={`Are you sure you want to delete ${project?.data?.project?.name}?`}
        btnColor={"red"}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        onClick={confirmHandler}
      />
      <FormModal
        isOpen={isOpenModal}
        setIsOpen={setIsOpenModal}
        projectID={projectID}
      />
      <h1 className='text-4xl font-crete font-bold text-center mb-10'>
        My Projects
      </h1>
      <div className='flex justify-center items-center flex-wrap gap-5'>
        {isFetching && isLoading && (
          <>
            <div className='h-[400px] w-[400px] animate-pulse dark:bg-gray-800 dark:border-gray-700 rounded-lg shadow' />
            <div className='h-[400px] w-[400px] animate-pulse dark:bg-gray-800 dark:border-gray-700 rounded-lg shadow' />
            <div className='h-[400px] w-[400px] animate-pulse dark:bg-gray-800 dark:border-gray-700 rounded-lg shadow' />
            <div className='h-[400px] w-[400px] animate-pulse dark:bg-gray-800 dark:border-gray-700 rounded-lg shadow' />
            <div className='h-[400px] w-[400px] animate-pulse dark:bg-gray-800 dark:border-gray-700 rounded-lg shadow' />
            <div className='h-[400px] w-[400px] animate-pulse dark:bg-gray-800 dark:border-gray-700 rounded-lg shadow' />
            <div className='h-[400px] w-[400px] animate-pulse dark:bg-gray-800 dark:border-gray-700 rounded-lg shadow' />
            <div className='h-[400px] w-[400px] animate-pulse dark:bg-gray-800 dark:border-gray-700 rounded-lg shadow' />
            <div className='h-[400px] w-[400px] animate-pulse dark:bg-gray-800 dark:border-gray-700 rounded-lg shadow' />
          </>
        )}
        {projects?.data?.projects?.map((project) => (
          <div
            key={project?._id}
            className='max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 '
          >
            <Image
              className='rounded-t-lg'
              src={project?.pic}
              alt='project image'
              width={600}
              height={600}
            />
            <div className='p-5'>
              <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                {project?.name}
              </h5>
              <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
                {project?.description?.slice(0, 100)} ...
              </p>
              <ul className='flex text-white gap-4 mb-3 flex-wrap'>
                {project?.languages?.map((language) => (
                  <li key={language} className='border p-1'>
                    {language}
                  </li>
                ))}
              </ul>
              <div className="my-2">
                <p className='text-white font-bold'>
                  isLive:{" "}
                  <span
                    className={
                      project?.isLive ? "text-green-600" : "text-red-600"
                    }
                  >
                    {project?.isLive ? "Yes" : "No"}
                  </span>
                </p>
                <p className='text-white font-bold'>
                  isSource:{" "}
                  <span
                    className={
                      project?.isSource ? "text-green-600" : "text-red-600"
                    }
                  >
                    {project?.isSource ? "Yes" : "No"}
                  </span>
                </p>
              </div>
              <div className='flex gap-4'>
                <button
                  className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                  onClick={() => updateHandler(project?._id)}
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
                </button>
                <button
                  className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800'
                  onClick={() => deleteHandler(project?._id)}
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
