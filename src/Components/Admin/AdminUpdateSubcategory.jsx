import React, { useState, useEffect } from 'react'
import LeftNav from './LeftNav'
import { useNavigate, useParams } from 'react-router-dom'
import { updateSubcategory, getSubcategory } from "../../Store/ActionCreaters/SubcategoryActionCreater"
import { useSelector, useDispatch } from 'react-redux'


export default function AdminUpdateSubcategory() {
    var [name, setname] = useState("")
    var { id } = useParams()
    var subcategory = useSelector((state) => state.SubCategoryStateData)
    var dispatch = useDispatch()
    var navigate = useNavigate()


    function getData(e) {
        setname(e.target.value)
    }

    function postData(e) {
        e.preventDefault()
        var item = subcategory.find((item) => item.name === name)
        if (item)
            alert("Subcategory Name ia Already Exit")
        else {
            dispatch(updateSubcategory({ id: id, name: name }))
            navigate("/admin-subcategory")
        }
    }

    useEffect(() => {
        dispatch(getSubcategory())
        var item = subcategory.find((item) => item.id === Number(id))
        setname(item.name)
    }, [])
    return (
        <>
            <div className="container-fluid my-5 ">
                <div className="row">
                    <div className="col-lg-2 col-12">
                        <LeftNav />
                    </div>

                    <div className="col-lg-10 col-12">
                        <h5 className='text-center bg1 text-light'> SubCategory</h5>
                        <form action="" className='p-5 Ahmed1' onSubmit={postData}>
                            <div className="mb-3">
                                <label htmlFor="name">Name:</label>
                                <input type="text" name="name" id="" placeholder='Enter to update sub-categeroy :' className='form-control' onChange={getData} value={name} />
                            </div>
                            <div className='mb-3 text-center'>
                                <button type='submit' className='btn btn-primary w-100 text-light '>Update</button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </>
    )
}
