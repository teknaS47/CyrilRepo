import * as React from "react";
import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@mui/styles";
import { Button } from "@mui/material";
import { useHistory } from "react-router";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { addUser, getSingleUser, updateUser } from "../redux/action";
import "../form.css";

const useStyles = makeStyles({
  form: {
    width: "50%",
    margin: "5% 0 0 25%",
    "& > *": {
      margin: "20px ",
    },
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
  age: Yup.number().integer().required("Age is required"),
});

export default function EditUser() {
  const classes = useStyles();
  const [state, setState] = useState("");
  const history = useHistory();
  let dispatch = useDispatch();
  const { id } = useParams();
  console.log("STATE IS ", state);
  const { user } = useSelector((state) => state.data);
  const [user, setUser] = useState("")
  setUser(state.data);

  console.log("USERRRR", user);
  useEffect(() => {
    dispatch(getSingleUser(id));
  }, []);

  useEffect(() => {
    if (user) {
      setState({ ...user });
    }
  }, [user]);

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  console.log("STATE VAL : ", state);
  const onSubmit = (values) => {
    if (id === "add") {
      if (window.confirm("Are you sure you want to add new ? ")) {
        dispatch(addUser(values));
        history.push("/");
      }
    } else {
      if (window.confirm("Are you sure you want to save the changes ? ")) {
        dispatch(updateUser(values, id));
        history.push("/");
        console.log("GENDERRRR", values.gender);
      }
    }
  };

  return (
    <div
      style={{ textAlign: "center", display: "flex", justifyContent: "center" }}
    >
      <Formik
        initialValues={id !== "add" ? state : initialValues}
        validationSchema={validationSchema}
        onChange={handleInputChange}
        onSubmit={onSubmit}
        enableReinitialize
      >
        <Form>
          <h2>Edit User</h2>
          <label htmlFor="name">Name</label>
          <Field
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
          <Field
            style={{
              width: "100%",
              height: "35px",
              border: "1px solid #d9d9d9",
              borderRadius: "5px",
            }}
            type="number"
            name="age"
            id="age"
          />{" "}
          <ErrorMessage name="age">
            {(errorMsg) => <div className="error">{errorMsg}</div>}
          </ErrorMessage>
          <label htmlFor="gender">Gender</label>
          <Field type="text" name="gender" id="gender" />
          <ErrorMessage name="gender">
            {(errorMsg) => <div className="error">{errorMsg}</div>}
          </ErrorMessage>
          <label htmlFor="company">Company</label>
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

// const handleInputChange = (e) => {
//   let { name, value } = e.target;
//   setState({ ...state, [name]: value });
// };

// const handleSubmit = (e) => {
//   e.preventDefault();
//   if (!name || !email || !age || !gender || !company) {
//     setError("Please input all fields");
//   } else {
//     if (window.confirm("Are you sure you want to save the changes ? ")) {

//     dispatch(updateUser(state, id));
//     history.push("/");
//     }
//     setError("");
//   }
// };
// return (
//   <div style={{ textAlign: "center" }}>
//     <form onSubmit={handleSubmit} className={classes.form}>
//       <div>
//         <h1>Edit User</h1>
//       </div>
//       {error && <h2 style={{ color: "red" }}> {error}</h2>}
//       <TextField
//         fullWidth
//         styles={{ margin: "100px" }}
//         id="name"
//         label="Name"
//         value={name}
//         name="name"
//         variant="outlined"
//         onChange={handleInputChange}
//         style={{ paddingBottom: "15px" }}
//       />
//       <br />
//       <TextField
//         fullWidth
//         id="email"
//         label="Email"
//         value={email}
//         name="email"
//         variant="outlined"
//         onChange={handleInputChange}
//         style={{ paddingBottom: "15px" }}
//       />
//       <br />
//       <TextField
//         fullWidth
//         id="age"
//         label="Age"
//         name="age"
//         value={age}
//         variant="outlined"
//         onChange={handleInputChange}
//         style={{ paddingBottom: "15px" }}
//       />
//       <br />

//       <TextField
//         fullWidth
//         id="gender"
//         label="Gender"
//         name="gender"
//         value={gender}
//         variant="outlined"
//         onChange={handleInputChange}
//         style={{ paddingBottom: "15px" }}
//       />
//       <br />
//       <TextField
//         fullWidth
//         id="company"
//         label="Company Name"
//         name="company"
//         value={company}
//         variant="outlined"
//         onChange={handleInputChange}
//         style={{ paddingBottom: "15px" }}
//       />
//       <br />
//       <Button
//         style={{ width: "40%", margin: "15px" }}
//         variant="contained"
//         type="submit"
//       >
//         Update
//       </Button>
//       <Button
//         color="secondary"
//         variant="contained"
//         type="submit"
//         onClick={() => history.push("/")}
//         style={{ width: "40%",margin: "15px" }}
//       >
//         Go Back
//       </Button>
//     </form>
//   </div>
