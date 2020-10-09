import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav/Nav";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import LoginPage from "./pages/LoginPage";
import CreateAccountPage from "./pages/CreateAccountPage";
import CreateProjectPage from "./pages/CreateProjectPage";
import EditProjectPage from  "./pages/EditProjectPage";
import CreatePledgePage from "./pages/CreatePledgePage";
import LogoImage from "./components/Logo/Logo.png";


function App() {
    return (    
        <Router>
            <div class="front-page">
                <div class="front-page-image">
                    <img src={LogoImage} style={{ height: "200px" }}></img>
                </div>
                <div>
                    <Nav />
                        <Switch>
                            <Route path="/project/:id">
                                <ProjectPage />
                            </Route>
                            <Route path="/login">
                                <LoginPage />
                            </Route>
                            <Route path="/users">
                                <CreateAccountPage />
                            </Route>
                            <Route path="/createprojects">
                                <CreateProjectPage />
                            </Route>
                            <Route path="/editprojects/:id">
                                <EditProjectPage />
                            </Route>
                            <Route path="/createpledge/:id">
                                <CreatePledgePage />
                            </Route>
                            <Route exact path="/">
                                <HomePage />
                            </Route>
                        </Switch>
                </div>
            </div>
        </Router>
    );
}                  

export default App;