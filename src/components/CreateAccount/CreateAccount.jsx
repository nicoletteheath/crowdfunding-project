import React, { useState } from "react";
import { useHistory } from "react-router-dom";

    function CreateAccount() {

        const [credentials, setCredentials] = useState({
            username: "",
            email: "",
            password: "",
        });
        const history = useHistory();

        const handleChange = (e) => {
            const { id, value } = e.target;
            setCredentials((prevCredentials) => ({
            ...prevCredentials,
            [id]: value,
            }));
        };


        const postData = async () => {
            const response = await fetch(`${process.env.REACT_APP_API_URL}users/`, {
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(credentials),
            }
            );
            return response.json();
        };
    
        const handleSubmit = (e) => {
            e.preventDefault();
            if (credentials.username && credentials.password) {
                postData().then((response) => {
                    window.localStorage.setItem("token", response.token);
                    history.push("/");
                })
                .catch((error) => {
                    alert("username taken");
            });
            }
        };

        return (
            <form>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" placeholder="Enter username" onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" placeholder="Email" onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" placeholder="Password" onChange={handleChange}/>
                </div>
                <button type="submit" onClick={handleSubmit}>
                    Create Account
                </button>
            </form>
        );
    }

    export default CreateAccount;