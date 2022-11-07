import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
const Register = () => {
    const [user,setUser] = useState({
        firstname: "", lastname:"", phone:"", email:"", password:"", cpassword:""
    })
    const history = useNavigate();
    let name,value;
    const handleData = (e) => {
        name = e.target.name;
        value = e.target.value;
        setUser({...user,[name]:value});
    }

    const Postdata = async (e) => {
        e.preventDefault();
        const {firstname, lastname, phone, email, password, cpassword} = user;
        const res = await fetch('/register', {
            method : "post",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({
                firstname, lastname, phone, email, password, cpassword
            })
        });
        const data = await res.json();
        if(data === "1"){
            window.alert("Email / Phone Number Is Invalid");
        }else if(data === true){
            window.alert("Registration Succsesful");
            history("/login");
        }else if(data === false){
            window.alert("Password Is Not Matching");
        }
    }
  return (
    <>
        <section className="mt">

<div className="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
    <div className="w-full">
        
        <h1 className="mt-24  md:text-3xl text-xl font-[Caudex] text-[#3A3845] ">
            Register | Create new account
        </h1>


        <form method='post' className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
            <div>
                <label className="block mb-2 text-sm font-[Caudex] text-[#3A3845]">First Name</label>
                <input type="text" name='firstname' onChange={handleData} value={user.firstname} placeholder="John" autoComplete='off' className="block w-full rounded-lg border-gray-600  p-4 pr-12 text-sm shadow-sm" />
            </div>

            <div>
                <label className="block mb-2 text-sm font-[Caudex] text-[#3A3845]">Last name</label>
                <input type="text" name='lastname' onChange={handleData} value={user.lastname} placeholder="Snow" autoComplete='off' className="block w-full rounded-lg border-gray-600  p-4 pr-12 text-sm shadow-sm" />
            </div>

            <div>
                <label className="block mb-2 text-sm font-[Caudex] text-[#3A3845]">Phone number</label>
                <input type="text" name='phone' onChange={handleData} value={user.phone} placeholder="XXX-XX-XXXX-XXX" autoComplete='off' className="block w-full rounded-lg border-gray-600  p-4 pr-12 text-sm shadow-sm" />
            </div>

            <div>
                <label className="block mb-2 text-sm font-[Caudex] text-[#3A3845]">Email address</label>
                <input type="email" name='email' onChange={handleData} value={user.email} placeholder="johnsnow@example.com" autoComplete='off' className="block w-full rounded-lg border-gray-600  p-4 pr-12 text-sm shadow-sm" />
            </div>

            <div>
                <label className="block mb-2 text-sm font-[Caudex] text-[#3A3845]">Password</label>
                <input type="password" onChange={handleData} value={user.password} name='password' placeholder="Enter your password" autoComplete='off' className="block w-full rounded-lg border-gray-600  p-4 pr-12 text-sm shadow-sm" />
            </div>

            <div>
                <label className="block mb-2 text-sm font-[Caudex] text-[#3A3845]">Confirm password</label>
                <input type="password" onChange={handleData} value={user.cpassword} name='cpassword' placeholder="Enter your password" autoComplete='off' className="block w-full rounded-lg border-gray-600  p-4 pr-12 text-sm shadow-sm" />
            </div>

            <input
                className="flex items-center justify-between w-full px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#d79326] rounded-xl hover:bg-[#ffb13b] focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                type="submit"
                value="register"
                onClick={Postdata}
                />
        </form>
    </div>
</div>

</section>
    </>
  )
}

export default Register