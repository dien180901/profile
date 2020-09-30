import React from 'react'
import {Redirect,Route} from "react-router-dom";
const ProtectedRoute = (props) => {
    if (false) {
        return <Route {...props} />;
      } else {
        return <Redirect to="/login" />;
      }
}

export default ProtectedRoute
