import React from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom';
// import {json, NavLink} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [valid,setValid] = useState(false);
  const loginUser = async (e) => {
    e.preventDefault();
    const res = await fetch('/login', {
      method : "POST",
      headers : {
        "Content-Type" : "application/json"
      },
      body : JSON.stringify({
        email, password
      })
    });

    const data = await (await res).json();

    if(res.status === 400 || !data) {
      window.alert("Invalid Details");
      setValid(false);
    }else{
      window.alert("Login Successfully");
      setValid(true);
    }
    (valid)?navigate('/profile'):navigate('/login');
  }
  return (
    <>
        <div className="relative flex h-full w-full">
  <div className="h-screen w-1/2 bg-black">
    <div className="mx-auto flex h-full w-2/3 flex-col justify-center text-white xl:w-1/2">
      <div>
        <p className="text-2xl">Login|</p>
        <p>please login to continue|</p>
      </div>
      <div className="my-6">
        <button className="flex w-full justify-center rounded-3xl border-none bg-white p-1 text-black hover:bg-gray-200 sm:p-2"><img src="https://freesvg.org/img/1534129544.png" alt='svgs' className="mr-2 w-6 object-fill" />Sign in with Google</button>
      </div>
      <div>
        <fieldset className="border-t border-solid border-gray-600">
          <legend className="mx-auto px-2 text-center text-sm">Or login via our secure system</legend>
        </fieldset>
      </div>
      <div className="mt-10">
        <form method='POST'>
          <div>
            <label className="mb-2.5 block font-extrabold" for="email">Email</label>
            <input type="email" name='email' id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="inline-block w-full rounded-full bg-white p-2.5 leading-none text-black placeholder-indigo-900 shadow placeholder:opacity-30" placeholder="mustafa@flic.com" />
          </div>
          <div className="mt-4">
            <label className="mb-2.5 block font-extrabold" for="email">Password</label>
            <input type="password" id="email" name='password' value={password} onChange={(e) => setPassword(e.target.value)} className="inline-block w-full rounded-full bg-white p-2.5 leading-none text-black placeholder-indigo-900 shadow" />
          </div>
          <div className="mt-4 flex w-full flex-col justify-between sm:flex-row">
            <div><input type="checkbox" id="remember" /><label for="remember" className="mx-2 text-sm">Remember me</label></div>
            <div>
              <NavLink to="/" className="text-sm hover:text-gray-200">Forgot password</NavLink>
            </div>
          </div>
          <div className="my-10">
            <button type='submit' name='submit' onClick={loginUser} className="w-full rounded-full bg-orange-600 p-5 hover:bg-orange-800">Login</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <div className="h-screen w-1/2 bg-blue-600">
    <img src="https://images.pexels.com/photos/2523959/pexels-photo-2523959.jpeg" alt='light bulbs' className="h-full w-full" />
  </div>
</div>
    </>
  )
}

export default Login
