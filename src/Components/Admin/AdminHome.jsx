import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { getUser } from "../../Store/ActionCreaters/UserActionCreater"
import LeftNav from './LeftNav';

export default function AdminHome() {
    var [user, setuser] = useState({})
    var users = useSelector((state) => state.UserStateData)
    var dispatch = useDispatch()


    function getAPIData() {

        dispatch(getUser())

        var d = users.find((item) => item.id === Number(localStorage.getItem("userid")))
        if (d) {
            setuser(d)
        }
    }





    useEffect(() => {
        getAPIData()
    }, [user.length])


    return (
        <>
            <div className="container-fluid my-5 ">
                <div className="row">
                    <div className="col-lg-2 col-12">
                        <LeftNav />
                    </div>

                    <div className="col-lg-10 col-12">
                        <div className="row">
                            <div className="col-md-5 col-12">
                                {
                                    user.pic ?
                                        <img src={`/assets/images/${user.pic}`} height="460px" width='100%' alt="" /> :
                                        <img src="assets/images/noimage.png" height="460px" width='100%' alt="" />
                                }
                            </div>
                            <div className="col-md-7 col-12 mt-5">
                                <h5 className='bg1 text-center '>Admin-Home</h5>
                                <div className='d-flex mt-5'>
                                    <div className='w-50 p-1 border-bottom' >Name :</div>
                                    <div className='w-50 p-1 border-bottom' >{user.name}</div>
                                </div>
                                <div className='d-flex'>
                                    <div className='w-50 p-1 border-bottom' >User :</div>
                                    <div className='w-50 p-1 border-bottom' >{user.username}</div>
                                </div>
                                <div className='d-flex'>
                                    <div className='w-50 p-1 border-bottom' >Email :</div>
                                    <div className='w-50 p-1 border-bottom' >{user.email}</div>
                                </div>
                                <div className='d-flex'>
                                    <div className='w-50 p-1 border-bottom' >Phone :</div>
                                    <div className='w-50 p-1 border-bottom' >{user.phone}</div>
                                </div>
                                <div className='d-flex'>
                                    <div className='w-50 p-1 border-bottom' >Role :</div>
                                    <div className='w-50 p-1 border-bottom' >{user.role}</div>
                                </div>
                                <div className='mt-5'>
                                    <Link to="/" className='btn btn-primary w-100   text-dark p-2'>Update Profile</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
