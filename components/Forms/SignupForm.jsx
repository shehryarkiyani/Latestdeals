import { setShowJoinModal } from "@/redux/joinModalSlice";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import { FormattedMessage } from 'react-intl';
const SignupForm = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const initialValues = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm password is required"),
  });

  const handleSubmit = (values) => {
    console.log(values);
    setLoading(true);
    var axios = require("axios");
    var data = JSON.stringify({
      email: values.email,
      password: values.password,
      passwordConfirm: values.confirmPassword,
      username: values.username,
    });

    var config = {
      method: "post",
      url: "https://gleaming-erin-nematode.cyclic.app/api/auth/signUp",
      headers: {
        Authorization: "Bearer {{jwt}}",
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log("RES", response.data.status);
        setMessage("Sign up succeeded. A verfication email was sent. Please approve and login to continue!!!")
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
                id="username"
                name="username"
                placeholder="Username"
                type="text"
                className="focus:outline-none border border-gray-500 p-2 rounded-lg w-full mt-1"
              />
              <div className="text-xs">
                <ErrorMessage name="username" />
              </div>
            </div>
            <div>
              <Field
                id="email"
                name="email"
                placeholder="Email"
                type="email"
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
                placeholder="Password"
                type="password"
                className="focus:outline-none border border-gray-500 p-2 rounded-lg w-full mt-1"
              />
              <div className="text-xs">
                <ErrorMessage name="password" />
              </div>
            </div>
            <div>
              <Field
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm Password"
                type="password"
                className="focus:outline-none border border-gray-500 p-2 rounded-lg w-full mt-1"
              />
              <div className="text-xs">
                <ErrorMessage name="confirmPassword" />
              </div>
            </div>
            <button
              type="submit"
              className="bg-danger font-bold py-2 px-2 w-[274px] mt-2 rounded-lg"
            >
              {loading ? <FormattedMessage id="Loading"/> : <FormattedMessage id="Signup"/>}
            </button>
            {message != "" && (
              <div className="text-xs text-blue-800 mt-2 max-w-[274px]">{message}</div>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignupForm;
