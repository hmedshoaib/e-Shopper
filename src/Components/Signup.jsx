import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getUser, addUser } from "../Store/ActionCreaters/UserActionCreater"
export default function Signup() {
    var [data, setdata] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        password: "",
        cpassword: ""
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
        if (data.password === data.cpassword) {
            var d = users.find((item) => item.username === data.username)
            if (d)
                alert(`UserName Already taken!!!!`)
            else {
                var item = {
                    name: data.name,
                    username: data.username,
                    email: data.email,
                    phone: data.phone,
                    password: data.password,
                    addressline1: "",
                    addressline2: "",
                    addressline3: "",
                    pic: "",
                    city: "",
                    state: "",
                    pic: "",
                    role: "user",
                }
                dispatch(addUser(item))
                navigate(`/login`)
            }

        }
        else
            alert(`Password and Cpassword doesn't match!!!`)
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
                            <h1 className="mb-0 bread">Signup Section</h1>
                        </div>
                    </div>
                    <form className='' onSubmit={postData}>
                        <div className="container-fluid w-100  ">
                            <div className="row Ahmed1 ">
                                <div className="col-md-6 col-12">
                                    <input type="text" name="name" id="name" placeholder='Enter your name:' className='form-control' onChange={getData} />
                                </div>
                                <div className="col-md-6 col-12">
                                    <input type="text" name="username" id="username" placeholder='Enter your username:' className='form-control' onChange={getData} />
                                </div>
                            </div>
                            <div className="row Ahmed1">
                                <div className="col-md-6 col-12">
                                    <input type="email" name="email" id="email" placeholder='Enter your email:' className='form-control' onChange={getData} />
                                </div>
                                <div className="col-md-6 col-12">
                                    <input type="text" name="phone" id="phonr" placeholder='Enter your phone:' className='form-control' onChange={getData} />
                                </div>
                            </div>
                            <div className="row Ahmed1">
                                <div className="col-md-6 col-12">
                                    <input type="password" name="password" id="password" placeholder='Enter your password:' className='form-control' onChange={getData} />
                                </div>
                                <div className="col-md-6 col-12">
                                    <input type="password" name="cpassword" id="cpassword" placeholder='Enter your cpassword:' className='form-control' onChange={getData} />
                                </div>
                            </div>
                            <div className='mt-3'>
                                <button type='submit' className='w-100 btn btn-primary btn-lg text-dark'>Signup</button>
                            </div>
                            <div className='d-flex justify-content-center mt-2'>
                                <Link className='text-dark' to="/login">Already User?Login to your Account</Link>
                            </div>
                        </div>
                    </form>
                    {/* </div> */}
                </div>
            </div>
        </>
    )
}

