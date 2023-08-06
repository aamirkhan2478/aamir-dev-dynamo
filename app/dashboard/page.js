"use client";
import Layout from "@/components/Layout";
import Image from "next/image";
import React from "react";
import profile from "@/public/profile-pic.jpg";
import { Preview } from "@mui/icons-material";
import { useShowProjects } from "@/hooks/useProject";
const Dashboard = () => {
  const { data: projects, isLoading } = useShowProjects();
  return (
    <Layout>
      <div className='flex items-center h-full gap-8 w-full justify-center'>
        <div className='w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
          <div className='flex flex-col items-center py-10'>
            <Image
              className='w-24 h-24 mb-3 rounded-full shadow-lg'
              src={profile}
              alt='Bonnie image'
              width={96}
              height={96}
            />
            <h5 className='mb-1 text-xl font-medium text-gray-900 dark:text-white'>
              Aamir Khan
            </h5>
            <span className='text-sm text-gray-500 dark:text-gray-400'>
              Web Developer
            </span>
          </div>
        </div>
        <div className='w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
          <div className='flex items-center py-10 justify-center gap-2'>
            {isLoading ? (
              <div className='max-w-sm animate-pulse flex gap-2 items-center justify-center h-full'>
                <div className='rounded bg-gray-500 h-[40px] w-[40px]'></div>
                <div className='h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-24 mb-4'></div>
              </div>
            ) : (
              <>
                <Preview className='text-white text-[40px]' />
                <h5 className='mb-1 text-xl font-medium text-gray-900 dark:text-white'>
                  Projects:
                </h5>
                <span className='mb-1 text-xl font-medium text-gray-900 dark:text-white'>
                  {projects?.data?.projects?.length}
                </span>
              </>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
