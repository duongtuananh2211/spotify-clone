import { IRoute } from "interfaces";
import { Home, Login } from "views";

const routes: IRoute[] = [
  {
    path: "/",
    component: Home,
    private: true,
    name: "Home",
  },
  {
    path: "/login",
    component: Login,
    private: true,
    name: "Login",
  },
];

export default routes;
