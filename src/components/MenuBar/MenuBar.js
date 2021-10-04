import React from 'react';
import { Link } from 'react-router-dom';

const MenuBar = () => {
    return (
    //     <div>
    //      <nav className="navbar navbar-expand-lg navbar-light bg-light">
    //   <div className="container">
    //     <div className="row">
    //       <div className="col-md-2">
    //         <div className="logo-img">
    //           <h1>Learn<span className="text-info">Bridge</span></h1>
    //         </div>
    //       </div>
    //       <div className="col-md-10">
    //         <div className="menu-container ">
    //           <ul className="navbar-nav">
    //             <Link to="/home" className="nav-item">
    //               <li>Home</li>
    //             </Link>
    //             <Link to="/about" className="nav-item">
    //               <li>About us</li>
    //             </Link>
    //             <Link to="/courses" className="nav-item">
    //               <li>Courses</li>
    //             </Link>
    //             <Link to="/faq" className="nav-item">
    //               <li>FAQ</li>
    //             </Link>
    //             <Link to="/contact" className="nav-item">
    //               <li>Contact us</li>
    //             </Link>
    //           </ul>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </nav>
    //     </div>

<nav className="navbar navbar-expand-lg navbar-light bg-light">
<div className="container-fluid">
  <h2>Learn<span className="text-info">Bridge</span></h2>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav ms-auto">
        <Link to="/home" className="nav-item text-decoration-none p-4">
              <li>Home</li>
        </Link>
        <Link to="/about" className="nav-item  text-decoration-none p-4">
              <li>About us</li>
        </Link>
        <Link to="/courses" className="nav-item text-decoration-none p-4">
              <li>Courses</li>
        </Link>
        <Link to="/faq" className="nav-item text-decoration-none p-4">
              <li>FAQs</li>
        </Link>
        <Link to="/contact" className="nav-item text-decoration-none p-4">
              <li>Contact us</li>
        </Link>
        <Link to="/contact" className="nav-item text-decoration-none p-4">
              <li className="btn btn-primary">Sign Up</li>
        </Link>
    </ul>
  </div>
</div>
</nav>
    );
};

export default MenuBar;