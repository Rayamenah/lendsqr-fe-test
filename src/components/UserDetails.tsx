import React from 'react'
import "../styles/userDetails.scss"
import { education, guarantors, information, socials } from '@/utils/userDetails'
import Link from 'next/link'

const UserDetails = () => {
    return (
        <>
            <Link href='/dashboard/users' className='go-back'>
                <img className='back-arrow' src='/back_arrow.svg' />
                <span>back to user</span>
                s</Link>
            <div className='heading'>
                <div className='user-details'>User Details</div>
                <div className='blacklist'>BLACKLIST USER</div>
                <div className='activate'>ACTIVATE USER</div>
            </div>


            <div className='user-info-container'>
                <div className='user-info'>
                    <div className='image'>
                        <img src='/user.svg' />
                    </div>
                    <div className='user-name'>
                        <span>Grace Effiom</span>
                        <span>LSQFf587g90</span>
                    </div>
                    <div className='line' />
                    <div className='user-tier'>
                        <div>User&lsquo;s Tier</div>
                        <div className='tier-stars'>
                            <img src='/star_filled.svg' />
                            <img src='/star_unfilled.svg' />
                            <img src='/star_unfilled.svg' />
                        </div>
                    </div>
                    <div className='line' />
                    <div className='user-amount'>
                        <span>N200,000.0</span>
                        <span>9912345678/Providus Bank</span>
                    </div>
                </div>
                <div className='user-tabs'>
                    <div className='gen-details'>General Details</div>
                    <span className='tab-head'>Documents</span>
                    <span className='tab-head'>Bank Details</span>
                    <span className='tab-head'>Loans</span>
                    <span className='tab-head'>Savings</span>
                    <span className='tab-head'>App and System</span>
                </div>
            </div>

            <div className='detailed-information'>

                <div className='info'>
                    <span className='heading'>Personal Information</span>
                    <div className='personal-info'>
                        {information.map((item) => (
                            <div className='info-container' key={item.name}>
                                <div className='title'>{item.name} </div>
                                <div className='value'>{item.value} </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className='horizontal-line' />

                <div className='info'>
                    <span className='heading'>Education and Employment</span>
                    <div className='education'>
                        {education.map((item) => (
                            <div className='info-container' key={item.title}>
                                <div className='title'>{item.title} </div>
                                <div className='value'>{item.value} </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className='horizontal-line' />

                <div className='info'>
                    <span className='heading'>Socials</span>
                    <div className='socials'>
                        {socials.map((item) => (
                            <div className='info-container' key={item.title}>
                                <div className='title'>{item.title} </div>
                                <div className='value'>{item.value} </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className='horizontal-line' />

                <div className='info'>
                    <span className='heading'>Guarantor</span>
                    <div className='guarantor'>
                        {guarantors.map((item) => (
                            <div className='info-container' key={item.title}>
                                <div className='title'>{item.title} </div>
                                <div className='value'>{item.value} </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className='horizontal-line' />

                <div className='info'>
                    <div className='extra'>
                        {guarantors.map((item) => (
                            <div className='info-container' key={item.title}>
                                <div className='title'>{item.title} </div>
                                <div className='value'>{item.value} </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserDetails