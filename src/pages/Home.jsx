// import React from 'react';

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import About from "./About";
import Contract from "./Contract";
import Project from "./Project";


const Home = () => {
    return (
        <div className="bg-gray-700">
            <Navbar></Navbar>
            <About></About>
            <Project></Project>
            <Contract></Contract>
            <Footer></Footer>
        </div>
    );
};

export default Home;