import React from "react";
import web from "./images/main-img2.jpg"
import Common from "./Common";

const About = () => {
    return (<>
        <Common
            name="Welcome To About Page"
            imgsrc={web}
            visit="/contact"
            btnName="Contact Now"
        />
    </>);
};

export default About;