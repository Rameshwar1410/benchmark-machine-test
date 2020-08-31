import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const AddStudent = () => {
  let history = useHistory();
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    pocket_money: "",
    email: "",
    password: "",
    age: "",
    city: "",
    zip: "",
    state: "",
    country: "",
  });

  // handle onchange
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // handle form submission
  const onSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost/studentApi/api/addStudent", {
      method: "post",
      body: JSON.stringify(user),
    })
      .then(async (response) => {
        const data = await response.json();
        if (!response.ok) {
          const error = (data && data.message) || response.status;
          alert(error);
          return Promise.reject(error);
        }

        alert(data.message);
        history.push("/listStudent");
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  };

  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add Student</h2>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="form-group row">
            <label htmlFor="staticEmail" className="col-sm-3 col-form-label">
              first name
            </label>
            <div className="col-sm-9">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Your first name"
                name="first_name"
                value={user.first_name}
                onChange={(e) => onInputChange(e)}
                required
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="staticEmail" className="col-sm-3 col-form-label">
              Last name
            </label>
            <div className="col-sm-9">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Your last name"
                name="last_name"
                value={user.last_name}
                onChange={(e) => onInputChange(e)}
                required
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="staticEmail" className="col-sm-3 col-form-label">
              Email
            </label>
            <div className="col-sm-9">
              <input
                type="email"
                className="form-control"
                placeholder="Enter Your E-mail Address"
                name="email"
                value={user.email}
                onChange={(e) => onInputChange(e)}
                required
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="staticEmail" className="col-sm-3 col-form-label">
              pocket money
            </label>
            <div className="col-sm-9">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Your pocket money"
                name="pocket_money"
                value={user.pocket_money}
                onChange={(e) => onInputChange(e)}
                required
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="staticEmail" className="col-sm-3 col-form-label">
              Password
            </label>
            <div className="col-sm-9">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Your password"
                name="password"
                value={user.password}
                onChange={(e) => onInputChange(e)}
                required
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="staticEmail" className="col-sm-3 col-form-label">
              Age
            </label>
            <div className="col-sm-9">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Your age"
                name="age"
                value={user.age}
                onChange={(e) => onInputChange(e)}
                required
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="staticEmail" className="col-sm-3 col-form-label">
              City
            </label>
            <div className="col-sm-9">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Your city"
                name="city"
                value={user.city}
                onChange={(e) => onInputChange(e)}
                required
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="staticEmail" className="col-sm-3 col-form-label">
              State
            </label>
            <div className="col-sm-9">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Your state"
                name="state"
                value={user.state}
                onChange={(e) => onInputChange(e)}
                required
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="staticEmail" className="col-sm-3 col-form-label">
              Zip
            </label>
            <div className="col-sm-9">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Your zip"
                name="zip"
                value={user.zip}
                onChange={(e) => onInputChange(e)}
                required
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="staticEmail" className="col-sm-3 col-form-label">
              country
            </label>
            <div className="col-sm-9">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Your country"
                name="country"
                value={user.country}
                onChange={(e) => onInputChange(e)}
                required
              />
            </div>
          </div>{" "}
          <button className="btn btn-primary">Add student</button>
        </form>
      </div>
    </div>
  );
};

export default AddStudent;
