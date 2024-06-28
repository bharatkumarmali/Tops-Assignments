import React, { useEffect, useState } from 'react'
import AHeader from '../AComponents/AHeader'
import AFooter from '../AComponents/AFooter'
import axios from 'axios'

function AServiceManage() {


  useEffect(() => {
    fetch()
  })


  const [data1, setData1] = useState()

  // api get 
  const fetch = async () => {
    const res = await axios.get(`http://localhost:3000/service`)
    setData1(res.data)
  }

  // api delete 
  const deleteHandle = async (id) => {
    const res = await axios.delete(`http://localhost:3000/service/${id}`)
  }

  // view 
  const [editing, setEditing] = useState(null)
  const [edited, setEdited] = useState({
    id: "",
    ser_img: "",
    ser_name: "",
    ser_desc: "",
    ser_country: ""
  })

  const saveIt = (service) => {
    setEditing(service)
    setEdited(service)
  }

  const updateHandle = async (e) => {
    e.preventDefault()
    await axios.put(`http://localhost:3000/service/${editing.id}`, edited)
    fetch()
    setEditing(null)
  }


  return (
    <div>

      <AHeader />

      <div className="container my-5">
        <table className="table table-hover my-5">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Service Name</th>
              <th scope="col">Country</th>
              <th scope="col">Service Desc</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {
              data1 && data1.map((value, index) => {
                return (
                  <tr key={index}>
                    <th scope="row">{value.id}</th>
                    <td>{value.ser_name}</td>
                    <td>{value.ser_country}</td>
                    <td>{value.ser_desc}</td>
                    <td>
                      <button className='btn btn-info'>View</button>
                      <button className='btn btn-danger mx-3' onClick={() => deleteHandle(value.id)}>Delete</button>
                      <button className='btn btn-primary' onClick={() => saveIt(value)}>Edit</button>
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
              <div className="row g-3">
                <div className="col-12 col-sm-6">
                  <input value={edited.ser_name} onChange={(e) => setEdited({ ...edited, ser_name: e.target.value })} type="text" className="form-control border-01" placeholder="Service Name" style={{ height: 55 }} />
                </div>
                <div className="col-12 col-sm-6">
                  <input value={edited.ser_img} onChange={(e) => setEdited({ ...edited, ser_img: e.target.value })} type="url" className="form-control border-01" placeholder="Service Image" style={{ height: 55 }} />
                </div>
                <div className="col-12">
                  <textarea value={edited.ser_desc} onChange={(e) => setEdited({ ...edited, ser_desc: e.target.value })} className="form-control border-01" placeholder="Description" defaultValue={""} />
                </div>
                <div>
                  <select className='col-12 border-01' name="" id="" value={edited.ser_country} onChange={(e) => setEdited({ ...edited, ser_country: e.target.value })} style={{ height: 55 }} >
                    <option value="USA">USA</option>
                    <option value="Bharat">Bharat</option>
                  </select>
                </div>
                <div className=' d-flex justify-content-between'>
                  <div className="col-5">
                    <button className="btn btn-primary w-100 py-3" type="submit" onClick={updateHandle}>Update</button>
                  </div>
                  <div className="col-5">
                    <button className="btn btn-primary w-100 py-3" type="submit" onClick={()=>setEditing(null)}>Cancel</button>
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

export default AServiceManage