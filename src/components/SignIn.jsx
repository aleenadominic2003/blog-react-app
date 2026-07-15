import React, { useState } from 'react'
import axios from 'axios'
import NavigationBar from './NavigationBar'
import { useNavigate } from 'react-router-dom'

const SignIn = () => {

    const navigate = useNavigate()

    const [input, changeInput] = useState(
        {
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

        axios.post("http://localhost:3030/signIn", input).then(
            (response) => {

                if (response.data.status === "success") {

                    localStorage.setItem("token", response.data.token)
                    localStorage.setItem("userId", response.data.userId)

                    alert("Login Successful")
                    navigate("/create")

                } else if (response.data.status === "invalid email id") {

                    alert("Invalid Email")

                } else if (response.data.status === "invalid password") {

                    alert("Invalid Password")

                } else {

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

                        <div className="card mt-5 shadow">

                            <div className="card-header bg-primary text-white text-center">
                                <h3>Sign In</h3>
                            </div>

                            <div className="card-body">

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
                                        className="btn btn-primary"
                                        onClick={readValues}
                                    >
                                        LOGIN
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

export default SignIn