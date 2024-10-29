"use client"

import { users } from '@/utils/users.db'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { FormEvent, useState } from 'react'
import "../../styles/auth.scss"

const Login = () => {
    const [login, setLogin] = useState({
        email: '',
        password: '',
    })
    const [showPassword, setShowPassword] = useState(false)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const togglePasswordVisibility = () => { setShowPassword(!showPassword) }

    const router = useRouter()

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        try {
            if (!login.email || !login.password) setError("invalid email or password")
            setError('')
            setLoading(true)
            const user = users.find(u => u.email === login.email)
            setLoading(false)
            console.log(user)
            if (user) router.push('/dashboard/users')
        } catch (err) {
            setLoading(false)
            console.log(err)
        }


    }


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
                <form onSubmit={handleSubmit} className='form-input'>
                    <input
                        onChange={(e) => setLogin((prev) => ({ ...prev, email: e.target.value }))}
                        placeholder='Email'
                        type='email'
                    />
                    <input
                        placeholder='Password'
                        type={showPassword ? 'text' : 'password'}
                        onChange={(e) => setLogin((prev) => ({ ...prev, password: e.target.value }))}
                        autoComplete='false'
                    />
                    {error && <span>{error}</span>}
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


                    <Link href="/" className='forgot-password'>FORGOT PASSWORD?</Link>
                    <button type='submit' className='submit'>{loading ? "Loading" : 'LOG IN'}</button>
                </form>
            </div>
        </section>
    )
}

export default Login