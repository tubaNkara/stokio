import React from "react";
import { useDispatch } from "react-redux";
import { fetchFail, fetchStart } from "../features/authSlice";
import axios from "axios";

const RegisterCall = () => {
  const dispatch = useDispatch();

  const register = async (userInfo) => {
    dispatch(fetchStart());

    try {
      const { data } = await axios.post(
        "",
        userInfo
      );
    } catch (error) {
      dispatch(fetchFail());
    }
  };
};

export default registerCall;
