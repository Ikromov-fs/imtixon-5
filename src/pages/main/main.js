import React from 'react'
import { NavLink } from 'react-router-dom'
import burger from '../../assets/img/burger.svg'
const Main = () => {
    return (
        <div className='p-[20px] bg-[#fafcf5]  drop-shadow-lg'>
            <ul className='flex justify-between items-center'>
                <li><img src={burger} alt="burger" width={45} /></li>
                <li className='text-2xl flex gap-7 font-bold'>
                    <NavLink to={'/clients'}>Clients</NavLink>
                    <NavLink to={'/suppliers'}>Suppliers</NavLink>
                </li>
                <li><img src={burger} alt="logo" width={45} /></li>
            </ul>
        </div>
    )
}

export default Main