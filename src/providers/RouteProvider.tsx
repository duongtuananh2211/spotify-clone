import RouteContext from "contexts/RouteContext";
import { IRoute } from "interfaces";
import React from "react";

interface IProps {
  routes: IRoute[];
}

const RouteProvider: React.FC<IProps> = ({ children, routes }) => {
  return (
    <>
      <RouteContext.Provider value={routes}>{children}</RouteContext.Provider>
    </>
  );
};

export default RouteProvider;
