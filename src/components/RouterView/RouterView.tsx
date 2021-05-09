import { useRoutes } from "contexts/RouteContext";
import { IRoute } from "interfaces";
import RouteProvider from "providers/RouteProvider";
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
          ({
            component: Component,
            path,
            private: Private,
            name = "",
            children,
          }) => (
            <Route
              key={path}
              exact={!Boolean(children?.length)}
              path={path}
              render={() => {
                document.title = `${name} - Spotify Clone`;

                return Private ? (
                  <RouteProvider routes={children || []}>
                    <PrivateRoute
                      name={name}
                      path={path}
                      component={Component}
                    />
                  </RouteProvider>
                ) : (
                  <RouteProvider routes={children || []}>
                    <Component />
                  </RouteProvider>
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
