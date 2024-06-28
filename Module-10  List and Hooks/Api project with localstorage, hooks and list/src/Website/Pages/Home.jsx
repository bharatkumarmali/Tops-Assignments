import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Testimonial from '../Components/Testimonial'
import Service_component from '../Components/Service_component'
import Project_component from '../Components/Project_component'
import { Helmet } from 'react-helmet'


function Home() {

    return (
        <>
            

            <div>

                <Header />

                {/* Carousel Start */}
                <div className="container-fluid p-0 pb-5">
                    <div className="owl-carousel header-carousel position-relative">
                        <div className="owl-carousel-item position-relative">
                            <img className="img-fluid" src="img/carousel-1.jpg" alt />
                            <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ background: 'rgba(53, 53, 53, .7)' }}>
                                <div className="container">
                                    <div className="row justify-content-center">
                                        <div className="col-12 col-lg-8 text-center">
                                            <h5 className="text-white text-uppercase mb-3 animated slideInDown">Welcome To WooDY</h5>
                                            <h1 className="display-3 text-white animated slideInDown mb-4">Best Carpenter &amp; Craftsman Services</h1>
                                            <p className="fs-5 fw-medium text-white mb-4 pb-2">Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.</p>
                                            <a href className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Read More</a>
                                            <a href className="btn btn-light py-md-3 px-md-5 animated slideInRight">Free Quote</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="owl-carousel-item position-relative">
                            <img className="img-fluid" src="img/carousel-2.jpg" alt />
                            <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ background: 'rgba(53, 53, 53, .7)' }}>
                                <div className="container">
                                    <div className="row justify-content-center">
                                        <div className="col-12 col-lg-8 text-center">
                                            <h5 className="text-white text-uppercase mb-3 animated slideInDown">Welcome To WooDY</h5>
                                            <h1 className="display-3 text-white animated slideInDown mb-4">Best Carpenter &amp; Craftsman Services</h1>
                                            <p className="fs-5 fw-medium text-white mb-4 pb-2">Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.</p>
                                            <a href className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Read More</a>
                                            <a href className="btn btn-light py-md-3 px-md-5 animated slideInRight">Free Quote</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="owl-carousel-item position-relative">
                            <img className="img-fluid" src="img/carousel-3.jpg" alt />
                            <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ background: 'rgba(53, 53, 53, .7)' }}>
                                <div className="container">
                                    <div className="row justify-content-center">
                                        <div className="col-12 col-lg-8 text-center">
                                            <h5 className="text-white text-uppercase mb-3 animated slideInDown">Welcome To WooDY</h5>
                                            <h1 className="display-3 text-white animated slideInDown mb-4">Best Carpenter &amp; Craftsman Services</h1>
                                            <p className="fs-5 fw-medium text-white mb-4 pb-2">Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.</p>
                                            <a href className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Read More</a>
                                            <a href className="btn btn-light py-md-3 px-md-5 animated slideInRight">Free Quote</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Carousel End */}
                {/* Feature Start */}
                <div className="container-xxl py-5">
                    <div className="container">
                        <div className="row g-5">
                            <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.1s">
                                <div className="d-flex align-items-center justify-content-between mb-2">
                                    <div className="d-flex align-items-center justify-content-center bg-light" style={{ width: 60, height: 60 }}>
                                        <i className="fa fa-user-check fa-2x text-primary" />
                                    </div>
                                    <h1 className="display-1 text-light mb-0">01</h1>
                                </div>
                                <h5>Creative Designers</h5>
                            </div>
                            <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.3s">
                                <div className="d-flex align-items-center justify-content-between mb-2">
                                    <div className="d-flex align-items-center justify-content-center bg-light" style={{ width: 60, height: 60 }}>
                                        <i className="fa fa-check fa-2x text-primary" />
                                    </div>
                                    <h1 className="display-1 text-light mb-0">02</h1>
                                </div>
                                <h5>Quality Products</h5>
                            </div>
                            <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.5s">
                                <div className="d-flex align-items-center justify-content-between mb-2">
                                    <div className="d-flex align-items-center justify-content-center bg-light" style={{ width: 60, height: 60 }}>
                                        <i className="fa fa-drafting-compass fa-2x text-primary" />
                                    </div>
                                    <h1 className="display-1 text-light mb-0">03</h1>
                                </div>
                                <h5>Free Consultation</h5>
                            </div>
                            <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.7s">
                                <div className="d-flex align-items-center justify-content-between mb-2">
                                    <div className="d-flex align-items-center justify-content-center bg-light" style={{ width: 60, height: 60 }}>
                                        <i className="fa fa-headphones fa-2x text-primary" />
                                    </div>
                                    <h1 className="display-1 text-light mb-0">04</h1>
                                </div>
                                <h5>Customer Support</h5>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Feature Start */}
                {/* About Start */}
                <div className="container-fluid bg-light overflow-hidden my-5 px-lg-0">
                    <div className="container about px-lg-0">
                        <div className="row g-0 mx-lg-0">
                            <div className="col-lg-6 ps-lg-0" style={{ minHeight: 400 }}>
                                <div className="position-relative h-100">
                                    <img className="position-absolute img-fluid w-100 h-100" src="img/about.jpg" style={{ objectFit: 'cover' }} alt />
                                </div>
                            </div>
                            <div className="col-lg-6 about-text py-5 wow fadeIn" data-wow-delay="0.5s">
                                <div className="p-lg-5 pe-lg-0">
                                    <div className="section-title text-start">
                                        <h1 className="display-5 mb-4">About Us</h1>
                                    </div>
                                    <p className="mb-4 pb-2">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo erat amet</p>
                                    <div className="row g-4 mb-4 pb-2">
                                        <div className="col-sm-6 wow fadeIn" data-wow-delay="0.1s">
                                            <div className="d-flex align-items-center">
                                                <div className="d-flex flex-shrink-0 align-items-center justify-content-center bg-white" style={{ width: 60, height: 60 }}>
                                                    <i className="fa fa-users fa-2x text-primary" />
                                                </div>
                                                <div className="ms-3">
                                                    <h2 className="text-primary mb-1" data-toggle="counter-up">1234</h2>
                                                    <p className="fw-medium mb-0">Happy Clients</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 wow fadeIn" data-wow-delay="0.3s">
                                            <div className="d-flex align-items-center">
                                                <div className="d-flex flex-shrink-0 align-items-center justify-content-center bg-white" style={{ width: 60, height: 60 }}>
                                                    <i className="fa fa-check fa-2x text-primary" />
                                                </div>
                                                <div className="ms-3">
                                                    <h2 className="text-primary mb-1" data-toggle="counter-up">1234</h2>
                                                    <p className="fw-medium mb-0">Projects Done</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <a href className="btn btn-primary py-3 px-5">Explore More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* About End */}

                {/* Service Start */}
                <Service_component />
                {/* Service End */}

                {/* Feature Start */}
                <div className="container-fluid bg-light overflow-hidden my-5 px-lg-0">
                    <div className="container feature px-lg-0">
                        <div className="row g-0 mx-lg-0">
                            <div className="col-lg-6 feature-text py-5 wow fadeIn" data-wow-delay="0.5s">
                                <div className="p-lg-5 ps-lg-0">
                                    <div className="section-title text-start">
                                        <h1 className="display-5 mb-4">Why Choose Us</h1>
                                    </div>
                                    <p className="mb-4 pb-2">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo erat amet</p>
                                    <div className="row g-4">
                                        <div className="col-6">
                                            <div className="d-flex align-items-center">
                                                <div className="d-flex flex-shrink-0 align-items-center justify-content-center bg-white" style={{ width: 60, height: 60 }}>
                                                    <i className="fa fa-check fa-2x text-primary" />
                                                </div>
                                                <div className="ms-4">
                                                    <p className="mb-2">Quality</p>
                                                    <h5 className="mb-0">Services</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="d-flex align-items-center">
                                                <div className="d-flex flex-shrink-0 align-items-center justify-content-center bg-white" style={{ width: 60, height: 60 }}>
                                                    <i className="fa fa-user-check fa-2x text-primary" />
                                                </div>
                                                <div className="ms-4">
                                                    <p className="mb-2">Creative</p>
                                                    <h5 className="mb-0">Designers</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="d-flex align-items-center">
                                                <div className="d-flex flex-shrink-0 align-items-center justify-content-center bg-white" style={{ width: 60, height: 60 }}>
                                                    <i className="fa fa-drafting-compass fa-2x text-primary" />
                                                </div>
                                                <div className="ms-4">
                                                    <p className="mb-2">Free</p>
                                                    <h5 className="mb-0">Consultation</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="d-flex align-items-center">
                                                <div className="d-flex flex-shrink-0 align-items-center justify-content-center bg-white" style={{ width: 60, height: 60 }}>
                                                    <i className="fa fa-headphones fa-2x text-primary" />
                                                </div>
                                                <div className="ms-4">
                                                    <p className="mb-2">Customer</p>
                                                    <h5 className="mb-0">Support</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 pe-lg-0" style={{ minHeight: 400 }}>
                                <div className="position-relative h-100">
                                    <img className="position-absolute img-fluid w-100 h-100" src="img/feature.jpg" style={{ objectFit: 'cover' }} alt />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Feature End */}

                {/* Projects Start */}
                <Project_component />
                {/* Projects End */}

                {/* Quote Start */}
                <div className="container-fluid bg-light overflow-hidden my-5 px-lg-0">
                    <div className="container quote px-lg-0">
                        <div className="row g-0 mx-lg-0">
                            <div className="col-lg-6 ps-lg-0" style={{ minHeight: 400 }}>
                                <div className="position-relative h-100">
                                    <img className="position-absolute img-fluid w-100 h-100" src="img/quote.jpg" style={{ objectFit: 'cover' }} alt />
                                </div>
                            </div>
                            <div className="col-lg-6 quote-text py-5 wow fadeIn" data-wow-delay="0.5s">
                                <div className="p-lg-5 pe-lg-0">
                                    <div className="section-title text-start">
                                        <h1 className="display-5 mb-4">Free Quote</h1>
                                    </div>
                                    <p className="mb-4 pb-2">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo erat amet</p>
                                    <form>
                                        <div className="row g-3">
                                            <div className="col-12 col-sm-6">
                                                <input type="text" className="form-control border-0" placeholder="Your Name" style={{ height: 55 }} />
                                            </div>
                                            <div className="col-12 col-sm-6">
                                                <input type="email" className="form-control border-0" placeholder="Your Email" style={{ height: 55 }} />
                                            </div>
                                            <div className="col-12 col-sm-6">
                                                <input type="text" className="form-control border-0" placeholder="Your Mobile" style={{ height: 55 }} />
                                            </div>
                                            <div className="col-12 col-sm-6">
                                                <select className="form-select border-0" style={{ height: 55 }}>
                                                    <option selected>Select A Service</option>
                                                    <option value={1}>Service 1</option>
                                                    <option value={2}>Service 2</option>
                                                    <option value={3}>Service 3</option>
                                                </select>
                                            </div>
                                            <div className="col-12">
                                                <textarea className="form-control border-0" placeholder="Special Note" defaultValue={""} />
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
                </div>
                {/* Quote End */}
                {/* Team Start */}
                <div className="container-xxl py-5">
                    <div className="container">
                        <div className="section-title text-center">
                            <h1 className="display-5 mb-5">Team Members</h1>
                        </div>
                        <div className="row g-4">
                            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                                <div className="team-item">
                                    <div className="overflow-hidden position-relative">
                                        <img className="img-fluid" src="img/team-1.jpg" alt />
                                        <div className="team-social">
                                            <a className="btn btn-square" href><i className="fab fa-facebook-f" /></a>
                                            <a className="btn btn-square" href><i className="fab fa-twitter" /></a>
                                            <a className="btn btn-square" href><i className="fab fa-instagram" /></a>
                                        </div>
                                    </div>
                                    <div className="text-center border border-5 border-light border-top-0 p-4">
                                        <h5 className="mb-0">Full Name</h5>
                                        <small>Designation</small>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                                <div className="team-item">
                                    <div className="overflow-hidden position-relative">
                                        <img className="img-fluid" src="img/team-2.jpg" alt />
                                        <div className="team-social">
                                            <a className="btn btn-square" href><i className="fab fa-facebook-f" /></a>
                                            <a className="btn btn-square" href><i className="fab fa-twitter" /></a>
                                            <a className="btn btn-square" href><i className="fab fa-instagram" /></a>
                                        </div>
                                    </div>
                                    <div className="text-center border border-5 border-light border-top-0 p-4">
                                        <h5 className="mb-0">Full Name</h5>
                                        <small>Designation</small>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                                <div className="team-item">
                                    <div className="overflow-hidden position-relative">
                                        <img className="img-fluid" src="img/team-3.jpg" alt />
                                        <div className="team-social">
                                            <a className="btn btn-square" href><i className="fab fa-facebook-f" /></a>
                                            <a className="btn btn-square" href><i className="fab fa-twitter" /></a>
                                            <a className="btn btn-square" href><i className="fab fa-instagram" /></a>
                                        </div>
                                    </div>
                                    <div className="text-center border border-5 border-light border-top-0 p-4">
                                        <h5 className="mb-0">Full Name</h5>
                                        <small>Designation</small>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                                <div className="team-item">
                                    <div className="overflow-hidden position-relative">
                                        <img className="img-fluid" src="img/team-4.jpg" alt />
                                        <div className="team-social">
                                            <a className="btn btn-square" href><i className="fab fa-facebook-f" /></a>
                                            <a className="btn btn-square" href><i className="fab fa-twitter" /></a>
                                            <a className="btn btn-square" href><i className="fab fa-instagram" /></a>
                                        </div>
                                    </div>
                                    <div className="text-center border border-5 border-light border-top-0 p-4">
                                        <h5 className="mb-0">Full Name</h5>
                                        <small>Designation</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Team End */}

                <Testimonial />

                <Footer />

            </div>


            <Helmet>
                <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
                <script src="lib/wow/wow.min.js"></script>
                <script src="lib/easing/easing.min.js"></script>
                <script src="lib/waypoints/waypoints.min.js"></script>
                <script src="lib/counterup/counterup.min.js"></script>
                <script src="lib/owlcarousel/owl.carousel.min.js"></script>
                <script src="lib/isotope/isotope.pkgd.min.js"></script>
                <script src="lib/lightbox/js/lightbox.min.js"></script>

                <script src="js/main.js"></script>
            </Helmet>
        </>


    )
}

export default Home