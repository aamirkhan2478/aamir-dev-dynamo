"use client";
import Layout from "@/components/Layout";
import Loader from "@/components/Loader";
import { useShowContacts } from "@/hooks/useContact";
import React from "react";

const ShowMessage = () => {
  const { data, isLoading, isFetching } = useShowContacts();
  return (
    <Layout>
      <h1 className='text-4xl font-crete font-bold text-center my-5'>
        Your Messages
      </h1>
      <div className='relative overflow-x-auto shadow-md sm:rounded-lg '>
        <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
          <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
            <tr>
              <th scope='col' className='px-6 py-3'>
                Name
              </th>
              <th scope='col' className='px-6 py-3'>
                Email
              </th>
              <th scope='col' className='px-6 py-3'>
                Message
              </th>
            </tr>
          </thead>
          <tbody>
            {isLoading && isFetching ? (
              <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 '>
                <td className='px-6 py-4' colSpan={3}>
                  <Loader />
                </td>
              </tr>
            ) : (
              data?.map((contact) => (
                <>
                  <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 '>
                    <th
                      scope='row'
                      className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'
                    >
                      {contact.name}
                    </th>
                    <td className='px-6 py-4'>
                      <div className='text-gray-900 dark:text-white'>
                        {contact.email}
                      </div>
                    </td>
                    <td className='px-6 py-4'>
                      <div className='text-gray-900 dark:text-white'>
                        {contact.message}
                      </div>
                    </td>
                  </tr>
                </>
              ))
            )}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default ShowMessage;
