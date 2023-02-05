import React from 'react'
import './Activities.css'
import CoxBazar from '../../../images/cox-bazar.jpg'
import SaintMartin from '../../../images/saint-martin.jpg'
import SajekValley from '../../../images/sajek-valley.jpg'
import Rangamati from '../../../images/rangamati.jpg'
function Activities() {
    const activityCard = [{
        img: CoxBazar,
        title: 'Coxs Bazar',
        description: 'thi si one of the best place of bangladesh'
    },
    {
        img: CoxBazar,
        title: 'Coxs Bazar',
        description: 'thi si one of the best place of bangladesh'
    },
    {
        img: CoxBazar,
        title: 'Coxs Bazar',
        description: 'thi si one of the best place of bangladesh'
    },
    {
        img: CoxBazar,
        title: 'Coxs Bazar',
        description: 'thi si one of the best place of bangladesh'
    }


    ]


    return (
        <div className=" activities">
            <h1 className="text-center activities_header">Activities for everyone</h1>
            <div className="row activity_row container">
                {
                    activityCard.map(card =>
                        <div className="activity-card">
                            <img src={card.img} alt="" className="activity-card-img" />
                            <div className="activity-card-body">
                                <h4 className="activity-card-title">{card.title}</h4>
                                <p className="activity-card-des">{card.description}</p>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Activities
