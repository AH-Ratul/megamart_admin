import { useGetMeQuery } from "@/redux/api/user_api";
import { setUser } from "@/redux/slice/authSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const AuthProvider = ({ children }) => {
  const dispatch = useDispatch();
  const { data: userData, isLoading } = useGetMeQuery();

  useEffect(() => {
    if (userData) {
      const user = userData.data;
      dispatch(setUser(user));
    }
  }, [userData, dispatch]);

  if (isLoading) {
    return <>Loading..</>;
  }

  return <>{children}</>;
};

export default AuthProvider;
