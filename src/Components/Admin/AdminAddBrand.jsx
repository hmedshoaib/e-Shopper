import React, { useState, useEffect } from 'react'
import LeftNav from './LeftNav'
import { useNavigate } from 'react-router-dom'
import { addBrand, getBrand } from "../../Store/ActionCreaters/BrandActionCreater"
import { useSelector, useDispatch } from 'react-redux'


export default function AdminAddBrand() {
    var [name, setname] = useState("")
    var brand = useSelector((state) => state.BrandStateData)
    var dispatch = useDispatch()
    var navigate = useNavigate()

    
    function getData(e) {
        setname(e.target.value)
    }

    function postData(e) {
        e.preventDefault()
        var item = brand.find((item) => item.name === name)
        if (item)
            alert("Brand Name ia Already Exit")
        else {
            dispatch(addBrand({name:name}))
            navigate(`/admin-brand`)
        }
    }

    useEffect(() => {
        dispatch(getBrand())
    }, [])
    return (
        <>
            <div className="container-fluid my-5 ">
                <div className="row">
                    <div className="col-lg-2 col-12">
                        <LeftNav />
                    </div>

                    <div className="col-lg-10 col-12">
                        <h5 className='text-center bg1 text-light'> Brand</h5>
                        <form action="" className='p-5 Ahmed1' onSubmit={postData}>
                            <div className="mb-3">
                                <label htmlFor="name">Name:</label>
                                <input type="text" name="name" id="" placeholder='Enter sub-categeroy :' className='form-control' onChange={getData} />
                            </div>
                            <div className='mb-3 text-center'>
                                <button type='submit' className='btn btn-primary w-100 text-light '>Add</button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </>
    )
}
