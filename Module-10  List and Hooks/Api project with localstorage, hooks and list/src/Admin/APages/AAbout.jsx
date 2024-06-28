import React from 'react'
import AHeader from '../AComponents/AHeader'
import AFooter from '../AComponents/AFooter'
import { NavLink } from 'react-router-dom'

function AAbout() {
    return (
        <div>

            <AHeader />

            {/* Page Header Start */}
            <div className="container-fluid page-header py-5 mb-5">
                <div className="container py-5">
                    <h1 className="display-3 text-white mb-3 animated slideInDown">About</h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><NavLink to='/dashboard' className="text-white">Home</NavLink></li>
                            <li className="breadcrumb-item"><a className="text-white">Pages</a></li>
                            <li className="breadcrumb-item text-white active" aria-current="page">About</li>
                        </ol>
                    </nav>
                </div>
            </div>
            {/* Page Header End */}


            <AFooter />

        </div>
    )
}

export default AAbout