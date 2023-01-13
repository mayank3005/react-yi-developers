import React from "react";
import { NavLink } from "react-router-dom";
import web from "./images/main-img.webp"
import Common from "./Common";

const Home = () => {
    return (<>
        <Common
            name="Grow your business with"
            imgsrc={web}
            visit="/service"
            btnName="Get Started"
        />
    </>);
};

export default Home;