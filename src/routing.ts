import { IRoute } from "interfaces";
import { Home } from "views";

const routes: IRoute[] = [
  {
    path: "/",
    component: Home,
    private: true,
  },
];

export default routes;
