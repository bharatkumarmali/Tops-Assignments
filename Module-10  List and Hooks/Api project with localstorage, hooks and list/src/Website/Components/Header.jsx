import React, { useEffect } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function Header() {

    const redirect = useNavigate()

    useEffect(() => {
        if (!localStorage.getItem("uloginid")) {
            redirect("/ulogin")
        }
    })
    const logout = () => {
        localStorage.removeItem('uloginid')
        localStorage.removeItem('uname')
        console.log('Logout successful');
        toast.success('Logout successful');
        // redirect('/ulogin')
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
                <NavLink to='/' className="navbar-brand d-flex align-items-center px-4 px-lg-5">
                    <h2 className="m-0 text-primary">WooDY</h2>
                </NavLink>
                <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto p-4 p-lg-0">
                        <NavLink to='/' className="nav-item nav-link">Home</NavLink>
                        <NavLink to='/about' className="nav-item nav-link">About</NavLink>
                        <NavLink to='/service' className="nav-item nav-link">Service</NavLink>
                        <NavLink to='/project' className="nav-item nav-link">Project</NavLink>
                        <div className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                            <div className="dropdown-menu fade-up m-0">
                                <NavLink to='/feature' className="dropdown-item">Feature</NavLink>
                                <NavLink to='/freequote' className="dropdown-item">Free Quote</NavLink>
                                <NavLink to='/ourteam' className="dropdown-item">Our Team</NavLink>
                                <NavLink to='/testimonial' className="dropdown-item">Testimonial</NavLink>
                                <NavLink to='/errorpage' className="dropdown-item">404 Page</NavLink>
                            </div>
                        </div>

                        <NavLink to='/contact' className="nav-item nav-link">Contact</NavLink>
                        {(
                            () => {
                                if (localStorage.getItem('uloginid')) {
                                    return (
                                        <>
                                            <Link className="nav-item nav-link">Hii.. {localStorage.getItem('uname')}</Link>
                                        </>
                                    )
                                }
                            }
                        )()}
                        {(
                            () => {
                                if (localStorage.getItem('uloginid')) {
                                    return (
                                        <>
                                            <Link className="nav-item nav-link" onClick={logout}>Logout</Link>
                                        </>
                                    )
                                } else {
                                    return (
                                        <>
                                            <NavLink to='/ulogin' className="nav-item nav-link">Login</NavLink>
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

export default Header