import React from 'react'
import "../../../styles/users.scss"
import Table from '@/components/table'


const Page = () => {
    const cards = [
        {
            title: "USERS",
            icon: '/users.svg',
            number: '2,453'
        },
        {
            title: "ACTIVE USERS",
            icon: '/active_user.svg',
            number: '2,453'
        },
        {
            title: "USERS WITH LOANS",
            icon: '/user_loan.svg',
            number: '12,453'
        },
        {
            title: "USERS WITH SAVINGS",
            icon: '/user_saving.svg',
            number: '2,453'
        },
    ]

    return (
        <>
            <div className='heading' >
                Users
            </div>
            <div className='card-container'>
                {cards.map((card, i) => (
                    <div key={i} className='user-card'>
                        <img className='user-icon' src={card.icon} />
                        <div className='user-title'>{card.title}</div>
                        <div className='user-number'>{card.number}</div>
                    </div>
                ))}
            </div>

            <Table />

        </>)
}

export default Page