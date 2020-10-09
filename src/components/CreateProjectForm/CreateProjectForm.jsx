import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./CreateProjectForm.css";

    function CreateProject() {

        const [credentials, setCredentials] = useState({
            title: "",
            description: "",
            goal: 0,
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


        const postData = async () => {
            const response = await fetch(`${process.env.REACT_APP_API_URL}projects/`, {
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `token ${token}`,
                },
                body: JSON.stringify(credentials),
            }
            );

            // const data = await response.json()
            // window.localStorage.setItem("token", data.token)
            
            return response.json();
        };


    
        const handleSubmit = (e) => {
            e.preventDefault();
            if (true
                ) {
                postData().then((response) => {
                    // window.localStorage.setItem("token", response.token);
                    history.push("/");
                })
                .catch((error) => {
                    alert("you haven't filled in all criteria");
            });
            }
        };

        return (
            <form>
                <div class="form-item">
                    <label htmlFor="title">Title:</label>
                    <input type="text" id="title" placeholder="Enter Title" onChange={handleChange}/>
                </div>
                <div class="form-item">
                    <label htmlFor="description">Description:</label>
                    <input type="description" id="description" placeholder="description" onChange={handleChange} value={credentials.description}/>
                </div>
                <div class="form-item">
                    <label htmlFor="goal">Goal:</label>
                    <input type="goal" id="goal" placeholder="Goal" onChange={handleChange} value={credentials.goal}/>
                </div>
                <div class="form-item">
                    <label htmlFor="image">Image:</label>
                    <input type="image" id="image" placeholder="Image" onChange={handleChange} value={credentials.image}/>
                </div>
                <div class="form-item"> 
                    <label htmlFor="is_open">Project Open:</label>
                    <input type="is_open" id="is_open" placeholder="is_open" onChange={handleChange} value={credentials.is_open}/>
                </div>
                <div class="form-item">
                    <label htmlFor="date_created">Date Created:</label>
                    <input type="date_created" id="date_created" placeholder="date_Created" onChange={handleChange} value={credentials.date_created}/>
                </div>
                <button class="submit-button" type="submit" onClick={handleSubmit}>
                    Create Project
                </button>
            </form>
        );
    }

    export default CreateProject;