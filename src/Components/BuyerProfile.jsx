import React from 'react'
import { Link } from 'react-router-dom'

export default function BuyerProfile({ user }) {
    return (
        <>
            <h5 className='text-center bg1'>Buyer-Profile</h5>
            <div className="d-flex ">
                <div className='w-50 p-1 border-bottom' >Name :</div>
                <div className='w-50 p-1 border-bottom' >{user.name}</div>
            </div>
            <div className="d-flex">
                <div className='w-50 p-1 border-bottom' >UserName :</div>
                <div className='w-50 p-1 border-bottom' >{user.name}</div>
            </div>
            <div className="d-flex">
                <div className='w-50 p-1 border-bottom' >Email :</div>
                <div className='w-50 p-1 border-bottom' >{user.email}</div>
            </div>
            <div className="d-flex">
                <div className='w-50 p-1 border-bottom' >Phone :</div>
                <div className='w-50 p-1 border-bottom' >{user.phone}</div>
            </div>
            <div className="d-flex">
                <div className='w-50 p-1 border-bottom' >Addressline1 :</div>
                <div className='w-50 p-1 border-bottom' >{user.addressline1}</div>
            </div>
            <div className="d-flex">
                <div className='w-50 p-1 border-bottom' >Addressline2 :</div>
                <div className='w-50 p-1 border-bottom' >{user.addressline2}</div>
            </div>
            <div className="d-flex">
                <div className='w-50 p-1 border-bottom' >Addressline3 :</div>
                <div className='w-50 p-1 border-bottom' >{user.addressline3}</div>
            </div>
            <div className="d-flex">
                <div className='w-50 p-1 border-bottom' >Pin :</div>
                <div className='w-50 p-1 border-bottom' >{user.pin}</div>
            </div>
            <div className="d-flex">
                <div className='w-50 p-1 border-bottom' >City :</div>
                <div className='w-50 p-1 border-bottom' >{user.city}</div>
            </div>
            <div className="d-flex">
                <div className='w-50 p-1 border-bottom' >State :</div>
                <div className='w-50 p-1 border-bottom' >{user.state}</div>
            </div>
            <div className="d-flex">
                <div className='w-50 p-1 border-bottom' >Role :</div>
                <div className='w-50 p-1 border-bottom' >{user.role}</div>
            </div>
            <div className=' text-center my-3'>
                <Link to="/update-profile" className='btn btn-primary w-100'>Update</Link>
            </div>
        </>
    )
}
