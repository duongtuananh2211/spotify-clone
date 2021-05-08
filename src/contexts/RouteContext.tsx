import { IRoute } from "interfaces";
import { createContext, useContext } from "react";

const RouteContext = createContext<IRoute[]>([]);

export const useRoutes = () => {
  return useContext(RouteContext);
};

export default RouteContext;
