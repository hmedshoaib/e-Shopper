import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getUser, updateUser } from "../Store/ActionCreaters/UserActionCreater"
export default function Updateprofile() {
    var [data, setdata] = useState({
        name: "",
        pic: "",
        email: "",
        phone: "",
        addressline1: "",
        addressline2: "",
        addressline3: "",
        pin: "",
        city: "",
        state: ""
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

    function getFile(e) {
        var name = e.target.name
        var value = e.target.files[0].name
        setdata((old) => {
            return {
                ...old,
                [name]: value
            }
        })
    }

    function postData(e) {
        e.preventDefault()

        var item = {
            id: localStorage.getItem("userid"),
            name: data.name,
            username: data.username,
            email: data.email,
            phone: data.phone,
            password: data.password,
            addressline1: data.addressline1,
            addressline2: data.addressline2,
            addressline3: data.addressline3,
            pin: data.pin,
            city: data.city,
            state: data.state,
            pic: data.pic,
            role: data.role
        }
        dispatch(updateUser(item))
        if (data.role === 'admin')
            navigate(`/admin-home`)
        else
            navigate('/profile')

    }

    useEffect(() => {
        dispatch(getUser())
        var d = users.find((item) => item.id === Number(localStorage.getItem("userid")))
        if (d)
            setdata(d)
    }, [])
    return (
        <>
            <div className="hero-wrap hero-bread" style={{ backgroundImage: "url('assets/images/bg_6.jpg')" }}>
                <div className="container">
                    <div className="row no-gutters slider-text align-items-center justify-content-center">
                        <div className="col-md-9  text-center">
                            {/* <p className="breadcrumbs"><span className=""><Link to="/">Home</Link></span> </p> */}
                            <h1 className="mb-0 bread">Profile Update Section</h1>
                        </div>
                    </div>
                    <form className='' onSubmit={postData}>
                        <div className="container-fluid w-100  ">
                            <div className="row Ahmed1 ">
                                <div className="col-md-6 col-12">
                                    <input type="text" name="name" id="name" placeholder='Enter your name:' className='form-control' onChange={getData} value={data.name} />
                                </div>
                                <div className="col-md-6 col-12">
                                    <input type="file" name="pic" id="pic" className='form-control' onChange={getFile} />
                                </div>
                            </div>
                            <div className="row Ahmed1">
                                <div className="col-md-6 col-12">
                                    <input type="email" name="email" id="email" placeholder='Enter your email:' className='form-control' onChange={getData} value={data.email} />
                                </div>
                                <div className="col-md-6 col-12">
                                    <input type="text" name="phone" id="phonr" placeholder='Enter your phone:' className='form-control' onChange={getData} value={data.phone} />
                                </div>
                            </div>
                            <div className="row Ahmed1">
                                <div className="col-md-6 col-12">
                                    <input type="text" name="addressline1" id="addressline1" placeholder='Enter House or Building No. :' className='form-control' onChange={getData} value={data.addressline1} />
                                </div>
                                <div className="col-md-6 col-12">
                                    <input type="text" name="addressline2" id="addressline2" placeholder='Enter Street No. or Near by :' className='form-control' onChange={getData} value={data.addressline2} />
                                </div>
                            </div>
                            <div className="row Ahmed1">
                                <div className="col-md-6 col-12">
                                    <input type="text" name="addressline3" id="addressline3" placeholder='Enter Village or locality :' className='form-control' onChange={getData} value={data.addressline3} />
                                </div>
                                <div className="col-md-6 col-12">
                                    <input type="text" name="pin" id="pin" placeholder='Enter Pin :' className='form-control' onChange={getData} value={data.pin} />
                                </div>
                            </div>
                            <div className="row Ahmed1">
                                <div className="col-md-6 col-12">
                                    <input type="text" name="city" id="city" placeholder='Enter city :' className='form-control' onChange={getData} value={data.city} />
                                </div>
                                <div className="col-md-6 col-12">
                                    <input type="text" name="state" id="state" placeholder='Enter State :' className='form-control' onChange={getData} value={data.state} />
                                </div>
                            </div>
                            <div className='mt-3'>
                                <button type='submit' className='w-100 btn btn-primary btn-lg text-dark'>Update</button>
                            </div>

                        </div>
                    </form>
                    {/* </div> */}
                </div>
            </div>
        </>
    )
}

