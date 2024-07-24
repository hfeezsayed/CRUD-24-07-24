import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const Update = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
  });

  // const [data, setData] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3000/users/" + id)
      .then((res) => {
        setValues(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:3000/users/" + id, values)
      .then((res) => {
        setValues(res);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
      <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
        <h1>Update User</h1>
        <form onSubmit={handleUpdate}>
          <div className="mb-2">
            <label className="form-label">Name</label>
            <input
              type="name"
              name="name"
              value={values.name}
              className="form-control"
              placeholder="Enter Name..."
              onChange={(e) => setValues({ ...values, name: e.target.value })}
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
              onChange={(e) => setValues({ ...values, email: e.target.value })}
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
              onChange={(e) => setValues({ ...values, phone: e.target.value })}
            />
          </div>

          <button className="btn btn-success ">Update</button>
          <Link to="/" type="button" className="btn btn-primary mx-3">
            Back
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Update;
