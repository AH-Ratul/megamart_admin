import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import AddProduct from "@/pages/AddProduct/AddProduct";
import MainPage from "@/components/Home/MainPage";
import ManageProducts from "@/pages/ManageProducts/ManageProducts";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/",
    element: (
      <PrivateRoute>
        <Main />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "addProduct",
        element: <AddProduct />,
      },
      {
        path: "manageProducts",
        element: <ManageProducts />,
      },
    ],
  },
]);

export default router;
