import React, { useEffect } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function AHeader() {



    const redirect = useNavigate()

    useEffect(()=>{
        if(!localStorage.getItem('aloginid')){
            redirect('/alogin')
        }
    })
    
    const logout = () => {
        localStorage.removeItem('aloginid')
        localStorage.removeItem('aname')
        console.log('logout successfull');
        toast.success('logout success')
        redirect('/dashboard')
    }


    return (
        <div>
            {/* Topbar Start */}
            <div className="container-fluid bg-light p-0">
                <div className="row gx-0 d-none d-lg-flex">
                    <div className="col-lg-7 px-5 text-start">
                        <div className="h-100 d-inline-flex align-items-center py-3 me-4">
                            <small className="fa fa-map-marker-alt text-primary me-2" />
                            <small>123 Street, New York, USA</small>
                        </div>
                        <div className="h-100 d-inline-flex align-items-center py-3">
                            <small className="far fa-clock text-primary me-2" />
                            <small>Mon - Fri : 09.00 AM - 09.00 PM</small>
                        </div>
                    </div>
                    <div className="col-lg-5 px-5 text-end">
                        <div className="h-100 d-inline-flex align-items-center py-3 me-4">
                            <small className="fa fa-phone-alt text-primary me-2" />
                            <small>+012 345 6789</small>
                        </div>
                        <div className="h-100 d-inline-flex align-items-center">
                            <a className="btn btn-sm-square bg-white text-primary me-1" href><i className="fab fa-facebook-f" /></a>
                            <a className="btn btn-sm-square bg-white text-primary me-1" href><i className="fab fa-twitter" /></a>
                            <a className="btn btn-sm-square bg-white text-primary me-1" href><i className="fab fa-linkedin-in" /></a>
                            <a className="btn btn-sm-square bg-white text-primary me-0" href><i className="fab fa-instagram" /></a>
                        </div>
                    </div>
                </div>
            </div>
            {/* Topbar End */}


            {/* Navbar Start */}
            < nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0" >
                <NavLink to="/dashboard" className="navbar-brand d-flex align-items-center px-4 px-lg-5">
                    <h2 className="m-0 text-primary">WooDY</h2>
                </NavLink>
                <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto p-4 p-lg-0">
                        <NavLink to='/dashboard' className="nav-item nav-link">Dashboard</NavLink>
                        <NavLink to='/aabout' className="nav-item nav-link">About</NavLink>
                        <div className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Service</a>
                            <div className="dropdown-menu fade-up m-0">
                                <Link to='/service-addservice' className="dropdown-item">Add Service</Link>
                                <Link to='/service-manageService' className="dropdown-item">Manage Services</Link>
                            </div>
                        </div>
                        <div className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Project</a>
                            <div className="dropdown-menu fade-up m-0">
                                <Link to='/addproject' className="dropdown-item">Add Project</Link>
                                <Link to='/project-manageProject' className="dropdown-item">Manage Projects</Link>
                            </div>
                        </div>

                        <NavLink to='/acontact' className="nav-item nav-link">Contact</NavLink>
                        {(
                            () => {
                                if (localStorage.getItem('aloginid')) {
                                    return (
                                        <>
                                            <Link className="nav-item nav-link">Hii.. {localStorage.getItem('aname')}</Link>
                                        </>
                                    )
                                }
                            }
                        )()}
                        {(
                            () => {
                                if (localStorage.getItem('aloginid')) {
                                    return (
                                        <>
                                            <Link className="nav-item nav-link" onClick={logout}>Logout</Link>
                                        </>
                                    )
                                }
                                else {
                                    return (
                                        <>
                                            <NavLink to='/alogin' className="nav-item nav-link">Alogin</NavLink>
                                        </>
                                    )
                                }
                            }
                        )()}
                    </div>
                </div>
            </nav >
            {/* Navbar End */}

        </div>
    )
}

export default AHeader