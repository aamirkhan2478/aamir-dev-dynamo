"use client"
import { ArrowBackIos, Dashboard, Home, Logout } from "@mui/icons-material";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import React, { useState, useMemo } from "react";
import logo from "@/public/dashboard-logo.jpg";
import { signOut } from "next-auth/react";

const menuItems = [
  { id: 1, label: "Dashboard", icon: Dashboard, link: "/dashboard" },
  {
    id: 2,
    label: "Add Project",
    icon: Home,
    link: "/dashboard/add-project",
  },
  {
    id: 3,
    label: "Show Projects",
    icon: Home,
    link: "/dashboard/show-projects",
  },
  {
    id: 4,
    label: "Add Skill",
    icon: Home,
    link: "/dashboard/add-skill",
  },
  {
    id: 5,
    label: "Show Skills",
    icon: Home,
    link: "/dashboard/show-skills",
  },
  {
    id: 6,
    label: "Add Framework",
    icon: Home,
    link: "/dashboard/add-framework",
  },
  {
    id: 7,
    label: "Show Frameworks",
    icon: Home,
    link: "/dashboard/show-frameworks",
  },
  {
    id: 8,
    label: "Add Language",
    icon: Home,
    link: "/dashboard/add-language",
  },
  {
    id: 9,
    label: "Show Languages",
    icon: Home,
    link: "/dashboard/show-languages",
  },
];

const Sidebar = () => {
  const [toggleCollapse, setToggleCollapse] = useState(false);
  const [isCollapsible, setIsCollapsible] = useState(false);

  const pathName = usePathname();

  const activeMenu = useMemo(
    () => menuItems.find((menu) => menu.link === pathName),
    [pathName]
  );

  const wrapperClasses = classNames(
    "h-screen px-4 pt-8 pb-4 bg-darkColor flex justify-between flex-col overflow-auto",
    {
      ["w-80"]: !toggleCollapse,
      ["w-20"]: toggleCollapse,
    }
  );

  const collapseIconClasses = classNames(
    "p-2 rounded bg-[#f3f4f6] absolute right-0",
    {
      "rotate-180": toggleCollapse,
    }
  );

  const getNavItemClasses = (menu) => {
    return classNames(
      `flex items-center cursor-pointer hover:bg-orangeColor ${
        toggleCollapse ? "rounded-lg overflow-x-hidden" : "rounded"
      } w-full overflow-hidden whitespace-nowrap my-1`,
      {
        ["bg-orangeColor"]: activeMenu.id === menu.id,
      }
    );
  };

  const onMouseOver = () => {
    setIsCollapsible(!isCollapsible);
  };

  const handleSidebarToggle = () => {
    setToggleCollapse(!toggleCollapse);
  };

  return (
    <div
      className={wrapperClasses}
      style={{ transition: "width 300ms cubic-bezier(0.2, 0, 0, 1) 0s" }}
    >
      <div className='flex flex-col'>
        <div className='flex items-center justify-between relative'>
          <div
            className={classNames("flex items-center gap-4", {
              hidden: toggleCollapse,
            })}
          >
            <Image src={logo} alt='logo' className='h-9 w-9' />
            <span
              className={classNames(
                "mt-2 text-2xl font-medium text-[#ffffff]",
                {
                  hidden: toggleCollapse,
                }
              )}
            >
              Aamir Khan
            </span>
          </div>
          <button className={collapseIconClasses} onClick={handleSidebarToggle}>
            <ArrowBackIos />
          </button>
        </div>

        <div className='flex flex-col items-start mt-14 mb-6'>
          {menuItems.map(({ icon: Icon, ...menu }, index) => {
            const classes = getNavItemClasses(menu);
            return (
              <div className={classes} key={index}>
                <Link href={menu.link} legacyBehavior>
                  <a className='flex py-4 px-3 items-center w-full h-full text-white'>
                    <div style={{ width: "2.5rem" }}>
                      <Icon />
                    </div>
                    {!toggleCollapse && (
                      <span
                        className={classNames("text-md font-medium text-white")}
                      >
                        {menu.label}
                      </span>
                    )}
                  </a>
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      <div
        className={`bg-red-500 text-white flex px-3 py-4 ${
          toggleCollapse ? "rounded-lg" : "rounded"
        } cursor-pointer hover:bg-red-400 active:bg-red-500`}
        onClick={() => signOut()}
      >
        <div style={{ width: "2.5rem" }}>
          <Logout />
        </div>
        {!toggleCollapse && (
          <span className={classNames("text-md font-medium text-white")}>
            Logout
          </span>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
