import Loader from "@/components/Shared/Loader/Loader";
import Modal from "@/components/Shared/Modal/Modal";
import { useGetMeQuery } from "@/redux/api/user_api";
import { setUser } from "@/redux/slice/authSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const AuthProvider = ({ children }) => {
  const dispatch = useDispatch();
  const { data: userData, isLoading } = useGetMeQuery();
  const { loading } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userData) {
      const user = userData.data;
      dispatch(setUser(user));
    }
  }, [userData, dispatch]);

  if (isLoading || loading) {
    return <Modal modal={<Loader color="black" size="70px" />} />;
  }

  return <>{children}</>;
};

export default AuthProvider;
