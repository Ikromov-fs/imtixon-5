import React, { useState, useContext, useEffect } from "react"
import http from "../../axios/axios"
import { Context } from "../../companents/Context/Contex"
import Main from "../main/main"
import Modal2 from "../../companents/modal2/modal2"
const Suppliers = () => {
  const [datas, setData] = useState([])
  const { modal, setModal } = useContext(Context)
  useEffect(() => {
    http.get(`/suppliers/`, {
      headers: {
        'Authorization': 'Basic YWRtaW46MTIz'
      }
    })
      .then((res) => {
        console.log(res.data)
        setData(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])
  return (
    <div>
      <Main />
      <div>
        <table className='mx-auto mt-4'>
          <thead className='border-[1.5px] border-solid border-white'>
            <tr>
              <th className='border-[2px] border-solid border-white px-[70px] py-2'>id</th>
              <th className='border-[2px] border-solid border-white px-[70px] py-2'>User name</th>
              <th className='border-[2px] border-solid border-white px-[70px] py-2'>First name</th>
              <th className='border-[2px] border-solid border-white px-[70px] py-2'>Last name</th>
              <th className='border-[2px] border-solid border-white px-[70px] py-2'>Age</th>
              <th className='border-[2px] border-solid border-white px-[70px] py-2'>Email</th>
              <th className='border-[2px] border-solid border-white px-[70px] py-2'>Phone</th>
              <th className='border-[2px] border-solid border-white px-[70px] py-2'>Adress</th>
              <th className='border-[2px] border-solid border-white px-[70px] py-2'>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              datas.map((item) => (
                <tr key={item.id}>
                  <td className='border-[2px] border-solid border-white px-2 py-2'>{item.id}</td>
                  <td className='border-[2px] border-solid border-white w-16 '>{item.username}</td>
                  <td className='border-[2px] border-solid border-white px-2 py-2'>{item.first_name}</td>
                  <td className='border-[2px] border-solid border-white px-2 py-2'>{item.last_name}</td>
                  <td className='border-[2px] border-solid border-white px-2 py-2'>{item.age}</td>
                  <td className='border-[2px] border-solid border-white px-2 py-2'>{item.email}</td>
                  <td className='border-[2px] border-solid border-white px-2 py-2'>{item.phone_number}</td>
                  <td className='border-[2px] border-solid border-white px-2 py-2'>{item.address}</td>
                  <td className='border-[2px] border-solid border-white px-2 py-2'><button className='px-4 py-1 bg-green-500 rounded-md text-white font-medium text-xl mx-1 '>edit</button> <button className='px-4 py-1 bg-red-500 rounded-md text-white font-medium text-xl mx-1 '>delete</button> </td>
                </tr>
              ))
            }
          </tbody>
        </table>
        <div className='flex justify-center mt-5'>
          <button onClick={() => setModal(prev => !prev)} className='outline-none px-4 py-1 bg-slate-400 rounded-md text-black'>add</button>
        </div>
      </div>
      <Modal2 />
    </div>
  )
}


export default Suppliers;