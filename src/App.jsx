import React from "react";
import { Route, Routes } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Home from "./Home";
import Navbar from "./Navbar";
import Service from "./Service";

const App = () => {
    return (<>
        <div className="allButFooter">
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/service' element={<Service />} />
                <Route path='*' element={<Home />} />
            </Routes>
        </div>
        <Footer />
    </>);
};

export default App;