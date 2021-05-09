import { useRoutes } from "contexts/RouteContext";
import { IRoute } from "interfaces";
import React from "react";
import { Route, Switch } from "react-router-dom";

interface IProps {}
interface IPrivateRoute extends IRoute {}

const PrivateRoute: React.FC<IPrivateRoute> = ({ component: C }) => {
  return <C />;
};

const RouterView: React.FC<IProps> = () => {
  const routes = useRoutes();
  return (
    <>
      <Switch>
        {routes.map(
          ({ component: Component, path, private: Private, name = "" }) => (
            <Route
              key={path}
              exact={true}
              path={path}
              render={() => {
                document.title = `${name} - Spotify Clone`;

                return Private ? (
                  <PrivateRoute name={name} path={path} component={Component} />
                ) : (
                  <Component />
                );
              }}
            />
          )
        )}
      </Switch>
    </>
  );
};

export default RouterView;
