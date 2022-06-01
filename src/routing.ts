import { IRoute } from "interfaces";
import DefaultLayout from "layouts/DefaultLayout";
import { Home, Login, ListDetail } from "views";

const routes: IRoute[] = [
  {
    path: "/login",
    component: Login,
    private: true,
    name: "Login",
  },
  {
    path: "/",
    component: DefaultLayout,
    private: true,
    name: "",
    children: [
      {
        path: "/",
        component: Home,
        name: "Home",
      },
      {
        path: "/list/:id",
        component: ListDetail,
        name: "ListDetail",
      },
    ],
  },
];

export default routes;
