import { PATH_ENUM } from "../types/routeEnum";

//the order of the route will be UPDATED here, and router.tsx will follow.
export const parentPaths: string[] = [
  "",
  `${PATH_ENUM.ABOUT}`,
  `${PATH_ENUM.PROJECTS}`,
];

export const projectPaths: string[] = [
  `${PATH_ENUM.ROUTE}`,
  `${PATH_ENUM.CUSTOM_BACKGROUND}`,
  `${PATH_ENUM.GRAPHQL_GITHUB}`,
];

//console.log(`${parentPaths[2]}/${routePaths[3]}`);
// script for user to click Next and Back, then it have to redirect to it previous path, or next path in order (not -1 or 1)