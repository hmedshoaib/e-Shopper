import React, { useEffect, useState } from 'react'
import {  Link, useNavigate, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact, getContact, updateContact } from "../../Store/ActionCreaters/ContactActionCreater"
import LeftNav from './LeftNav'



export default function AdminSingleContact() {
    var [data, setdata] = useState({})
    var contact = useSelector((state) => state.ContactStateData)
    var { id } = useParams()
    var dispatch = useDispatch()
    var navigate =useNavigate()


    function getAPIData() {
        dispatch(getContact())
        var d = contact.find((item) => item.id === Number(id))
        if (d) {
            setdata(d)
        }
    }

    function update(e) {
        dispatch(updateContact({ ...data, status: "Done" }))
        setdata((old) => {
            return {
                ...old,
                ['status']: "Done"
            }
        })
    }

    function deleteRecord(e) {
        dispatch(deleteContact({ ...data, status: "Done" }))
        navigate("/admin-contactus/")
    }

    useEffect(() => {
        getAPIData()
    }, [contact.length])
    return (
        <>
            <div className="container-fluid my-5 ">
                <div className="row">
                    <div className="col-lg-2 col-12">
                        <LeftNav />
                    </div>

                    <div className="col-lg-10 col-12">
                        <h5 className='text-center bg1'> <Link to="/admin-add-Contact" className='text-light'>Single-Contact</Link> </h5>
                        <div className="d-flex mt-5 ">
                            <div className="w-50 p-1 border-bottom">ID</div>
                            <div className="w-50 p-1 border-bottom">{data.id}</div>
                        </div>
                        <div className="d-flex">
                            <div className="w-50 p-1 border-bottom">Name</div>
                            <div className="w-50 p-1 border-bottom">{data.name}</div>
                        </div>
                        <div className="d-flex">
                            <div className="w-50 p-1 border-bottom">Email</div>
                            <div className="w-50 p-1 border-bottom">{data.email}</div>
                        </div>
                        <div className="d-flex">
                            <div className="w-50 p-1 border-bottom">Phone</div>
                            <div className="w-50 p-1 border-bottom">{data.phone}</div>
                        </div>
                        <div className="d-flex">
                            <div className="w-50 p-1 border-bottom">Subject</div>
                            <div className="w-50 p-1 border-bottom">{data.subject}</div>
                        </div>
                        <div className="d-flex">
                            <div className="w-50 p-1 border-bottom">Message</div>
                            <div className="w-50 p-1 border-bottom">{data.message}</div>
                        </div>
                        <div className="d-flex">
                            <div className="w-50 p-1 border-bottom">Date</div>
                            <div className="w-50 p-1 border-bottom">{data.time}</div>
                        </div>
                        <div className="d-flex">
                            <div className="w-50 p-1 border-bottom">Status</div>
                            <div className="w-50 p-1 border-bottom">{data.status}</div>
                        </div>
                        <div className="d-flex">
                            <div className=' bg1 xyne mt-2 w-100'>
                                {
                                    data.status === "Active" ?
                                        <button className='btn  text-center  w-100' onClick={update}>Update-Status-Done</button> :
                                        <button className='btn  text-center  w-100' onClick={deleteRecord}>Delete-Record</button>
                                }
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
