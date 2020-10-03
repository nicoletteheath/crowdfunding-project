import React, { useState } from "react";
import { useHistory } from "react-router-dom";

    function DeleteProject() {

        const [credentials, setCredentials] = useState({
            title: "",
            description: "test description",
            goal: 150,
            image: "http://lorempixel.com/400/400/nightlife",
            is_open: true,
            date_created: "2020-09-04T11:33:37Z",
        });
        const history = useHistory();
        const token = window.localStorage.getItem("token");

        const handleChange = (e) => {
            const { id, value } = e.target;
            setCredentials((prevCredentials) => ({
            ...prevCredentials,
            [id]: value,
            }));
        };


        const deleteData = async () => {
            const response = await fetch(`${process.env.REACT_APP_API_URL}projects/${id}`, {
                method: "delete",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `token ${token}`,
                },
                body: JSON.stringify(credentials),
            }
            );           
            return response.json();
        };


    
        const handleSubmit = (e) => {
            e.preventDefault();
                { deleteData().then((response) => {
                    history.push("/");
                },
            },
        };

        return (
         <h1>Your Project has been deleted</h1>
        );
    }

    export default DeleteProject;