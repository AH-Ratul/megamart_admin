import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

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
  },
]);

export default router;
