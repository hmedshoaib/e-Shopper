import React, { useState, useEffect } from 'react'
import LeftNav from './LeftNav'
import { useSelector, useDispatch } from 'react-redux'


import { useNavigate, useParams } from 'react-router-dom'
import { updateProduct, getProduct } from "../../Store/ActionCreaters/ProductActionCreater"
import { getMaincategory } from "../../Store/ActionCreaters/MaincategoryActionCreater"
import { getSubcategory } from "../../Store/ActionCreaters/SubcategoryActionCreater"
import { getBrand } from "../../Store/ActionCreaters/BrandActionCreater"


export default function AdminUpdateProduct() {
    var [data, setdata] = useState({
        name: "",
        maincategory: "",
        subcategory: "",
        brand: "",
        color: "",
        size: "",
        baseprice: 0,
        discount: 0,
        finalprice: 0,
        stock: "In Stock",
        description: "This is sample product",
        pic1: "",
        pic2: "",
        pic3: "",
        pic4: ""
    })
    var { id } = useParams()
    var maincategory = useSelector((state) => state.MainCategoryStateData)
    var subcategory = useSelector((state) => state.SubCategoryStateData)
    var brand = useSelector((state) => state.BrandStateData)
    var product = useSelector((state) => state.ProductStateData)

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
        var bp = Number(data.baseprice)
        var d = Number(data.discount)
        var fp = parseInt(bp - bp * d / 100)
        var mc = data.maincategory
        var sb = data.subcategory
        var br = data.brand
        if (mc === "")
            mc = maincategory[0].name
        if (sb === "")
            sb = subcategory[0].name
        if (br === "")
            br = brand[0].name
        var item = {
            id: id,
            name: data.name,
            maincategory: mc,
            subcategory: sb,
            brand: br,
            color: data.color,
            size: data.size,
            baseprice: bp,
            discount: d,
            finalprice: fp,
            stock: data.stock,
            description: data.description,
            pic1: data.pic1,
            pic2: data.pic2,
            pic3: data.pic3,
            pic4: data.pic4
        }
        dispatch(updateProduct(item))
        navigate(`/admin-product`)
    }

    useEffect(() => {
        dispatch(getMaincategory())
        dispatch(getSubcategory())
        dispatch(getBrand())
        dispatch(getProduct())
        var item = product.find((item) => item.id === Number(id))
        if (item)
            setdata(product.find((item) => item.id === Number(id)))
    }, [])
    return (
        <>
            <div className="container-fluid my-5 ">
                <div className="row">
                    <div className="col-lg-2 col-12">
                        <LeftNav />
                    </div>

                    <div className="col-lg-10 col-12">
                        <h5 className='text-center bg1 text-light'>Product</h5>
                        <form action="" className='p-5 Ahmed1' onSubmit={postData}>
                            <div className="mb-3">
                                <label htmlFor="name">Name:</label>
                                <input type="text" name="name" id="" placeholder='Enter your-Product :' className='form-control' onChange={getData} value={data.name} />
                            </div>
                            <div className="row mb-3">
                                <div className="col-lg-3 col-md-6 col-12">
                                    <label htmlFor="maincategory">MainCategory</label>
                                    <select name="maincategory" id="maincategory" onChange={getData} className='form-control'>
                                        {
                                            maincategory.map((item, index) => {
                                                return <option key={index} value={item.name} selected={item.name === data.maincategory}>{item.name}</option>
                                            })
                                        }
                                    </select>
                                </div>
                                <div className="col-lg-3 col-md-6 col-12">
                                    <label htmlFor="subcategory">Subcategory</label>
                                    <select name="subcategory" id="subcategory" onChange={getData} className='form-control'>
                                        {
                                            subcategory.map((item, index) => {
                                                return <option key={index} value={item.name} selected={item.name === data.subcategory}>{item.name}</option>
                                            })
                                        }
                                    </select>
                                </div>
                                <div className="col-lg-3 col-md-6 col-12">
                                    <label htmlFor="brand">Brand</label>
                                    <select name="brand" id="brand" onChange={getData} className='form-control'>
                                        {
                                            brand.map((item, index) => {
                                                return <option key={index} value={item.name} selected={item.name === data.brand}>{item.name}</option>
                                            })
                                        }
                                    </select>
                                </div>
                                <div className="col-lg-3 col-md-6 col-12">
                                    <label htmlFor="Stock">Stock</label>
                                    <select name="Stock" id="Stock" onChange={getData} className='form-control'>
                                        <option value="In Stock" selected={"In Stock" === data.stock}>In Stock</option>
                                        <option value="Out of  Stock" selected={"Out of Stock" === data.stock}>Out of Stock</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-md-6 col-12">
                                    <label htmlFor="color">Color</label>
                                    <input type="text" name="color" id="color" className='form-control' onChange={getData} placeholder='Enter color:' value={data.color} />
                                </div>
                                <div className="col-md-6 col-12">
                                    <label htmlFor="size">Size</label>
                                    <input type="size" name="size" id="size" placeholder='Enter Size:' onChange={getData} className='form-control' value={data.size} />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-md-6 col-12">
                                    <label htmlFor="baseprice">Base Price</label>
                                    <input type="number" name="baseprice" id="baseprice" className='form-control' onChange={getData} placeholder='Enter base price:' value={data.baseprice} />
                                </div>
                                <div className="col-md-6 col-12">
                                    <label htmlFor="discount">Discount</label>
                                    <input type="number" name="discount" id="discount" placeholder='Enter discount:' onChange={getData} className='form-control' value={data.discount} />
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="description">Description</label>
                                <textarea name="description" id="description" rows="3"  className='form-control' onClick={getData} value={data.description}></textarea>
                            </div>
                            <div className="row mb-3">
                                <div className="col-md-6 col-12">
                                    <label htmlFor="pic1">Pic1</label>
                                    <input type="file" name="pic1" id="pic1" onChange={getFile} className='form-control' />
                                </div>
                                <div className="col-md-6 col-12">
                                    <label htmlFor="pic2">Pic2</label>
                                    <input type="file" name="pic2" id="pic2" onChange={getFile} className='form-control' />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-md-6 col-12">
                                    <label htmlFor="pic3">Pic3</label>
                                    <input type="file" name="pic3" id="pic3" onChange={getFile} className='form-control' />
                                </div>
                                <div className="col-md-6 col-12">
                                    <label htmlFor="pic4">Pic4</label>
                                    <input type="file" name="pic4" id="pic4" onChange={getFile} className='form-control' />
                                </div>
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
