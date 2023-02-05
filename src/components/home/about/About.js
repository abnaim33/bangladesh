import React from 'react'
import './About.css';
import bdMap from '../../../images/bdMap.png'
function About() {
    return (
        <div className="home about">
            <div className="row container">
                <div className="about_div_left">
                    <img src={bdMap} alt="" />
                </div>
                <div className="about_div_right">
                    <h1>About Bangladesh</h1>
                    <h4 className="mt-4 mb-4">Country in South Asia</h4>
                    <p>Bangladesh, to the east of India on the Bay of Bengal, is a South Asian country marked by lush greenery and many waterways. Its Padma (Ganges), Meghna and Jamuna rivers create fertile plains, and travel by boat is common. On the southern coast, the Sundarbans, an enormous mangrove forest shared with Eastern India, is home to the royal Bengal tiger.</p>
                </div>
            </div>
        </div>
    )
}

export default About
