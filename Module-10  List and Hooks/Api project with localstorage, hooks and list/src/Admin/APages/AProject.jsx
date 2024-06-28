import React, { useState } from 'react'
import AFooter from '../AComponents/AFooter'
import AHeader from '../AComponents/AHeader'
import axios from 'axios'

function AProject() {


    // variable 
    const [formValue, setFormValue] = useState({
        id: "",
        pro_name: "",
        pro_img: "",
        pro_desc: ""
    })

    // state
    const inputData = (e) => {
        setFormValue({
            ...formValue,
            id: new Date().getTime().toString(),
            [e.target.name]: e.target.value
        })
        console.log(formValue);
    }



    const submited = async (e) => {
        e.preventDefault()

        const res = await axios.post(`http://localhost:3000/project`, formValue)
        setFormValue({
            id: "",
            pro_name: "",
            pro_img: "",
            pro_desc: ""
        })
        console.log(formValue);
    }



    return (
        <div>

            <AHeader />
            <div className=' container'>
                <div className='row'>
                    <div className="col-lg-12 quote-text py-5 wow fadeIn" data-wow-delay="0.5s">
                        <div className="">
                            <div className="section-title text-start">
                                <h1 className="display-5 mb-4">Add Project</h1>
                            </div>
                            <p className="mb-4 pb-2">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo erat amet</p>
                            <form onSubmit={submited}>
                                <div className="row g-3">
                                    <div className="col-12 col-sm-6">
                                        <input name='pro_name' value={formValue.pro_name} onInput={inputData} type="text" className="form-control border-01" placeholder="Project Name" style={{ height: 55 }} />
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <input name='pro_img' value={formValue.pro_img} onInput={inputData} type="url" className="form-control border-01" placeholder="Project Image" style={{ height: 55 }} />
                                    </div>
                                    <div className="col-12">
                                        <textarea name='pro_desc' value={formValue.pro_desc} onInput={inputData} className="form-control border-01" placeholder="Description" defaultValue={""} />
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

export default AProject