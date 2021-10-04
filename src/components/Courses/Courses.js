import React from 'react';
import DisplayCourses from '../DisplayCourses/DisplayCourses';
import Footer from '../Footer/Footer';
import MenuBar from '../MenuBar/MenuBar';

const Courses = () => {
    return (
        <div>
            <MenuBar></MenuBar>
            <DisplayCourses></DisplayCourses>
            <Footer></Footer>
        </div>
    );
};

export default Courses;