import React from 'react'
import './OurPhilosophy.css';
import Philosophy from '../../../images/philosophy.jpg'
function OurPhilosophy() {
    return (
        <div className="home">
            <h1 className="philosophy_header mt-5 text-center">Our Philosophy</h1>
            <div className="philosophy_row container">
                <div className="philosophy_div_left">
                    <img src={Philosophy} alt="" />
                </div>
                <div className="philosophy_div_right">
                    <div className="philosophy_div_right1">
                        <h3>Lorem, ipsum dolor.</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum, fugiat?
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        </p>
                    </div>
                    <div className="philosophy_div_right2">
                        <h3>Lorem, ipsum dolor.</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum, fugiat?
                        Lorem, ipsum dolor sit amet consectetur adipisici
                        </p>
                    </div>
                    <div className="philosophy_div_right3">
                        <h3>Lorem, ipsum dolor.</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum, fugiat?
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum, fugiat?
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurPhilosophy
