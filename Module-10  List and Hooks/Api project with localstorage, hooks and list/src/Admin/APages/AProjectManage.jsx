import React, { useEffect, useState } from 'react'
import AHeader from '../AComponents/AHeader'
import AFooter from '../AComponents/AFooter'
import axios from 'axios'

function AProjectManage() {


    useEffect(() => {
        fetch()
    })


    const [data2, setData2] = useState()


    // api get 
    const fetch = async () => {
        const res = await axios.get(`http://localhost:3000/project`)
        setData2(res.data)
    }


    // api delete 
    const daleteHandle = async (id) => {
        const res = await axios.delete(`http://localhost:3000/project/${id}`)
    }

    const [editing, setediting] = useState(null)
    const [edited, setedited] = useState({
        id: "",
        pro_name: "",
        pro_img: "",
        pro_desc: ""
    })

    const saveit = (services) => {
        setediting(services)
        setedited(services)
    }


    const updateHandle = async (e) => {
        try {
            e.preventDefault()

            await axios.put(`http://localhost:3000/project/${editing.id}`, edited)
            fetch()
            setediting  (null)
            console.log('update successful');

        } catch (error) {
            
        }
    }


    return (
        <div>
            <AHeader />
            <div className="container my-5">
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Project Name</th>
                            <th scope="col">Project Desc</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            data2 && data2.map((value, index) => {
                                return (
                                    <tr key={index}>
                                        <th scope="row">{value.id}</th>
                                        <td>{value.pro_name}</td>
                                        <td>{value.pro_desc}</td>
                                        <td>
                                            <button className='btn btn-info'>View</button>
                                            <button className='btn btn-danger mx-2' onClick={() => daleteHandle(value.id)}>Delete</button>
                                            <button className='btn btn-primary' onClick={() => saveit(value)}>Edit</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>

                {
                    editing && (
                        <form>
                            <div className="row g-3 my-5">
                                <div className="col-12 col-sm-6">
                                    <input name='pro_name' value={edited.pro_name} onChange={(e) => setedited({ ...edited, pro_name: e.target.value })} type="text" className="form-control border-01" placeholder="Project Name" style={{ height: 55 }} />
                                </div>
                                <div className="col-12 col-sm-6">
                                    <input name='pro_img' value={edited.pro_img} onChange={(e) => setedited({ ...edited, pro_img: e.target.value })} type="url" className="form-control border-01" placeholder="Project Image" style={{ height: 55 }} />
                                </div>
                                <div className="col-12">
                                    <textarea name='pro_desc' value={edited.pro_desc} onChange={(e) => setedited({ ...edited, pro_desc: e.target.value })} className="form-control border-01" placeholder="Description" defaultValue={""} />
                                </div>
                                <div className=' d-flex justify-content-between'>
                                    <div className="col-5">
                                        <button className="btn btn-primary w-100 py-3" type="submit" onClick={updateHandle}>Update</button>
                                    </div>
                                    <div className="col-5">
                                        <button className="btn btn-primary w-100 py-3" type="submit" onClick={() => setediting(null)}>Cancal</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    )
                }

            </div>
            <AFooter />
        </div>
    )
}

export default AProjectManage