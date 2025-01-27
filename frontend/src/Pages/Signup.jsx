import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Button from '@mui/material/Button';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
import { USER_API_ENDPOINT } from '../utils/API';
import {toast} from 'react-toastify'


const Signup = () => {
  
  const navigate = useNavigate()
  const [formInputData,setFormInputData] = useState({
    fullName:"",
    email:"",
    phoneNumber:"",
    password:"",
    file:"",
    role:""
  });

  const changeHandler = (e) => {
    setFormInputData({
      ...formInputData,
      [e.target.name]:e.target.value
    })
 }
 const changeFile = (e) =>{
  setFormInputData({
    ...formInputData,
    file:e.target.files?.[0]
  })
 }

 const handleSubmit  = async(e) => {
  e.preventDefault();
  try {
    const formData = new FormData();
    formData.append("fullName",formInputData.fullName);
    formData.append("email",formInputData.email);
    formData.append("phoneNumber",formInputData.phoneNumber);
    formData.append("password",formInputData.password);
    formData.append("file",formInputData.file);
    formData.append("role",formInputData.role);

    const res = await axios.post(`${USER_API_ENDPOINT}/register`,formData,{
      headers:{
        "Content-Type":"multipart/form-data"
      },
      withCredentials:true
    });
    if(res.data.success){
      console.log(res.data);
      navigate("/login")
      toast.success(res.data.message);
    }

  } catch (error) {
    toast.error(error.response.data.message)
    console.log(error)
  }
 }
  
  return (
    <div>
        <Navbar/>
        <div className='flex justify-center p-10 ' >
        <form onSubmit={handleSubmit} className='shadow-sm p-4 md:w-4/12'>
        <p className='text-xl font-semibold 's>Signup Form </p>
      <div className="space-y-12">
     

        <div className=" border-gray-900/10 pb-5">
                                      
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-6">
              <label htmlFor="fullName" className="block text-sm/6 font-medium text-gray-900">
               FullName
              </label>
              <div className="mt-2">
                <input onChange={changeHandler}
                  id="fullName"
                  name="fullName"
                  value={formInputData.fullName}
                  type="text"

                  autoComplete="given-name"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
          
            

            <div className="sm:col-span-6">
              <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input onChange={changeHandler}
                  id="email"
                  name="email"
                  value={formInputData.email}
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
            <div className="sm:col-span-6">
              <label htmlFor="phoneNumber" className="block text-sm/6 font-medium text-gray-900">
                Phone Number
              </label>
              <div className="mt-2">
                <input onChange={changeHandler}
                  id="phoneNumber"
                  name="phoneNumber"
                  type="number"
                  value={formInputData.phoneNumber}
                  autoComplete="family-name"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div className="sm:col-span-6">
              <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                Password
              </label>
              <div className="mt-2">
                <input onChange={changeHandler}
                  id="password"
                  name="password"
                  value={formInputData.password}
                  type="password"
                  autoComplete="family-name"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
            

            

            

            
          </div>
        </div>
   <div className=" border-gray-900/10 pb-2">
          
   <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
   
   <div className="col-span-full">
     <label htmlFor="photo" className="block text-sm/6 font-medium text-gray-900">
       ProfilePhoto
     </label>
     <div className="mt-2 flex items-center gap-x-3">
       <UserCircleIcon aria-hidden="true" className="size-12 text-gray-300" />
       <div className='w-full'>
       <input className='shadow rounded-sm p-2 w-full' type="file" onChange={changeFile} name="file"  id="photo" />
       <p className="text-xs/5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
       </div>

     </div>
   </div>
 </div>
         
        </div>
        <div className=" border-gray-900/10 pb-5">
        

          <div className="">
         

            <fieldset>
              <legend className="text-sm/6 font-semibold text-gray-900">Role</legend>
              <div className="mt-6 space-y-6">
               
                <div className="flex items-center gap-x-3">
                  <input
                  onChange={changeHandler}
                    id="student"
                    name="role"
                    type="radio"
                    value="student"
                    checked={formInputData.role === "student"}
                    className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
                  />
                  <label htmlFor="student" className="block text-sm/6 font-medium text-gray-900">
                    Student
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input onChange={changeHandler}
                    id="recruiter"
                    name="role"
                    value="recruiter"
                    checked={formInputData.role === "recruiter"}
                    type="radio"
                    className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
                  />
                  <label htmlFor="recruiter" className="block text-sm/6 font-medium text-gray-900">
                    Recruiter
                  </label>
                </div>
              </div>
            </fieldset>
          </div>
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-4 w-full">
       
        <button
          type="submit"
          className="w-12/12 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          SignUp
        </button>
        <p>Alreday Have an Account ? <span className='text-blue-600'><Link to={"/login"}>Login</Link></span></p>
      </div>
    </form>
        </div>
    </div>
  )
}

export default Signup