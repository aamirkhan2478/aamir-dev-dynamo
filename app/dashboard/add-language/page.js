"use client";
import Layout from "@/components/Layout";
import Loader from "@/components/Loader";
import { useAddLanguage } from "@/hooks/useLanguage";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const AddLanguage = () => {
  const [name, setName] = useState("");
  const { mutate, isLoading: loading } = useAddLanguage(onSuccess, onError);
  const submitHandler = (e) => {
    e.preventDefault();
    const data = {
      name,
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
    setName("");
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
      <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto'>
        <div className='w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 bg-darkColor dark:border-gray-700'>
          <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
            <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white'>
              Add Language
            </h1>
            <form className='space-y-4 md:space-y-6' onSubmit={submitHandler}>
              <div className='relative'>
                <input
                  type='text'
                  id='language-name'
                  className='block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-orangeColor focus:outline-none focus:ring-0 focus:border-orangeColor peer'
                  placeholder=' '
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  name='name'
                />
                <label
                  htmlFor='language-name'
                  className='absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-orangeColor 
                    peer-focus:dark:bg-darkColor
                    peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1'
                >
                  Language Name
                </label>
              </div>

              <button
                type='submit'
                className='w-full bg-orangeColor font-inter justify-center font-normal text-base text-white border border-solid flex gap-3 border-orangeColor p-3 cursor-pointer transition-all ease-in-out mr-5 duration-[0.5s] hover:bg-[#fff5e1] hover:border hover:border-solid hover:border-orangeColor hover:text-orangeColor hover:rounded-full active:bg-orangeColor active:font-inter active:font-normal active:text-base active:text-orangeColor'
              >
                {loading ? <Loader /> : "Add language"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AddLanguage;
