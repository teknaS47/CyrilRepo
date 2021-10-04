import * as React from "react";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@mui/styles";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../form.css";
import { Button } from "@mui/material";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/action";

const useStyles = makeStyles({
  form: {
    // width: "50%",
    // margin: "5% 0 0 25%",
    // "& > *": {
    //   margin: "20px ",
    
  "& * >":{
        backgroundColor:'green'
  }
  },
});

const initialValues = {
  name: "",
  email: "",
  age: "",
  gender: "",
  company: "",
};

const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Name is required"),
  email: Yup.string()
    .email("Invalid Email Format")
    .required("Email is required"),
  age: Yup.number()
  .integer().required("Age is required"),
});

export default function AddUser() {
  const classes = useStyles();
  const history = useHistory();
  let dispatch = useDispatch();
  const onSubmit = (values) => {
    console.log("Values are ", values);
    dispatch(addUser(values));
    history.push("/");
  };
  return (
    <div
      style={{ textAlign: "center", display: "flex", justifyContent: "center" }}
    >
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className={classes.form}>
          <h2>Add User</h2>
          <label htmlFor="name">Name</label>
          <Field
            fullWidth
            styles={{ margin: "100px" }}
            type="text"
            name="name"
            id="name"
          />
          <ErrorMessage name="name">
            {(errorMsg) => <div className="error">{errorMsg}</div>}
          </ErrorMessage>
          <label htmlFor="email">Email</label>
          <Field type="text" name="email" label="Email" id="email" />
          <ErrorMessage name="email">
            {(errorMsg) => <div className="error">{errorMsg}</div>}
          </ErrorMessage>
          <label htmlFor="age">Age</label>
          <Field style={{  width: "100%" ,height:"35px" ,border:"1px solid #d9d9d9" ,borderRadius:"5px"}} type="number" name="age" id="age" />
          <ErrorMessage name="age">
            {(errorMsg) => <div className="error">{errorMsg}</div>}
          </ErrorMessage>
          <label htmlFor="gender">Gender</label>
          <Field type="text" name="gender" id="gender" />
          <ErrorMessage name="gender">
            {(errorMsg) => <div className="error">{errorMsg}</div>}
          </ErrorMessage>{" "}
          <label htmlFor="company">Company Name</label>
          <Field type="text" name="company" id="company" />
          <ErrorMessage name="company">
            {(errorMsg) => <div className="error">{errorMsg}</div>}
          </ErrorMessage>
          <Button
            style={{ width: "40%", margin: "15px" }}
            variant="contained"
            type="submit"
          >
            Submit
          </Button>
          <Button
            color="secondary"
            variant="contained"
            onClick={() => history.push("/")}
            style={{ width: "40%", margin: "15px" }}
          >
            Go Back
          </Button>
        </Form>
      </Formik>
    </div>
  );
}
