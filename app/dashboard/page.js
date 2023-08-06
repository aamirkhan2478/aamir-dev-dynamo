"use client";
import Layout from "@/components/Layout";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import React from "react";
const Dashboard = () => {
  // const { data: session } = useSession({
  //   required: true,
  //   onUnauthenticated() {
  //     redirect("/auth/login?callbackUrl=/dashboard");
  //   },
  // });
  return <Layout>Dashboard</Layout>;
};

export default Dashboard;
