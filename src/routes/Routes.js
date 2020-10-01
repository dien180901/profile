import React from 'react'
import { Switch, Route } from "react-router-dom";
import Job from "../pages/Job";
import Login from "../pages/Login";
import JobDetail from "../pages/JobDetail";
import ProtectedRoute from "./ProtectedRoute";
import NotFound from "../pages/NotFound"
const Routes = () => {
    return (
    <Switch>
        <Route path="/" exact component={Job} />
        <Route path="/Login" exact component={Login} />
    
        <ProtectedRoute path="/jobs/:id" render ={(props)=><JobDetail name="dien"/>}/> 
        <Route path="*" component={NotFound}/>
    </Switch>
    );
};

export default Routes
