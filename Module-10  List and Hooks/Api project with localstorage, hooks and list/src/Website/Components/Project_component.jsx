import React, { useEffect, useState } from 'react'
import axios from 'axios';

function Project_component() {
    

    const [data, setData] = useState();



    useEffect(() => {
        fetch();
    })


    const fetch = async () => {
        const res = await axios.get(`http://localhost:3000/project`)
        setData(res.data);
        console.log(res.data);
    }




    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="section-title text-center">
                    <h1 className="display-5 mb-5">Our Projects</h1>
                </div>
                <div className="row mt-n2 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="col-12 text-center">
                        <ul className="list-inline mb-5" id="portfolio-flters">
                            <li className="mx-2 active" data-filter="*">All</li>
                            <li className="mx-2" data-filter=".first">General Carpentry</li>
                            <li className="mx-2" data-filter=".second">Custom Carpentry</li>
                        </ul>
                    </div>
                </div>
                <div className="row g-4 portfolio-container">

                    {
                        data && data.map((value, index) => {
                            return (
                                <div key={index} className="col-lg-4 col-md-6 portfolio-item first wow fadeInUp" data-wow-delay="0.1s">
                                    <div className="rounded overflow-hidden">
                                        <div className="position-relative overflow-hidden">
                                            <img className="img-fluid w-100" src={value.pro_img} alt />
                                            <div className="portfolio-overlay">
                                                <a className="btn btn-square btn-outline-light mx-1" href="img/portfolio-1.jpg" data-lightbox="portfolio"><i className="fa fa-eye" /></a>
                                                <a className="btn btn-square btn-outline-light mx-1" href><i className="fa fa-link" /></a>
                                            </div>
                                        </div>
                                        <div className="border border-5 border-light border-top-0 p-4">
                                            <p className="text-primary fw-medium mb-2">{value.pro_name}</p>
                                            <h5 className="lh-base mb-0">{value.pro_desc}</h5></div>
                                    </div>
                                </div>
                            )
                        })

                    }

                </div>
            </div>
        </div>
    )
}

export default Project_component