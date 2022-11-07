import React from 'react'
import { useState } from 'react'
import {json, NavLink} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const loginUser = async (e) =>{
        e.preventDefault();
        const res = await fetch("/login",{
            method : 'post',
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({
                email, password
            })
        })
        const data = await res.json();
        if(data === true){
            window.alert("Successfully Login");
            navigate('/');
        } else{
            window.alert("Invalid Details");
        }
    }
  return (
    <>
      <div className='font-serif'>
            <section className="relative flex flex-wrap lg:h-screen lg:items-center">
                <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
                    <div className="mx-auto max-w-lg text-center">
                    <h1 className="text-2xl mt-11 md:mt-0 font-bold sm:text-5xl font-[Caudex] text-[#3A3845]">Login</h1>

                    
                    </div>

                    <form method='post' className="mx-auto mt-8 mb-0 max-w-md space-y-4">
                    <div>
                        <label htmlFor="email" className="sr-only">Email</label>

                        <div className="relative">
                        <input
                            type="email"
                            className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                            placeholder="Enter email"
                            name='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <span className="absolute inset-y-0 right-4 inline-flex items-center">
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-gray-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                            />
                            </svg>
                        </span>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="password" className="sr-only">Password</label>
                        <div className="relative">
                        <input
                            type="password"
                            className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                            placeholder="Enter password"
                            name='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        <span className="absolute inset-y-0 right-4 inline-flex items-center">
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-gray-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                            />
                            </svg>
                        </span>
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <p className="text-sm text-gray-500">
                        No account?
                        <NavLink to="/register" className="underline">Sign up</NavLink>
                        </p>

                        <input
                        type="submit"
                        value="Sign in"
                        onClick={loginUser}
                        className="ml-3 inline-block rounded-lg bg-[#0f876b] px-5 py-3 text-sm font-medium text-white"
                        />
                        
                    </div>
                    </form>
                </div>

                <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
                    <img
                    alt="Welcome"
                    src="./assets/login.jpg"
                    className="absolute inset-0 h-full w-full object-cover"
                    />
                </div>
            </section>

    </div>
    </>
  )
}

export default Login
