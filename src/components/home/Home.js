import React from 'react'
import HeaderMain from './headerMain/HeaderMain';
import Activities from './activities/Activities'
import './Home.css'
import OurPhilosophy from './ourPhilosophy/OurPhilosophy';
import Apartments from './apartments/Apartments'
import About from './about/About';
function Home() {
    return (
        <div>
            <HeaderMain />
            <About />
            <Activities />
            <OurPhilosophy />
            {/* <Apartments /> */}
        </div>
    )
}

export default Home
