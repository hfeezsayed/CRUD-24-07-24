import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const navigate = useNavigate();

  const changeHandler = (e) => {
    const value = e.target.value;
    setValues({
      ...values,
      [e.target.name]: value,
    });
  };

  const submitHandle = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/users", values)
      .then((res) => {
        setValues(res);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
      <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
        <h1>Add a User</h1>
        <form onSubmit={submitHandle}>
          <div className="mb-2">
            <label className="form-label">Name</label>
            <input
              type="name"
              name="name"
              value={values.name}
              className="form-control"
              placeholder="Enter Name..."
              onChange={changeHandler}
            />
          </div>
          <div className="mb-2">
            <label className="form-label">Email</label>
            <input
              type="email"
              name="email"
              value={values.email}
              className="form-control"
              placeholder="Enter email..."
              onChange={changeHandler}
            />
          </div>
          <div className="mb-2">
            <label className="form-label">Phone</label>
            <input
              type="phone"
              name="phone"
              value={values.phone}
              className="form-control"
              placeholder="Enter phone..."
              onChange={changeHandler}
            />
          </div>

          <button type="submit" className="btn btn-success ">
            Submit
          </button>
          <button type="button" className="btn btn-primary mx-3">
            Back
          </button>
        </form>
      </div>
    </div>
  );
};

export default Create;
