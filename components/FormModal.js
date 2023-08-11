import React, { useEffect, useState } from "react";
import ArrayTextField from "./ArrayTextField";
import Image from "next/image";
import Loader from "./Loader";
import { useShowProject, useUpdateProject } from "@/hooks/useProject";
import { toast } from "react-toastify";

const FormModal = ({ isOpen, setIsOpen, projectID }) => {
  const {
    data: projectData,
    isLoading,
    isFetching,
  } = useShowProject(projectID);
  const { mutate, isLoading: loading, isSuccess } = useUpdateProject(onError);
  const [project, setProject] = useState({
    name: "",
    description: "",
    pic: "",
    live: "",
    source: "",
  });
  const [languages, setLanguages] = useState([]);
  const [isLive, setIsLive] = useState(false);
  const [isSource, setIsSource] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    const data = {
      ...project,
      languages,
      isLive,
      isSource,
    };
    mutate({ id: projectID, project: data });
    if (isSuccess) return setIsOpen(false);
  };

  const uploadHandler = (e) => {
    e.preventDefault();
    const client = fileStack.init("AHJzPsBsQUGI6c7GzerLxz");
    const options = {
      uploadInBackground: false,
      onUploadDone: (res) => setProject({ pic: res.filesUploaded[0].url }),
    };
    client.picker(options).open();
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setProject((preData) => {
      return {
        ...preData,
        [name]: value,
      };
    });
  };

  useEffect(() => {
    setProject({
      name: projectData?.data?.project?.name,
      description: projectData?.data?.project?.description,
      pic: projectData?.data?.project?.pic,
      live: projectData?.data?.project?.live,
      source: projectData?.data?.project?.source,
    });
    setLanguages(projectData?.data?.project?.languages);
  }, [projectData]);

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
    <div>
      {/* Main modal */}
      <div
        id='authentication-modal'
        tabIndex={-1}
        aria-hidden='true'
        className={`fixed top-0 left-0 right-0 z-50 ${
          isOpen ? "block" : "hidden"
        } w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full`}
      >
        <div className='relative w-full max-w-md max-h-full'>
          {/* Modal content */}
          <div className='relative bg-white rounded-lg shadow dark:bg-gray-700'>
            <button
              type='button'
              className='absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white'
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                className='w-3 h-3'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 14 14'
              >
                <path
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6'
                />
              </svg>
              <span className='sr-only'>Close modal</span>
            </button>
            <div className='px-6 py-6 lg:px-8'>
              <h3 className='mb-4 text-xl font-medium text-gray-900 dark:text-white'>
                Update Project
              </h3>
              {isLoading && isFetching ? (
                <Loader />
              ) : (
                <form
                  className='space-y-4 md:space-y-6'
                  onSubmit={submitHandler}
                >
                  <div className='flex justify-center'>
                    {project.pic ? (
                      <Image
                        src={project.pic}
                        width={400}
                        height={400}
                        className='border border-orangeColor rounded text-white active:animate-pulse active:bg-orangeColor'
                        alt='project-pic'
                        onClick={uploadHandler}
                      />
                    ) : (
                      <button
                        className='border border-orangeColor rounded text-white p-20 active:animate-pulse active:bg-orangeColor wi'
                        onClick={uploadHandler}
                      >
                        Upload Image
                      </button>
                    )}
                  </div>
                  <div class='relative'>
                    <input
                      type='text'
                      id='project-name'
                      class='block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-orangeColor focus:outline-none focus:ring-0 focus:border-orangeColor peer'
                      placeholder=' '
                      onChange={changeHandler}
                      value={project.name}
                      name='name'
                    />
                    <label
                      for='project-name'
                      class='absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-orangeColor 
                    peer-focus:dark:bg-darkColor
                    peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1'
                    >
                      Project Name
                    </label>
                  </div>
                  <div class='relative'>
                    <textarea
                      type='text'
                      id='project-description'
                      class='block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-orangeColor focus:outline-none focus:ring-0 focus:border-orangeColor peer'
                      placeholder=' '
                      rows={10}
                      cols={10}
                      onChange={changeHandler}
                      value={project.description}
                      name='description'
                    />
                    <label
                      for='project-description'
                      class='absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-orangeColor 
                    peer-focus:dark:bg-darkColor
                    peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1'
                    >
                      Project Description
                    </label>
                  </div>

                  <ArrayTextField data={languages} setData={setLanguages} />
                  <div className='relative'>
                    <input
                      type='text'
                      id='live-link'
                      className='block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-orangeColor focus:outline-none focus:ring-0 focus:border-orangeColor peer'
                      placeholder=' '
                      onChange={changeHandler}
                      value={project.live}
                      name='live'
                    />
                    <label
                      for='live-link'
                      className='absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-orangeColor 
                    peer-focus:dark:bg-darkColor
                    peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1'
                    >
                      Live Link
                    </label>
                  </div>
                  <div className='relative'>
                    <input
                      type='text'
                      id='source-code'
                      className='block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-orangeColor focus:outline-none focus:ring-0 focus:border-orangeColor peer'
                      placeholder=' '
                      onChange={changeHandler}
                      value={project.source}
                      name='source'
                    />
                    <label
                      for='source-code'
                      className='absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-orangeColor 
                    peer-focus:dark:bg-darkColor
                    peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1'
                    >
                      Source Code
                    </label>
                  </div>

                  <div>
                    <h3 className='mb-4 font-semibold text-gray-900 dark:text-white'>
                      Source Code
                    </h3>
                    <ul className='items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-darkColor dark:border-gray-600 dark:text-white'>
                      <li className='w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600'>
                        <div className='flex items-center pl-3'>
                          <input
                            id='source-code-yes'
                            type='radio'
                            name='source-code'
                            className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500'
                            onChange={() => setIsSource(true)}
                            value={isSource}
                            checked={isSource === true}
                            defaultChecked={isSource === true}
                          />
                          <label
                            htmlFor='source-code-yes'
                            className='w-full py-3 ml-2 text-sm font-medium text-gray-source-code-yes900 dark:text-gray-300'
                          >
                            YES
                          </label>
                        </div>
                      </li>
                      <li className='w-full dark:border-darkColor'>
                        <div className='flex items-center pl-3'>
                          <input
                            id='source-code-no'
                            type='radio'
                            name='source-code'
                            className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500'
                            onChange={() => setIsSource(false)}
                            value={isSource}
                            checked={isSource === false}
                            defaultChecked={isSource === false}
                          />
                          <label
                            htmlFor='source-code-no'
                            className='w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                          >
                            NO
                          </label>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className='mb-4 font-semibold text-gray-900 dark:text-white'>
                      Live Demo
                    </h3>
                    <ul className='items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-darkColor dark:border-gray-600 dark:text-white'>
                      <li className='w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600'>
                        <div className='flex items-center pl-3'>
                          <input
                            id='live-demo-yes'
                            type='radio'
                            name='live-demo'
                            className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500'
                            onChange={() => setIsLive(true)}
                            value={isLive}
                            checked={isLive === true}
                            defaultChecked={isLive === true}
                          />
                          <label
                            htmlFor='live-demo-yes'
                            className='w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                          >
                            YES
                          </label>
                        </div>
                      </li>
                      <li className='w-full dark:border-darkColor'>
                        <div className='flex items-center pl-3'>
                          <input
                            id='live-demo-no'
                            type='radio'
                            name='live-demo'
                            className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500'
                            onChange={() => setIsLive(false)}
                            value={isLive}
                            checked={isLive === false}
                            defaultChecked={isLive === false}
                          />
                          <label
                            htmlFor='live-demo-no'
                            className='w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                          >
                            NO
                          </label>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <button
                    type='submit'
                    className='w-full bg-orangeColor font-inter justify-center font-normal text-base text-white border border-solid flex gap-3 border-orangeColor p-3 cursor-pointer transition-all ease-in-out mr-5 duration-[0.5s] hover:bg-[#fff5e1] hover:border hover:border-solid hover:border-orangeColor hover:text-orangeColor hover:rounded-full active:bg-orangeColor active:font-inter active:font-normal active:text-base active:text-orangeColor'
                  >
                    {loading ? <Loader /> : "Update Project"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormModal;
