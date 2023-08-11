import React, { useState, useEffect } from 'react'
import LeftNav from './LeftNav'
import { useNavigate } from 'react-router-dom'
import { addMaincategory, getMaincategory } from "../../Store/ActionCreaters/MaincategoryActionCreater"
import { useSelector, useDispatch } from 'react-redux'


export default function AdminAddMaincategory() {
    var [name, setname] = useState("")
    var maincategory = useSelector((state) => state.MainCategoryStateData)
    var dispatch = useDispatch()
    var navigate = useNavigate()

    
    function getData(e) {
        setname(e.target.value)
    }

    function postData(e) {
        e.preventDefault()
        var item = maincategory.find((item) => item.name === name)
        if (item)
            alert("Maincategory Name ia Already Exit")
        else {
            dispatch(addMaincategory({name:name}))
            navigate(`/admin-maincategory`)
        }
    }

    useEffect(() => {
        dispatch(getMaincategory())
    }, [])
    return (
        <>
            <div className="container-fluid my-5 ">
                <div className="row">
                    <div className="col-lg-2 col-12">
                        <LeftNav />
                    </div>

                    <div className="col-lg-10 col-12">
                        <h5 className='text-center bg1 text-light'> MainCategory</h5>
                        <form action="" className='p-5 Ahmed1' onSubmit={postData}>
                            <div className="mb-3">
                                <label htmlFor="name">Name:</label>
                                <input type="text" name="name" id="" placeholder='Enter main categeroy :' className='form-control' onChange={getData} />
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
