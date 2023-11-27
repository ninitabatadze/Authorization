import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Page from "./components/Page";
import Form from "./components/Form";
import "./index.css";
import LoginForm from "./components/LoginForm";
import Dashboard from "./components/Dashboard";
class App extends Component {
  render() {
    return (
      <Fragment>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/page" element={<Page />} />
            <Route path="/authorization" element={<Form />} />
            <Route path="/next" element={<LoginForm />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </Router>
      </Fragment>
    );
  }
}
function Home() {
  return <Page />;
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
