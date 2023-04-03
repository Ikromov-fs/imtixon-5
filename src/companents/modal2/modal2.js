import React, { useContext, useState } from 'react'
import { ModalBody } from 'reactstrap'
import http from '../../axios/axios'
import { Context } from '../../companents/Context/Contex'
const Modal2 = () => {
    const { modal, setModal } = useContext(Context)
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [phone_number, setPhone_number] = useState('')
    const [first_name, setFirst_name] = useState('')
    const [last_name, setLast_name] = useState('')
    const [age, setAge] = useState('')
    const [email, setEmail] = useState('')
    const [img, setImg] = useState('')
    const form = (e) => {
        e.preventDefault()
        const form = new FormData()
        form.append('name', name)
        form.append('image', img)
        form.append('first_name', first_name)
        form.append('last_name', last_name)
        form.append('age', age)
        form.append('phone_number', phone_number)
        form.append('email', email)
        form.append('address', address)
        console.log(img);
        http.post('/suppliers/', form)
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
            })

        setTimeout(() => {
            window.location.reload(false);
        }, 800);
    }
    return (
        <div>
            <ModalBody>
                <form onSubmit={form} className={modal ? 'opacity-0' : `flex flex-col justify-start w-[450px] gap-3 bg-blue-100 p-5 rounded-md mx-auto`}>
                    <input type="text" onChange={(e) => setName(e.target.value)} className='border-2 border-solid border-black px-7 py-2 rounded-md' placeholder='name' />
                    <input type="text" onChange={(e) => setFirst_name(e.target.value)} className='border-2 border-solid border-black px-7 py-2 rounded-md' placeholder='fist name' />
                    <input type="text" onChange={(e) => setLast_name(e.target.value)} className='border-2 border-solid border-black px-7 py-2 rounded-md' placeholder='last name' />
                    <input type="number" onChange={(e) => setAge(e.target.value)} className='border-2 border-solid border-black px-7 py-2 rounded-md' placeholder='Age' />
                    <input type="text" onChange={(e) => setEmail(e.target.value)} className='border-2 border-solid border-black px-7 py-2 rounded-md' placeholder='Email' />
                    <input type="text" onChange={(e) => setPhone_number(e.target.value)} className='border-2 border-solid border-black px-7 py-2 rounded-md' placeholder='phone' />
                    <input type="text" onChange={(e) => setAddress(e.target.value)} className='border-2 border-solid border-black px-7 py-2 rounded-md' placeholder='Adress' />
                    <input type="file" onChange={(e) => setImg(e.target.files[0])} className='border-2 border-solid border-black px-7 py-2 rounded-md' placeholder='img' />
                    <label>
                        <button onClick={() => setModal(prev => !prev)} className='bg-green-600 w-full rounded-md py-1 text-white font-bold'>add</button>
                    </label>
                </form>
            </ModalBody>
        </div>
    )
}

export default Modal2;
