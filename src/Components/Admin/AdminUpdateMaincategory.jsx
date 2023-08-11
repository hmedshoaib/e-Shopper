// import React,{useState,useEffect} from 'react'
// import LeftNav from './LeftNav'

// import {updateMaincategory,getMaincategory} from "../../Store/ActionCreaters/MaincategoryActionCreater"
// import { useNavigate,useParams } from 'react-router-dom'
// import { useSelector,useDispatch } from 'react-redux'
// export default function AdminUpdateMaincategory() {
//     var [name,setname] = useState("")
//     var {id} = useParams()
//     var maincategory = useSelector((state)=>state.MaincategoryStateData)
//     var navigate = useNavigate()
//     var dispatch = useDispatch()
//     function getData(e){
//         setname(e.target.value)
//     } 
//     function postData(e){
//         e.preventDefault()
//         var item = maincategory.find((item)=>item.name===name)
//         if(item)
//         alert("Maincategory Name is Already Exist")
//         else{
//             dispatch(updateMaincategory({id:id,name:name}))
//             navigate("/admin-maincategory")
//         }
//     }
//     useEffect(()=>{
//         dispatch(getMaincategory())
//         var item = maincategory.find((item)=>item.id===Number(id))
//         setname(item.name)
//     },[])
//     return (
//         <>
//             <div className="contain-fluid my-5">
//             <div className="row">
//                 <div className="col-lg-2 col-12">
//                     <LeftNav/>
//                 </div>
//                 <div className="col-lg-10 col-12">
//                     <h5 className='bg-secondary text-center text-light p-1'>Maincategory</h5>
//                     <form className='p-3' onSubmit={postData}>
//                         <div className="mb-3">
//                             <label htmlFor="name">Name</label>
//                             <input type="text" name="name" id="name" placeholder='Enter Maincategory Name : ' className='form-control' onChange={getData} value={name}/>
//                         </div>
//                         <div className="mb-3">
//                             <button type='submit' className='btn btn-secondary w-100'>Update</button>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </div>
//         </>
//     )
// }




import React, { useState, useEffect } from 'react'
import LeftNav from './LeftNav'
import { useNavigate, useParams } from 'react-router-dom'
import { updateMaincategory, getMaincategory } from "../../Store/ActionCreaters/MaincategoryActionCreater"
import { useSelector, useDispatch } from 'react-redux'


export default function AdminUpdateMaincategory() {
    var [name, setname] = useState("")
    var { id } = useParams()
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
            dispatch(updateMaincategory({ id: id, name: name }))
            navigate("/admin-maincategory")
        }
    }

    useEffect(() => {
        dispatch(getMaincategory())
        var item = maincategory.find((item) => item.id === Number(id))
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
                        <h5 className='text-center bg1 text-light'> MainCategory</h5>
                        <form action="" className='p-5 Ahmed1' onSubmit={postData}>
                            <div className="mb-3">
                                <label htmlFor="name">Name:</label>
                                <input type="text" name="name" id="" placeholder='Enter to update main categeroy :' className='form-control' onChange={getData} value={name} />
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


