import React from "react";
import "./Registration.css";
function Registration() {
  return (
    <div className="login-page">
      <form className="login-form d-flex flex-column row-gap-2 justify-content-center">
        <h1>Please Register</h1>

        <div className="form-floating">
          <input
            type="text"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
          ></input>
          <label htmlFor="floatingPassword">Use Name</label>
        </div>

        <div className="form-floating">
          <input
            type="tel"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
          ></input>
          <label htmlFor="floatingPassword">Phone Number</label>
        </div>

        <div className="form-floating">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          ></input>
          <label htmlFor="floatingInput">Email address</label>
        </div>

        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
          ></input>
          <label htmlFor="floatingPassword">Password</label>
        </div>

        <button className="btn btn-success w-100 ">SignUp</button>
      </form>
    </div>
  );
}

export default Registration;
