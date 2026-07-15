import React, { useState } from 'react'
import axios from 'axios'
import NavigationBar from './NavigationBar'

const CreatePost = () => {

    const [input, changeInput] = useState(
        {
            message: "",
            userId: localStorage.getItem("userId")
        }
    )

    const inputHandler = (event) => {
        changeInput({
            ...input,
            [event.target.name]: event.target.value
        })
    }

    const readValues = () => {

        axios.post(
            "http://localhost:3030/create-post",
            input,
            {
                headers: {
                    token: localStorage.getItem("token")
                }
            }
        ).then(
            (response) => {

                if (response.data.status === "success") {

                    alert("Post Created Successfully")

                    changeInput({
                        message: "",
                        userId: localStorage.getItem("userId")
                    })

                }
                else {

                    alert(response.data.status)

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

                <div className="row justify-content-center mt-5">

                    <div className="col col-12 col-sm-10 col-md-8 col-lg-6">

                        <div className="card shadow">

                            <div className="card-header bg-primary text-white text-center">
                                <h3>Create Post</h3>
                            </div>

                            <div className="card-body">

                                <div className="mb-3">

                                    <label className="form-label">
                                        What's on your mind?
                                    </label>

                                    <textarea
                                        className="form-control"
                                        rows="5"
                                        name="message"
                                        value={input.message}
                                        onChange={inputHandler}
                                    ></textarea>

                                </div>

                                <div className="d-grid">

                                    <button
                                        className="btn btn-primary"
                                        onClick={readValues}
                                    >
                                        CREATE POST
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

export default CreatePost