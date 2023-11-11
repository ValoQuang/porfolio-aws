import { PATH_ENUM } from "../types/routeEnum";

export const hierarchicalPathOrder = [
  "/",
  `/${PATH_ENUM.ABOUT}`,
  `/${PATH_ENUM.PROJECTS}`,
  `/${PATH_ENUM.PROJECTS}/${PATH_ENUM.ROUTE}`,  //projects/route
  `/${PATH_ENUM.PROJECTS}/${PATH_ENUM.CUSTOM_BACKGROUND}`,  //projects/custom-background
  `/${PATH_ENUM.PROJECTS}/${PATH_ENUM.GRAPHQL_GITHUB}`,
  // Add more paths as needed
];
