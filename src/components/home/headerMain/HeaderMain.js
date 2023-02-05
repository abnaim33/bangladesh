import React from 'react'
import Header from '../header/Header'
import './HeaderMain.css'
function HeaderMain() {
    return (
        <div className="home headerMain">
            <div className="headerMain_header">
                <Header />
            </div>
            <div className="headerMain_body container">
                <div className="headerMain_body_top text-white">
                    <h1 className="headerMain_headerText">
                        BANGLADESH
                    </h1>
                </div>
                <div className="headerMain_body_bottom">
                    <div className="row">
                        <div className="row_div text-white">
                            <h1 className="text-white">lorem</h1>
                            <p>Lorem, ipsum dolor.</p>
                        </div>
                        <div className="row_div text-white">
                            <h1>lorem</h1>
                            <p>Lorem, ipsum dolor.</p>
                        </div>
                        <div className="row_div text-white">
                            <h1>lorem</h1>
                            <p>Lorem, ipsum dolor.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default HeaderMain
