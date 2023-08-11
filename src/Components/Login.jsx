import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getUser, addUser } from "../Store/ActionCreaters/UserActionCreater"
export default function Login() {
    var [data, setdata] = useState({
        username: "",
        password: ""
    })

    var users = useSelector((state) => state.UserStateData)
    var dispatch = useDispatch()
    var navigate = useNavigate()

    function getData(e) {
        var name = e.target.name
        var value = e.target.value
        setdata((old) => {
            return {
                ...old,
                [name]: value
            }
        })
    }

    function postData(e) {
        e.preventDefault()
        var user = users.find((item) => item.username === data.username && item.password === data.password)
        if (user) {
            localStorage.setItem("login", true)
            localStorage.setItem("name", user.name)
            localStorage.setItem("username", user.name)
            localStorage.setItem("userid", user.id)
            localStorage.setItem("role", user.role)
            if (user.role === "admin")
                navigate("/admin-home")
            else
                navigate("/profile")
        }
        else
            alert(`Invalid Username and Password!!!`)
    }

    useEffect(() => {
        dispatch(getUser())
    }, [])
    return (
        <>
            <div className="hero-wrap hero-bread" style={{ backgroundImage: "url('assets/images/bg_6.jpg')" }}>
                <div className="container">
                    <div className="row no-gutters slider-text align-items-center justify-content-center">
                        <div className="col-md-9  text-center">
                            {/* <p className="breadcrumbs"><span className=""><Link to="/">Home</Link></span> </p> */}
                            <h1 className="mb-0 bread">Login Us</h1>
                        </div>
                        <div className="container-fluid w-100 ">
                            <div className='w-50 m-auto'>
                                {/* <h5 className='text-center bg1 my-4 text-light '>Login Section</h5> */}
                                <form onSubmit={postData}>
                                    <div className="mb-2 Ahmed1">
                                        {/* <label htmlFor="username">Username:</label> */}
                                        <input type="text" name="username" id="username" placeholder='Enter Username:' className='form-control' onChange={getData} />
                                    </div>
                                    <div className="mb-2 Ahmed1">
                                        {/* <label htmlFor="password">password:</label> */}
                                        <input type="password" name="password" id="password" placeholder='Enter Password:' className='form-control' onChange={getData} />
                                    </div>
                                    <div className=''>
                                        <button className='btn btn-primary w-100 text-dark btn-lg' type='submit'>Login</button>
                                    </div>
                                </form>
                                <div className='d-flex justify-content-between'>
                                    <Link className='text-dark mt-2' to="#">ForgetPassword</Link>
                                    <Link className='text-dark mt-2' to="/signup">NewUser?Create a Free Account</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
