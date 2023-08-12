import React, { useEffect } from "react";
import Loader from "./Loader";

const TechnologiesModal = ({
  isOpen,
  setIsOpen,
  technologyName,
  isFetching,
  isLoading,
  changeHandler,
  submitHandler,
  technology,
  setTechnology,
  data,
  loading,
}) => {
  useEffect(() => {
    setTechnology({ name: data?.name });
  }, [data?.name, setTechnology]);
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
                Update {technologyName}
              </h3>
              {isLoading && isFetching ? (
                <Loader />
              ) : (
                <form
                  className='space-y-4 md:space-y-6'
                  onSubmit={submitHandler}
                >
                  <div class='relative'>
                    <input
                      type='text'
                      id='project-name'
                      class='block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-orangeColor focus:outline-none focus:ring-0 focus:border-orangeColor peer'
                      placeholder=' '
                      onChange={changeHandler}
                      value={technology.name}
                      name='name'
                    />
                    <label
                      for='project-name'
                      class='absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-orangeColor 
                    peer-focus:dark:bg-darkColor
                    peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1'
                    >
                      {technologyName} Name
                    </label>
                  </div>

                  <button
                    type='submit'
                    className='w-full bg-orangeColor font-inter justify-center font-normal text-base text-white border border-solid flex gap-3 border-orangeColor p-3 cursor-pointer transition-all ease-in-out mr-5 duration-[0.5s] hover:bg-[#fff5e1] hover:border hover:border-solid hover:border-orangeColor hover:text-orangeColor hover:rounded-full active:bg-orangeColor active:font-inter active:font-normal active:text-base active:text-orangeColor'
                  >
                    {loading ? <Loader /> : `Update ${technologyName}`}
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

export default TechnologiesModal;
