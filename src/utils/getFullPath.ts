import { PATH_ENUM } from "../types/routeEnum";

//the order of the route will be UPDATED here, and router.tsx will follow.
export const parentPaths: string[] = [
  "/",
  `${PATH_ENUM.ABOUT}`,
  `${PATH_ENUM.PROJECTS}`,
];

export const routePaths: string[] = [
  `${PATH_ENUM.ROUTE}`,
  `${PATH_ENUM.STATE_MANAGEMENT}`,
  `${PATH_ENUM.GRAPHQL}`,
  `${PATH_ENUM.CUSTOM_BACKGROUND}`,
];
