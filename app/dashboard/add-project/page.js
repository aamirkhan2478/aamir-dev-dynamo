"use client";
import Layout from "@/components/Layout";
import Loader from "@/components/Loader";
import { useAddProject } from "@/hooks/useProject";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import ArrayTextField from "@/components/ArrayTextField";
import ImageUploader from "@/components/ImageUploader";

const AddProject = () => {
  const [project, setProject] = useState({
    name: "",
    description: "",
    pics: [],
    live: "",
    source: "",
  });
  const [languages, setLanguages] = useState([]);
  const [isLive, setIsLive] = useState(false);
  const [isSource, setIsSource] = useState(false);

  const { isLoading: loading, mutate } = useAddProject(onSuccess, onError);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setProject((preData) => {
      return {
        ...preData,
        [name]: value,
      };
    });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const data = {
      ...project,
      languages,
      isLive,
      isSource,
    };
    mutate(data);
  };

  function onSuccess(data) {
    if (data?.data?.status === 400) return onError(data?.data?.error);
    toast.success(data?.data?.msg, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    setProject({
      name: "",
      description: "",
      pics: [],
      live: "",
      source: "",
    });
    setIsLive(false);
    setIsSource(false);
    setLanguages([]);
  }

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

  console.log(project);

  return (
    <Layout>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto">
        <div className="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 bg-darkColor dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Add Project
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={submitHandler}>
              <div className="flex justify-center">
                <ImageUploader
                  onChange={(files) => {
                    setProject((prev) => ({ ...prev, pics: files }));
                  }}
                />
              </div>
              <div className="relative">
                <input
                  type="text"
                  id="project-name"
                  className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-orangeColor focus:outline-none focus:ring-0 focus:border-orangeColor peer"
                  placeholder=""
                  onChange={changeHandler}
                  value={project.name}
                  name="name"
                />
                <label
                  htmlFor="project-name"
                  className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-orangeColor 
                    peer-focus:dark:bg-darkColor
                    peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                >
                  Project Name
                </label>
              </div>
              <div className="relative">
                <textarea
                  type="text"
                  id="project-description"
                  className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-orangeColor focus:outline-none focus:ring-0 focus:border-orangeColor peer"
                  placeholder=" "
                  rows={10}
                  cols={10}
                  onChange={changeHandler}
                  value={project.description}
                  name="description"
                />
                <label
                  htmlFor="project-description"
                  className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-orangeColor 
                    peer-focus:dark:bg-darkColor
                    peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                >
                  Project Description
                </label>
              </div>

              <ArrayTextField data={languages} setData={setLanguages} />
              <div className="relative">
                <input
                  type="text"
                  id="live-link"
                  className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-orangeColor focus:outline-none focus:ring-0 focus:border-orangeColor peer"
                  placeholder=" "
                  onChange={changeHandler}
                  value={project.live}
                  name="live"
                />
                <label
                  htmlFor="live-link"
                  className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-orangeColor 
                    peer-focus:dark:bg-darkColor
                    peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                >
                  Live Link
                </label>
              </div>
              <div className="relative">
                <input
                  type="text"
                  id="source-code"
                  className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-orangeColor focus:outline-none focus:ring-0 focus:border-orangeColor peer"
                  placeholder=" "
                  onChange={changeHandler}
                  value={project.source}
                  name="source"
                />
                <label
                  htmlFor="source-code"
                  className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-orangeColor 
                    peer-focus:dark:bg-darkColor
                    peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                >
                  Source Code
                </label>
              </div>

              <div>
                <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">
                  Source Code
                </h3>
                <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-darkColor dark:border-gray-600 dark:text-white">
                  <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                    <div className="flex items-center pl-3">
                      <input
                        id="source-code-yes"
                        type="radio"
                        name="isSource"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                        onChange={() => setIsSource(true)}
                        value={isSource}
                        checked={isSource === true}
                      />
                      <label
                        htmlFor="source-code-yes"
                        className="w-full py-3 ml-2 text-sm font-medium text-gray-source-code-yes900 dark:text-gray-300"
                      >
                        YES
                      </label>
                    </div>
                  </li>
                  <li className="w-full dark:border-darkColor">
                    <div className="flex items-center pl-3">
                      <input
                        id="source-code-no"
                        type="radio"
                        name="isSource"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                        onChange={() => setIsSource(false)}
                        value={isSource}
                        checked={isSource === false}
                      />
                      <label
                        htmlFor="source-code-no"
                        className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        NO
                      </label>
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">
                  Live Demo
                </h3>
                <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-darkColor dark:border-gray-600 dark:text-white">
                  <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                    <div className="flex items-center pl-3">
                      <input
                        id="live-demo-yes"
                        type="radio"
                        name="isLive"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                        onChange={() => setIsLive(true)}
                        value={isLive}
                        checked={isLive === true}
                      />
                      <label
                        htmlFor="live-demo-yes"
                        className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        YES
                      </label>
                    </div>
                  </li>
                  <li className="w-full dark:border-darkColor">
                    <div className="flex items-center pl-3">
                      <input
                        id="live-demo-no"
                        type="radio"
                        name="isLive"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                        onChange={() => setIsLive(false)}
                        value={isLive}
                        checked={isLive === false}
                      />
                      <label
                        htmlFor="live-demo-no"
                        className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        NO
                      </label>
                    </div>
                  </li>
                </ul>
              </div>

              <button
                type="submit"
                className="w-full bg-orangeColor font-inter justify-center font-normal text-base text-white border border-solid flex gap-3 border-orangeColor p-3 cursor-pointer transition-all ease-in-out mr-5 duration-[0.5s] hover:bg-[#fff5e1] hover:border hover:border-solid hover:border-orangeColor hover:text-orangeColor hover:rounded-full active:bg-orangeColor active:font-inter active:font-normal active:text-base active:text-orangeColor"
              >
                {loading ? <Loader /> : "Add Project"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AddProject;
