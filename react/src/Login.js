import React, { useState } from "react";
import axios from "axios";

function Login() {
    const [loginInput, setLogin] = useState({
    email: "",
    password: "",
    error_list: [],
  });

  const handleInput = (e) => {
    e.persist();
    setLogin({ ...loginInput, [e.target.name]: e.target.value });
  };

  const loginSubmit = (e) => {
    e.preventDefault();

    const data = {
      email: loginInput.email,
      password: loginInput.password,
    };

    axios.get('/sanctum/csrf-cookie').then(response => {
    axios.post(`api/login`, data).then((res) => {

    if (res.data.status === 200) {
        localStorage.setItem('auth_token', res.data.token);
        localStorage.setItem('auth_name', res.data.username);
    }
    else
    {
        setLogin({ ...loginInput, error_list: res.data.validation_errors});
    }
    });
});
}


  return (
    <div>
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <h1>Login</h1>
              </div>
              <div className="card-body">
                <form onSubmit={loginSubmit}>
                  <div className="form-group mb-3">
                    <label>E-mail</label>
                    <input
                      type="email"
                      name="email"
                      onChange={handleInput}
                      value={loginInput.email}
                      className="form-control"
                      placeholder="Enter your E-mail"
                    />
                    <span>{loginInput.error_list.email}</span>
                  </div>
                  <div className="form-group mb-3">
                    <label>password</label>
                    <input
                      type="password"
                      name="password"
                      onChange={handleInput}
                      value={loginInput.password}
                      className="form-control"
                      placeholder="Enter your password"
                    />
                    <span>{loginInput.error_list.password}</span>
                  </div>
                  <div className="form-group mb-3">
                    <button type="submit" className="btn btn-primary">
                      Login
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
