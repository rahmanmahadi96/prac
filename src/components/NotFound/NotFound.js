import React from 'react';
import { Link } from 'react-router-dom';


const NotFound = () => {
    return (
        <div className="error p-5 container text-center ">
            
            <h1>404</h1>
            <h1>Not Found</h1>
            <Link to="/home" className="btn btn-primary">Back to Homepage</Link>
            
        </div>
    );
};

export default NotFound;