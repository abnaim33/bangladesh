import React from 'react'
import './Apartments.css'
function Apartments() {
    return (
        <div className="home">
            <div className="apartment_header text-center">
                <h2> Apartments</h2>
            </div>
            <div className="apartment_body row container">
                <div className="card">
                    <img src="..." className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn ">Go somewhere</a>
                    </div>
                </div>

                <div className="card">
                    <img src="..." className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn ">Go somewhere</a>
                    </div>
                </div>

                <div className="card">
                    <img src="..." className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn ">Go somewhere</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Apartments
