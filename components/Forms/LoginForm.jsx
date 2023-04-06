import { loginUser } from "@/redux/auth/action-creators";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { setCookie } from "cookies-next";
import * as Yup from "yup";
import { useState } from "react";
import { setShowJoinModal } from "@/redux/joinModalSlice";
import { FormattedMessage } from 'react-intl';
const LoginForm = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
  });

  const handleSubmit = (values) => {
    setLoading(true);
    var axios = require("axios");
    var data = JSON.stringify({
      email: values.email,
      password: values.password,
    });

    var config = {
      method: "post",
      url: "https://gleaming-erin-nematode.cyclic.app/api/auth/logIn",
      headers: {
        Authorization: "Bearer {{jwt}}",
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        setCookie("token", response.data.token);
        dispatch(loginUser(response.data.user));
        setLoading(false);
        dispatch(setShowJoinModal(false));
      })
      .catch(function (error) {
        console.log(error);
        setLoading(false);
      });
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <div>
              <Field
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                className="focus:outline-none border border-gray-500 p-2 rounded-lg w-full mt-1"
              />
              <div className="text-xs">
                <ErrorMessage name="email" />
              </div>
            </div>
            <div>
              <Field
                id="password"
                name="password"
                type="password"
                placeholder="Password"
                className="focus:outline-none border border-gray-500 p-2 rounded-lg w-full mt-1"
              />
              <div className="text-xs">
                <ErrorMessage name="password" />
              </div>
            </div>
            <button
              type="submit"
              className="bg-danger font-bold py-2 px-2 w-[274px] mt-2 rounded-lg"
            >
              {loading ? <FormattedMessage id="Loading"/> : <FormattedMessage id="Login"/>}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
