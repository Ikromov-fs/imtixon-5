import React, { useContext, useState } from 'react'
import { ModalBody } from 'reactstrap'
import http from '../../axios/axios'
import { Context } from '../../companents/Context/Contex'
const Modals = () => {
    const { modal, setModal } = useContext(Context)
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [phone_number, setPhone_number] = useState('')
    const [img, setImg] = useState('')
    const form = (e) => {
        e.preventDefault()
        const form = new FormData()
        // form.append('id', id)
        form.append('name', name)
        form.append('address', address)
        form.append('phone_number', phone_number)
        form.append('image', img)
        console.log(img);
        http.post('/clients/', form)
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
                    <input type="text" onChange={(e) => setAddress(e.target.value)} className='border-2 border-solid border-black px-7 py-2 rounded-md' placeholder='adress' />
                    <input type="text" onChange={(e) => setPhone_number(e.target.value)} className='border-2 border-solid border-black px-7 py-2 rounded-md' placeholder='phone' />
                    <input type="file" onChange={(e) => setImg(e.target.files[0])} className='border-2 border-solid border-black px-7 py-2 rounded-md' placeholder='phone' />
                    <label>
                        <button onClick={() => setModal(prev => !prev)} className='bg-green-600 w-full rounded-md py-1 text-white font-bold'>add</button>
                    </label>
                </form>
            </ModalBody>
        </div>
    )
}

export default Modals;
