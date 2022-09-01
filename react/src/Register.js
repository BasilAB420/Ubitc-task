import React from "react";
import { useState } from "react";
import axios from 'axios';


function Register()
{
    const [registerInput, setRegister] = useState({
        name: '',
        email: '',
        password: '',
    });

    const handleInput = (e)=>{
        e.persist();
        setRegister({...registerInput, [e.target.name]: e.target.value});
    }

    const registerSubmit = (e)=>
    {
        e.preventDefault();

        const api = {
            name: registerInput.name,
            email: registerInput.email,
            password: registerInput.password,
        };
        console.log(data.email);

        async function registerdata(){
        const res = await axios.post(`http://127.0.0.1:8000/api/register`, api);

            return res;
        }
        registerdata();
    }

        const data = {
            name: registerInput.name,
            email: registerInput.email,
            password: registerInput.password,
        }

    return (
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">
                            <h1>Register</h1>
                        </div>
                        <div className="card-body">
                            <form onSubmit={registerSubmit}>
                                <div className="form-group mb-3">
                                    <label>Full name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        onChange={handleInput}
                                        value={registerInput.name}
                                        className="form-control"
                                        placeholder="Enter your full name"
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <label>E-mail</label>
                                    <input
                                        type="email"
                                        name="email"
                                        onChange={handleInput}
                                        value={registerInput.email}
                                        className="form-control"
                                        placeholder="Enter your E-mail"
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <label>password</label>
                                    <input
                                        type=""
                                        name="password"
                                        onChange={handleInput}
                                        value={registerInput.password}
                                        className="form-control"
                                        placeholder="Enter your password"
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <button type="submit" className="btn btn-primary">
                                        Register
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
