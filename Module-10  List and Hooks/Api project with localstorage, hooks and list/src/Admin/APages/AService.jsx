import React, { useState } from 'react'
import AHeader from '../AComponents/AHeader'
import AFooter from '../AComponents/AFooter'
import axios from 'axios'

function AService() {

    // variable 
    const [formValue, setFormValue] = useState({
        id: "",
        ser_img: "",
        ser_name: "",
        ser_desc: ""
    })

    // state 
    const changeHandle = (e) => {
        setFormValue({
            ...formValue,
            id: new Date().getTime().toString(),
            [e.target.name]: e.target.value
        })
        console.log(formValue);
    }

    // api post 
    const submitHandle = async (e) => {
        e.preventDefault()

        const res = await axios.post(`http://localhost:3000/service`, formValue)
        console.log(res.data);
        setFormValue({
            id: "",
            ser_img: "",
            ser_name: "",
            ser_desc: "",
            ser_country:""
        })
    }



    return (

        <div>
            <AHeader />
            <div className=' container'>
                <div className='row'>
                    <div className="col-lg-12 quote-text py-5 wow fadeIn" data-wow-delay="0.5s">
                        <div className="">
                            <div className="section-title text-start">
                                <h1 className="display-5 mb-4">Add Service</h1>
                            </div>
                            <p className="mb-4 pb-2">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo erat amet</p>
                            <form onSubmit={submitHandle}>
                                <div className="row g-3">
                                    <div className="col-12 col-sm-6">
                                        <input name='ser_name' value={formValue.ser_name} onChange={changeHandle} type="text" className="form-control border-01" placeholder="Service Name" style={{ height: 55 }} />
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <input name='ser_img' value={formValue.ser_img} onChange={changeHandle} type="url" className="form-control border-01" placeholder="Service Image" style={{ height: 55 }} />
                                    </div>
                                    <div className="col-12">
                                        <textarea name='ser_desc' value={formValue.ser_desc} onChange={changeHandle} className="form-control border-01" placeholder="Description" defaultValue={""} />
                                    </div>
                                    <div className="col-12">
                                        <button className="btn btn-primary w-100 py-3" type="submit">Submit</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <AFooter />

        </div>
    )
}

export default AService