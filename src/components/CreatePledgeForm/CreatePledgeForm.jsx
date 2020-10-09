import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import "./CreatePledgeForm.css";

    function CreatePledge() {
        const {id} = useParams()
        const [credentials, setCredentials] = useState({
            amount: 50,
            comment: "What a great project!",
            anonymous: false,
            supporter: "",
            project_id: id
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
            const response = await fetch(`${process.env.REACT_APP_API_URL}pledges/`, {
                method: "post",
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
                    <label htmlFor="amount">Amount:</label>
                    <input type="text" id="amount" placeholder="Enter Amount" onChange={handleChange} value={credentials.amount}/>
                </div>
                <div class="form-item">
                    <label htmlFor="comment">Comment:</label>
                    <input type="text" id="comment" placeholder="comment" onChange={handleChange} value={credentials.comment}/>
                </div>
                <div class="form-item">
                    <label htmlFor="anonymous">Remain Anonymous?:</label>
                    <input type="anonymous" id="anonymous" placeholder="anonymous" onChange={handleChange} value={credentials.anonymous}/>
                </div>
                <div class="form-item">
                    <label htmlFor="supporter">Supporter:</label>
                    <input type="supporter" id="supporter" placeholder="enter username" onChange={handleChange} value={credentials.supporter}/>
                </div>
                <button class="submit-button" type="submit" onClick={handleSubmit}>
                    Create Pledge
                </button>
            </form>
        );
    }

    export default CreatePledge;