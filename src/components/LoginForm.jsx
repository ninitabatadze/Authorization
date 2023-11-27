import React from "react";
import { Navigate } from "react-router-dom";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
      remember: false,
      errorMessage: "",
    };
  }
  setEmail = (event) => {
    this.setState({
      email: event.target.value,
    });
  };
  setPass = (event) => {
    this.setState({
      password: event.target.value,
    });
  };
  login = (event) => {
    event.preventDefault();
    if (!this.state.email || !this.state.password) {
      this.setState({
        errorMessage: "Username and password are required.",
      });
    } else {
      this.setState({
        errorMessage: "",
      });
      window.localStorage.setItem("email", this.state.email);
      window.localStorage.setItem("password", this.state.password);
      window.localStorage.setItem("loggedin", true);
    }
  };
  render() {
    return (
      <div className="container d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <form style={{ width: "300px", margin: "15px" }} onSubmit={(event) => this.login(event)}>
          <h2>Login</h2>
          {this.state.errorMessage && <div className="alert alert-danger">{this.state.errorMessage}</div>}
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input type="text"  className="form-control"  id="username"onChange={(event) => this.setEmail(event)} value={this.state.email} />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label"> Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              onChange={(event) => this.setPass(event)} value={this.state.password}
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="remember"

            />
            <label className="form-check-label" htmlFor="remember">
              Remember me
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
        {window.localStorage.getItem("loggedin") === "true" ? <Navigate to={"/dashboard"} /> : ""}
      </div>
    );
  }
}

export default LoginForm;
