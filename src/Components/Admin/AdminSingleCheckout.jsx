import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { getCheckout, updateCheckout } from "../../Store/ActionCreaters/CheckoutActionCreater"
import { getUser } from "../../Store/ActionCreaters/UserActionCreater"
import LeftNav from './LeftNav';



export default function AdminSingleCheckout() {
    var [data, setdata] = useState({})
    var [user, setuser] = useState({})
    var [orderstatus, setorderstatus] = useState("")
    var [paymentstatus, setpaymentstatus] = useState("")
    var checkouts = useSelector((state) => state.CheckoutStateData)
    var users = useSelector((state) => state.UserStateData)
    var { id } = useParams()
    var dispatch = useDispatch()


    function getAPIData() {
        dispatch(getCheckout())
        dispatch(getUser())
        var d = checkouts.find((item) => item.id === Number(id))
        if (d) {
            setdata(d)
            setorderstatus(d.paymentorderstatus)
            setpaymentstatus(d.paymentstatus)
        }
        d = users.find((item) => item.id === Number(localStorage.getItem("userid")))
        if (d) {
            setuser(d)
        }
    }

    function update(e) {
        dispatch(updateCheckout({ ...data, paymentstatus: paymentstatus, orderstatus: orderstatus }))
        setdata((old) => {
            return {
                ...old,
                ['orderstatus']: orderstatus,
                ['paymentstatus']: paymentstatus
            }
        })
    }

    function getData(e) {
        if (e.target.name === "orderstatus")
            setorderstatus(e.target.value)
        else
            setpaymentstatus(e.target.value)
    }

    useEffect(() => {
        getAPIData()
    }, [checkouts.length, user.length])
    return (
        <>
            <div className="container-fluid my-5 ">
                <div className="row">
                    <div className="col-lg-2 col-12">
                        <LeftNav />
                    </div>

                    <div className="col-lg-10 col-12">
                        <h5 className='text-center bg1'> <Link to="/admin-add-Checkout" className='text-light'>Single-Checkout</Link> </h5>
                        <div className="d-flex mt-5 ">
                            <div className="w-50 p-1 border-bottom">ID</div>
                            <div className="w-50 p-1 border-bottom">{data.id}</div>
                        </div>
                        <div className="d-flex">
                            <div className="w-50 p-1">User</div>
                            {/* <div className="w-50 p-1 border-bottom">{data.userid}</div> */}
                            <table cellPadding="10p" className='mt-2'>
                                <tbody>
                                    <tr>
                                        <th>Name</th>
                                        <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{user.name}</td>
                                    </tr>
                                    <tr>
                                        <th>Email</th>
                                        <td >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{user.email}</td>
                                    </tr><tr>
                                        <th>Phone</th>
                                        <td >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{user.phone}</td>
                                    </tr>
                                    <tr>
                                        <th>Address</th>
                                        <ul style={{ listStyleType: "none" }} >
                                            <li>{user.addressline1}</li>
                                            <li>{user.addressline2}</li>
                                            <li>{user.addressline3}</li>
                                            <li>{user.pin}</li>
                                            <li>{user.city}</li>
                                            <li>{user.state}</li>
                                        </ul>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="d-flex border-top">
                            <div className="w-50 p-1 border-bottom ">Payment Mode</div>
                            <div className="w-50 p-1 border-bottom  ">{data.paymentmode}</div>
                        </div>

                        <div className="d-flex">
                            <div className="w-50 p-1 border-bottom">Payment Status</div>
                            <div className="w-50 border-bottom">{data.paymentstatus}
                                {
                                    data.orderstatus !== "Delivered" ?
                                        <select name='paymentstatus' onChange={getData} className='form-control rounded'>
                                            <option value="Payment Status">Pending</option>
                                            <option value="Done">Done</option>


                                        </select> : ""
                                }
                            </div>
                        </div>
                        <div className="d-flex">
                            <div className="w-50 p-1 border-bottom">Order Status</div>
                            <div className="w-50 border-bottom" >{data.orderstatus}
                                {
                                    data.orderstatus !== "Delivered" ?
                                        <select name='orderstatus' onChange={getData} className='form-control rounded '>
                                            <option value="Order Placed">Order Placed</option>
                                            <option value="Packed">Packed</option>
                                            <option value="Ready To Ship">Ready To Ship</option>
                                            <option value="Shipped">Shipped</option>
                                            <option value="Out for Delivery">Out for Delivery</option>
                                            <option value="Delivered">Delivered</option>

                                        </select> : ""
                                }

                            </div>

                        </div>
                        <div className="d-flex">
                            <div className="w-50 p-1 border-bottom">Total Amount</div>
                            <div className="w-50 p-1 border-bottom">&#8377;{data.totalAmount}</div>
                        </div>
                        <div className="d-flex">
                            <div className="w-50 p-1 border-bottom">Shipping Amount</div>
                            <div className="w-50 p-1 border-bottom">&#8377;{data.shippingAmount}</div>
                        </div>
                        <div className="d-flex">
                            <div className="w-50 p-1 border-bottom">Final Amount</div>
                            <div className="w-50 p-1 border-bottom">&#8377;{data.finalAmount}</div>
                        </div>
                        <div className="d-flex">
                            <div className="w-50 p-1 border-bottom">Date</div>
                            <div className="w-50 p-1 border-bottom">{data.time}</div>
                        </div>
                        {/* <div className="d-flex">
                            <div className="w-50 p-1 border-bottom">Status</div>
                            <div className="w-50 p-1 border-bottom">{data.status}</div>
                        </div> */}
                        <div className="d-flex ">
                            <div className=' bg1 xyne mt-2 w-100'>
                                {
                                    data.orderstatus !== "Delivered" || data.paymentstatus !== "Done" ?
                                        <button className='btn  text-center  w-100' onClick={update}>Update-Status-Done</button> : ""
                                }
                            </div>
                        </div>
                        <div className="col-lg-8 mt-3">
                            <table className="mytable">
                                <thead className="">
                                    <tr className="text-center">
                                        <th>&nbsp;</th>
                                        {/* <th>&nbsp;</th> */}
                                        <th>Product</th>
                                        <th>Color</th>
                                        <th>Size</th>
                                        <th>Price</th>
                                        <th>Qty</th>
                                        <th>Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        data.products && data.products.map((item, index) => {
                                            return <tr key={index} className="text-center">

                                                <td className="image-prod"><img src={`/assets/images/${item.pic}`} height="50px" width="50px" className='rounded' alt="" />
                                                </td>
                                                <td className="product-name">{item.name} </td>


                                                <td className="product-name">{item.color} </td>
                                                <td className="product-name">{item.size} </td>

                                                <td className="price">&#8377;{item.price}</td>
                                                <td className="price">{item.qty}</td>
                                                <td className="price">&#8377;{item.total}</td>
                                            </tr>
                                        })
                                    }

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
