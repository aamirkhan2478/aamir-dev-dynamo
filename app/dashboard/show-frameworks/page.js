"use client";
import Layout from "@/components/Layout";
import Loader from "@/components/Loader";
import PopUp from "@/components/PopUp";
import TechnologiesModal from "@/components/TechnologiesModal";
import {
  useDeleteFramework,
  useShowFramework,
  useShowFrameworks,
  useUpdateFramework,
} from "@/hooks/useFramework";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const ShowFrameworks = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [frameworkID, setFrameworkID] = useState("");
  const { data, isLoading, isFetching } = useShowFrameworks();
  const {
    data: framework,
    isLoading: loading,
    isFetching: fetching,
  } = useShowFramework(frameworkID);
  const { mutateAsync } = useDeleteFramework(onError);
  const { mutateAsync: mutate } = useUpdateFramework(onError);
  const [frameworkData, setFrameworkData] = useState({
    name: "",
  });
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFrameworkData((preData) => {
      return {
        ...preData,
        [name]: value,
      };
    });
  };
  const editHandler = (id) => {
    setFrameworkID(id);
    setIsOpenModal(true);
  };
  const deleteHandler = (id) => {
    setFrameworkID(id);
    setIsOpen(true);
  };
  const confirmHandler = () => {
    mutateAsync(frameworkID);
    setIsOpen(false);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    mutate({ id: frameworkID, framework: frameworkData });
    setIsOpenModal(false);
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
      <>
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
          message={`Are you sure you want to delete ${framework?.name}?`}
          btnColor={"red"}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          onClick={confirmHandler}
        />
        <TechnologiesModal
          technologyName={"Framework"}
          isFetching={fetching}
          isLoading={loading}
          isOpen={isOpenModal}
          setIsOpen={setIsOpenModal}
          technology={frameworkData}
          setTechnology={setFrameworkData}
          changeHandler={changeHandler}
          submitHandler={submitHandler}
          data={framework}
        />
        <h1 className='text-4xl font-crete font-bold text-center my-5'>
          My Frameworks
        </h1>
        <div className='relative overflow-x-auto shadow-md sm:rounded-lg '>
          <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
            <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
              <tr>
                <th scope='col' className='px-6 py-3'>
                  Framework name
                </th>
                <th scope='col' className='px-6 py-3'>
                  <span className='sr-only'>Edit</span>
                </th>
                <th scope='col' className='px-6 py-3'>
                  <span className='sr-only'>Delete</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {isLoading && isFetching ? (
                <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 '>
                  <td className='px-6 py-4' colSpan={3}>
                    {" "}
                    <Loader />
                  </td>
                </tr>
              ) : (
                data?.map((framework) => (
                  <>
                    <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 '>
                      <th
                        scope='row'
                        className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'
                      >
                        {framework.name}
                      </th>
                      <td className='px-6 py-4'>
                        <button
                          className='font-medium bg-blue-500 rounded text-white p-2 cursor-pointer hover:bg-blue-400'
                          onClick={() => editHandler(framework._id)}
                        >
                          Edit
                        </button>
                      </td>
                      <td className='px-6 py-4'>
                        <button
                          className='font-medium bg-red-500 rounded text-white p-2 cursor-pointer hover:bg-red-400'
                          onClick={() => deleteHandler(framework._id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  </>
                ))
              )}
            </tbody>
          </table>
        </div>
      </>
    </Layout>
  );
};

export default ShowFrameworks;
