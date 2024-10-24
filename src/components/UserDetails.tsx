import React from 'react'
import "../styles/userDetails.scss"

const UserDetails = () => {
    return (
        <section className='user-details-container'>
            <div className='go-back'></div>

            <div className='user-details-header'>
                <span className='heading'></span>
                <span className='blacklist'></span>
                <span className='activate'></span>
            </div>

            <div className='user-info'>
                <div>
                    <div className='avatar'></div>
                    <div className='user-name'></div>
                    <div className='user-tier'></div>
                    <div className='user-amount'></div>
                </div>
                <div className='user-tabs'>
                    <span>FULL NAME</span>
                    <span>PHONE NUMBER</span>
                    <span>EMAIL ADDRESS</span>
                    <span>BVN</span>
                    <span>GENDER</span>
                </div>
            </div>

            <div className='detailed-information'>
                <div className='personal-information'></div>
                <div className='education-information'></div>
                <div className='socials'></div>
                <div className='gurantor'></div>

            </div>
        </section>
    )
}

export default UserDetails