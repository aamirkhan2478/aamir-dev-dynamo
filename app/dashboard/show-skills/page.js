"use client";
import Layout from "@/components/Layout";
import Loader from "@/components/Loader";
import PopUp from "@/components/PopUp";
import TechnologiesModal from "@/components/TechnologiesModal";
import {
  useDeleteSkill,
  useShowSkill,
  useShowSkills,
  useUpdateSkill,
} from "@/hooks/useSkill";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const ShowSkills = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [skillID, setSkillID] = useState("");
  const { data, isLoading, isFetching } = useShowSkills();
  const {
    data: skill,
    isLoading: loading,
    isFetching: fetching,
  } = useShowSkill(skillID);
  const { mutateAsync } = useDeleteSkill(onError);
  const { mutateAsync: mutate } = useUpdateSkill(onError);
  const [skillData, setSkillData] = useState({
    name: "",
  });
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setSkillData((preData) => {
      return {
        ...preData,
        [name]: value,
      };
    });
  };
  const editHandler = (id) => {
    setSkillID(id);
    setIsOpenModal(true);
  };
  const deleteHandler = (id) => {
    setSkillID(id);
    setIsOpen(true);
  };
  const confirmHandler = () => {
    mutateAsync(skillID);
    setIsOpen(false);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    mutate({ id: skillID, skill: skillData });
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
          message={`Are you sure you want to delete ${skill?.name}?`}
          btnColor={"red"}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          onClick={confirmHandler}
        />
        <TechnologiesModal
          technologyName={"Skill"}
          isFetching={fetching}
          isLoading={loading}
          isOpen={isOpenModal}
          setIsOpen={setIsOpenModal}
          technology={skillData}
          setTechnology={setSkillData}
          changeHandler={changeHandler}
          submitHandler={submitHandler}
          data={skill}
        />
        <h1 className='text-4xl font-crete font-bold text-center my-5'>
          My Skills
        </h1>
        <div className='relative overflow-x-auto shadow-md sm:rounded-lg '>
          <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
            <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
              <tr>
                <th scope='col' className='px-6 py-3'>
                  Skill name
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
                data?.map((skill) => (
                  <>
                    <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 '>
                      <th
                        scope='row'
                        className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'
                      >
                        {skill.name}
                      </th>
                      <td className='px-6 py-4'>
                        <button
                          className='font-medium bg-blue-500 rounded text-white p-2 cursor-pointer hover:bg-blue-400'
                          onClick={() => editHandler(skill._id)}
                        >
                          Edit
                        </button>
                      </td>
                      <td className='px-6 py-4'>
                        <button
                          className='font-medium bg-red-500 rounded text-white p-2 cursor-pointer hover:bg-red-400'
                          onClick={() => deleteHandler(skill._id)}
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

export default ShowSkills;
