import React, { useState } from 'react'
import axios from 'axios'
import NavigationBar from './NavigationBar'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {

    const navigate = useNavigate()

    const [input, changeInput] = useState(
        {
            name: "",
            phone: "",
            email: "",
            password: ""
        }
    )

    const inputHandler = (event) => {
        changeInput({
            ...input,
            [event.target.name]: event.target.value
        })
    }

    const readValues = () => {

        axios.post("http://localhost:3030/signup", input).then(
            (response) => {

                if (response.data.satus === "success") {

                    alert("Registration Successful")
                    navigate("/")

                }
                else if (response.data.status === "email already exists") {

                    alert("Email Already Exists")

                }
                else {

                    alert("Something went wrong")

                }

            }
        ).catch(
            (error) => {
                console.log(error)
                alert("Server Error")
            }
        )

    }

    return (
        <div>

            <NavigationBar />

            <div className="container">

                <div className="row justify-content-center">

                    <div className="col col-12 col-sm-10 col-md-8 col-lg-6">

                        <div className="card shadow mt-5">

                            <div className="card-header bg-success text-white text-center">
                                <h3>Create Account</h3>
                            </div>

                            <div className="card-body">

                                <div className="mb-3">
                                    <label className="form-label">Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="name"
                                        value={input.name}
                                        onChange={inputHandler}
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Phone</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="phone"
                                        value={input.phone}
                                        onChange={inputHandler}
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        name="email"
                                        value={input.email}
                                        onChange={inputHandler}
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        name="password"
                                        value={input.password}
                                        onChange={inputHandler}
                                    />
                                </div>

                                <div className="d-grid">

                                    <button
                                        className="btn btn-success"
                                        onClick={readValues}
                                    >
                                        SIGN UP
                                    </button>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default SignUp