export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/dashboard",
    "/dashboard/add-project",
    "/dashboard/show-projects",
    "/dashboard/add-skill",
    "/dashboard/show-skills",
    "/dashboard/add-framework",
    "/dashboard/show-frameworks",
    "/dashboard/add-language",
    "/dashboard/show-languages",
  ],
};
