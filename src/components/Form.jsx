import React from "react";
class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      errors: {
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
      }
    };
  }
  validateEmail = (email) => {
    return email.includes("@") && email.includes(".");
  };
  validatePassword = (password) => {
    return password.length >= 8;
  };
  handleChange = (e, field) => {
    const value = e.target.value;
    this.setState({
      [field]: value,
      errors: {
        ...this.state.errors,
        [field]: value.trim() === "" ? `${field} is required` : ""
      }
    });
  };
  validation = (event) => {
    event.preventDefault();
    const { firstName, lastName, username, email, password, confirmPassword } = this.state;
    const errors = {
      firstName: firstName.trim() === "" ? "First name is required" : "",
      lastName: lastName.trim() === "" ? "Last name is required" : "",
      username: username.trim() === "" ? "Username is required" : "",
      email: !this.validateEmail(email) ? "Invalid email address" : "",
      password: !this.validatePassword(password) ? "Password should be at least 8 characters" : "",
      confirmPassword: password !== confirmPassword ? "Passwords do not match" : ""
    };

    if (Object.values(errors).some((error) => error !== "")) {
      this.setState({ errors });
      window.alert("There are validation errors. Please check the form.");
      return;
    }
    window.alert("Signup successful!");
    this.setState({
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      errors: {
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
      }
    });
  };
  render() {
    return (
      <React.Fragment>
        <div className="container d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
          <form className="mt-5" style={{ width: "300px", margin: "15px" }} onSubmit={this.validation}>
            <h3>Sign Up</h3>
            <div className="mb-3">
              <label>First name</label>
              <input type="text" className="form-control" placeholder="First name" value={this.state.firstName} onChange={(e) => this.handleChange(e, "firstName")} />
              {this.state.errors.firstName && (<div className="text-danger">{this.state.errors.firstName}</div>)}
            </div>
            <div className="mb-3">
              <label>Last name</label>
              <input type="text" className="form-control" placeholder="Last name" value={this.state.lastName} onChange={(e) => this.handleChange(e, "lastName")} />
              {this.state.errors.lastName && (<div className="text-danger">{this.state.errors.lastName}</div>)}
            </div>
            <div className="mb-3">
              <label>Email address</label>
              <input type="email" className="form-control" placeholder="Enter email" value={this.state.email} onChange={(e) => this.handleChange(e, "email")} />
              {this.state.errors.email && (<div className="text-danger">{this.state.errors.email}</div>)}
            </div>
            <div className="mb-3">
              <label>Password</label>
              <input type="password" className="form-control" placeholder="Enter password" value={this.state.password} onChange={(e) => this.handleChange(e, "password")} />
              {this.state.errors.password && (<div className="text-danger">{this.state.errors.password}</div>)}
            </div>
            <div className="mb-3">
              <label>Confirm Password</label>
              <input type="password" className="form-control" placeholder="Confirm password" value={this.state.confirmPassword} onChange={(e) => this.handleChange(e, "confirmPassword")} />
              {this.state.errors.confirmPassword && (<div className="text-danger">{this.state.errors.confirmPassword}</div>)}
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-primary">Sign Up</button>
            </div>
            <p className="forgot-password text-right">Already registered <a href="/sign-in">sign in?</a></p>
          </form>
        </div>
      </React.Fragment>
    );
  }
}
export default Form;