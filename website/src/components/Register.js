import React from "react";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
const Register = () => {
    const navigate = useNavigate();
	const [user, setUser] = useState({
        firstname : "", lastname : "", email : "", phone : "", password : "", cpassword : ""
    });
    let name, value;
    const handleInputs = (e) => {
        name = e.target.name;
        value = e.target.value;
        setUser({...user, [name] : value});
    }
    const postData = async (e) => {
        e.preventDefault();
        const {firstname, lastname, email, phone, password, cpassword} = user;
        const res = fetch('/register', {
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({
                firstname, lastname, email, phone, password, cpassword
            })
        });
		if(!firstname || !lastname || !email || !phone || !password || !cpassword){
			window.alert("Please Enter Details");
			navigate('/register');
		}else{
        const data = await (await res).json();
        if(data.status === 422 || !data){
            window.alert("Invalid Details")
        }else{
            window.alert("Registration Successful");
            navigate('/login');
        }
	}
    }
	return (
		<>
			<section className="bg-white">
				<div className="flex justify-center min-h-screen">
					<div
						className="hidden bg-cover back lg:block lg:w-2/5"
						
					></div>

					<div className="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
						<div className="w-full">
							<h1 className="text-2xl font-semibold tracking-wider text-gray-800 capitalize">
								Sign Up For Flic
							</h1>

							<p className="mt-4 text-gray-500">
								Avail Paid Software For Free On Flic
							</p>

							<div className="mt-6">
								<h1 className="text-gray-500">Let's Sign Up</h1>

								<div className="mt-3 md:flex md:items-center md:-mx-2">

									<NavLink to="/login">
										<button className="flex justify-center w-full px-6 py-3 mt-4 text-blue-500 border border-blue-500 rounded-md md:mt-0 md:w-auto md:mx-2 dark:border-blue-400 dark:text-blue-400 focus:outline-none">
											<svg
												className="w-6 h-6"
												fill="none"
												viewbox="0 0 24 24"
												stroke="currentColor"
												stroke-width="2"
											>
												<path
													stroke-linecap="round"
													stroke-linejoin="round"
													d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
												/>
											</svg>

											<span className="mx-2">Login</span>
										</button>
									</NavLink>
								</div>
							</div>

							<form
								method="POST"
								className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2"
							>
								<div>
									<label className="block mb-2 text-sm text-gray-600">
										First Name
									</label>
									<input
										type="text" name='firstname' placeholder="Mustafa" autoComplete='off' 
                                        onChange={handleInputs}
                                        value={user.firstname}
										className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md  focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
										required
									/>
								</div>

								<div>
									<label className="block mb-2 text-sm text-gray-600 ">
										Last name
									</label>
									<input
										type="text"
										placeholder="Azad"
										name="lastname"
                                        autoComplete='off'
                                        onChange={handleInputs}
                                        value={user.lastname}
                                        className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md  focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
										required
									/>
								</div>

								<div>
									<label className="block mb-2 text-sm text-gray-600 ">
										Phone number
									</label>
									<input
										type="number"
										placeholder="XXX-XX-XXXX-XXX"
										name="phone"
                                        autoComplete='off'
                                        onChange={handleInputs}
                                        value={user.phone}
										className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md  focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
										required
									/>
								</div>

								<div>
									<label className="block mb-2 text-sm text-gray-600 ">
										Email address
									</label>
									<input
										type="email"
										placeholder="mustafaazad@flic.com"
										name="email"
                                        autoComplete='off'
                                        onChange={handleInputs}
                                        value={user.email}
										className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md  focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
										required
									/>
								</div>

								<div>
									<label className="block mb-2 text-sm text-gray-600 ">
										Password
									</label>
									<input
										type="password"
										placeholder="Enter your password"
										name="password"
                                        autoComplete='off'
                                        onChange={handleInputs}
                                        value={user.password}
										className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md  focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
										required
									/>
								</div>

								<div>
									<label className="block mb-2 text-sm text-gray-600 ">
										Confirm password
									</label>
									<input
										type="password"
										placeholder="Confirm your password"
										name="cpassword"
                                        autoComplete='off'
                                        onChange={handleInputs}
                                        value={user.cpassword}
										className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md  focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
										required
									/>
								</div>
                                <input type="submit" value="register" onClick={postData} className="flex items-center justify-between w-full px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"/>
							</form>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Register;
