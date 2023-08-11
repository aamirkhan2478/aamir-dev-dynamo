"use client"
import React from "react";
import { ReactQueryDevtools } from "react-query/devtools";

const ReactQueryDev = () => {
  return <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />;
};

export default ReactQueryDev;
