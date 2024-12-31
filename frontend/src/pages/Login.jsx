import React, { useState } from 'react';
import axios from 'axios';
import {toast} from 'react-toastify';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { useEffect } from 'react';
import {useNavigate} from 'react-router-dom';

const Login = () => {
  const [currState, setCurrState] = useState('Sign Up');
 

  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const {token,setToken}=useContext(AppContext);
  const nav=useNavigate();

  const submithandler=async(e)=>{
    e.preventDefault();
    try{
      if(currState=='Sign Up')
      {
        const res=await axios.post('http://localhost:3000/api/user/register',{name,email,password});
        if(res.data.success)
        {
          toast.success(res.data.message);
          localStorage.setItem('token',res.data.token);
          setToken(res.data.token);
          setName('');
          setEmail('');
          setPassword('');
        }
      }
      else
      {
        const res=await axios.post('http://localhost:3000/api/user/login',{email,password});
        if(res.data.success)
        {
          toast.success(res.data.message);
          localStorage.setItem('token',res.data.token);
          setToken(res.data.token);
          setEmail('');
          setPassword('');
        }
      }
    }
    catch(error)
    {
      console.log(error);
    }
  }

  useEffect(()=>{
    if(token)
    {
        nav('/');
    }
  },[token])


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-md shadow-md w-80">
        <h2 className="text-2xl font-semibold text-center mb-6">
          {currState}
        </h2>
        <form onSubmit={submithandler}>
          {currState === 'Sign Up' && (
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e)=>setName(e.target.value)}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your name"
                required
              />
            </div>
          )}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
          >
            {currState=='Sign Up'?'Sign Up':'Login'}
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            {currState === 'Sign Up' ? 'Already have an account?' : "Don't have an account?"}
            <span
              className="text-blue-500 cursor-pointer hover:underline ml-1"
              onClick={()=>setCurrState(currState=='Sign Up'?'Login':'Sign Up')}
            >
              {currState === 'Sign Up' ? 'Login' : 'Sign Up'}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
