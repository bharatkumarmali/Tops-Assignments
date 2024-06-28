import React, { useEffect, useState } from 'react'
import axios from 'axios'


function Service_component() {



    useEffect(() => {
        fetch()
    })



    const fetch = async () => {
        const res = await axios.get(`http://localhost:3000/service`)
        setData(res.data)
    }

    const [data, setData] = useState()



    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="section-title text-center">
                    <h1 className="display-5 mb-5">Our Services</h1>
                </div>
                <div className="row g-4">

                    {
                        data && data.map((value, index) => {
                            return (
                                <div key={index} className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
                                    <div className="service-item">
                                        <div className="overflow-hidden">
                                            <img className="img-fluid" src={value.ser_img} alt />
                                        </div>
                                        <div className="p-4 text-center border border-5 border-light border-top-0">
                                            <h4 className="mb-3">{value.ser_name}</h4>
                                            <p>{value.ser_desc}</p>
                                            <h6>{value.ser_country}</h6>
                                            <a className="fw-medium" href>Read More<i className="fa fa-arrow-right ms-2" /></a>
                                        </div>
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

export default Service_component