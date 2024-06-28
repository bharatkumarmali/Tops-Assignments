import React, { useEffect, useState } from 'react';
import AHeader from '../AComponents/AHeader'
import AFooter from '../AComponents/AFooter'
import { MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


function Alogin() {

    const redirect = useNavigate()

    useEffect(() => {
        if(localStorage.getItem('aloginid')){
            redirect('/dashboard')
        }
    })

    const [formvalue, setformvalue] = useState({
        email: "",
        password: ""
    })

    const changeHandle = (e) => {
        setformvalue({
            ...formvalue,
            [e.target.name]: e.target.value
        })
        console.log(formvalue);
    }

    const submitHandle = async (e) => {
        try {
            e.preventDefault()
            const { email, password } = formvalue

            if (!email.trim() || !password.trim()) {
                console.log('please enter email and password');
                toast.error('please enter email and password')
                return false
            }

            // match 
            try {
                const res = await axios.get(`http://localhost:3000/admin?email=${email}`)
                console.log(res.data);

                if (res.data.length === 0) {
                    console.log('invalid email');
                    toast.error('invalid email')
                    return false
                }

                const use = res.data[0]
                console.log(use);
                if (use.password !== password) {
                    console.log('invalid password');
                    toast.error('invalid password')
                    return false
                }

                // create session 
                localStorage.setItem('aloginid', use.id)
                localStorage.setItem('aname', use.name)
                console.log('login successfull');
                toast.success('login successfull')
                redirect('/dashboard')

            } catch (error) {

            }


        } catch (error) {

        }
    }

    return (
        <div>
            {/* <AHeader /> */}
            {/* Page Header Start */}
            <div className="container-fluid page-header py-5 mb-5">
                <div className="container py-5">
                    <h1 className="display-3 text-white mb-3 animated slideInDown">Admin Login</h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol className="breadcrumb">
                        </ol>
                    </nav>
                </div>
            </div>
            {/* Page Header End */}

            <div>
                <MDBContainer fluid className="p-3 my-5 h-custom">

                    <form action="" onSubmit={submitHandle}>
                        <MDBRow>

                            <MDBCol col='10' md='6'>
                                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" class="img-fluid" alt="Sample image" />
                            </MDBCol>

                            <MDBCol col='4' md='6'>

                                <div className="d-flex flex-row align-items-center justify-content-center">

                                    <p className="lead fw-normal mb-0 me-3">Sign in with</p>

                                    <MDBBtn floating size='md' tag='a' className='me-2'>
                                        <MDBIcon fab icon='facebook-f' />
                                    </MDBBtn>

                                    <MDBBtn floating size='md' tag='a' className='me-2'>
                                        <MDBIcon fab icon='twitter' />
                                    </MDBBtn>

                                    <MDBBtn floating size='md' tag='a' className='me-2'>
                                        <MDBIcon fab icon='linkedin-in' />
                                    </MDBBtn>

                                </div>

                                <div className="divider d-flex align-items-center my-4">
                                    <p className="text-center fw-bold mx-3 mb-0">Or</p>
                                </div>

                                <MDBInput name='email' value={formvalue.email} onChange={changeHandle} wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg" />
                                <MDBInput name='password' value={formvalue.password} onChange={changeHandle} wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg" />

                                <div className="d-flex justify-content-between mb-4">
                                    <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                                    <a href="!#">Forgot password?</a>
                                </div>

                                <div className='text-center text-md-start mt-4 pt-2'>
                                    <MDBBtn className="mb-0 px-5" size='lg'>Login</MDBBtn>
                                    <p className="small fw-bold mt-2 pt-1 mb-2">Don't have an account? <a href="#!" className="link-danger">Register</a></p>
                                </div>

                            </MDBCol>

                        </MDBRow>
                    </form>

                </MDBContainer>
            </div>

            {/* <AFooter /> */}
        </div>
    )
}

export default Alogin