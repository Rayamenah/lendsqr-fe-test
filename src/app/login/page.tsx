"use client"

import React, { useState } from 'react'
import "../../styles/auth.scss"
import Image from 'next/image'
import Link from 'next/link'
type Props = {}

const Login = (props: Props) => {
    const [showPassword, setShowPassword] = useState(false)
    const togglePasswordVisibility = () => { setShowPassword(!showPassword) }
    return (
        <section style={{ display: "flex" }} className='auth_container'>
            <div className='auth-image-container'>
                <div className='auth-logo'><img src='/auth-logo.svg' alt='' /></div>
                <div className='auth-hero'><img src='/auth-hero.svg' alt='' /></div>
            </div>

            <div className='auth-form-container'>
                {/* <form className='login-form'> */}
                <p className='welcome-text'>Welcome!</p>
                <p className='welcome-description'>Enter details to login.</p>
                <div className='form-input'>
                    <input
                        placeholder='Email'
                        type='email'
                    />
                    <input
                        placeholder='Password'
                        type={showPassword ? 'text' : 'password'}
                        autoComplete='false'
                    />
                    <button
                        type="button"
                        onClick={togglePasswordVisibility}
                        className="toggle-password"
                    >
                        {showPassword ? (
                            "HIDE"
                        ) : (
                            "SHOW"
                        )}
                    </button>
                </div>


                <Link href="/" className='forgot-password'>FORGOT PASSWORD?</Link>
                <button type='submit' className='submit'>LOG IN</button>
                {/* </form> */}
            </div>
        </section>
    )
}

export default Login