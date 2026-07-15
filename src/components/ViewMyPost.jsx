import React, { useEffect, useState } from 'react'
import axios from 'axios'
import NavigationBar from './NavigationBar'

const ViewMyPost = () => {

    const [data, changeData] = useState([])

    const fetchData = () => {

        let input = {
            userId: localStorage.getItem("userId")
        }

        axios.post(
            "http://localhost:3030/view-my-post",
            input,
            {
                headers: {
                    token: localStorage.getItem("token")
                }
            }
        ).then(
            (response) => {

                if (Array.isArray(response.data)) {

                    changeData(response.data)

                } else {

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

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>

            <NavigationBar />

            <div className="container mt-4">

                <div className="row">

                    <div className="col col-12">

                        <h2 className="text-center mb-4">My Posts</h2>

                        <table className="table table-bordered table-striped">

                            <thead className="table-dark">

                                <tr>
                                    <th>#</th>
                                    <th>Message</th>
                                    <th>Posted Date</th>
                                </tr>

                            </thead>

                            <tbody>

                                {
                                    data.map((value, index) => {

                                        return (

                                            <tr key={value._id}>

                                                <td>{index + 1}</td>
                                                <td>{value.message}</td>
                                                <td>{new Date(value.postedDate).toLocaleString()}</td>

                                            </tr>

                                        )

                                    })
                                }

                            </tbody>

                        </table>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default ViewMyPost