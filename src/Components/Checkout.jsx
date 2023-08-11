import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getUser } from "../Store/ActionCreaters/UserActionCreater"
import { getCart,deleteCart } from "../Store/ActionCreaters/CartActionCreater"
import { addCheckout } from "../Store/ActionCreaters/CheckoutActionCreater"
import BuyerProfile from './BuyerProfile'
export default function Checkout() {
    var users = useSelector((state) => state.UserStateData)
    var [mode, setmode] = useState("COD")
    var [user, setuser] = useState({})
    var [cart, setcart] = useState([])
    var [total, settotal] = useState(0)
    var [shipping, setshipping] = useState(0)
    var [final, setfinal] = useState(0)
    var dispatch = useDispatch()
    var navigate = useNavigate()
    var carts = useSelector((state) => state.CartStateData)



    function getData(e) {
        setmode(e.target.value)
    }

    function placeOrder(e) {
        var item = {
            userid: localStorage.getItem("userid"),
            paymentmode: mode,
            orderstatus: "Order placed",
            paymentstatus: "Pending",
            time: new Date(),
            totalAmount: total,
            // setshippingAmount: shipping,
            shippingAmount: shipping,
            finalAmount: final,
            products: cart

        }
        dispatch(addCheckout(item))
        for(let item of cart){
            dispatch(deleteCart({id:item.id}))
        }
        navigate("/confirmation")
    }


    function getAPIData() {
        dispatch(getUser())
        var data = users.find((item) => item.id === Number(localStorage.getItem("userid")))
        if (data)
            setuser(data)


        dispatch(getCart())
        data = carts.filter((item) => item.userid === localStorage.getItem("userid"))
        if (data) {
            setcart(data)
            var total = 0
            var shipping = 0
            var final = 0
            for (let item of data) {
                total = total + item.total
            }
            if (total > 0 && total <= 1000)
                shipping = 150
            final = total + shipping
            settotal(total)
            setshipping(shipping)
            setfinal(final)
        }


    }

    useEffect(() => {
        getAPIData()
    }, [users.length, carts.length])



    return (
        <>


            <section className="ftco-section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6 ">
                            <BuyerProfile user={user} />
                        </div>
                        <div className="col-md-6">
                            <h5 className='text-center bg1'>Cart-Details</h5>
                            <div className="cart-list">
                                <table className="mytable">
                                    <thead className="thead-primary">
                                        <tr className="text-center">
                                            <th>&nbsp;</th>
                                            <th>Product</th>
                                            <th>Color</th>
                                            <th>Size</th>
                                            <th>Price</th>
                                            <th>Quantity</th>
                                            <th>Total</th>
                                            {/* <th>&nbsp;</th> */}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            cart.map((item, index) => {
                                                return <tr key={index} className="text-center">

                                                    <td className="image-prod"><img src={`assets/images/${item.pic}`} height="50px" width="50px" className='rounded' alt="" /></td>
                                                    <td className="product-name">{item.name} </td>
                                                    <td className="product-name">{item.color} </td>
                                                    <td className="product-name">{item.size} </td>
                                                    <td className="price">&#8377;{item.price}</td>
                                                    <td className="price">{item.qty}</td>
                                                    <td className="total">&#8377;{item.total}</td>
                                                </tr>
                                            })
                                        }

                                    </tbody>
                                </table>
                            </div>
                            <div className="d-flex">
                                <div className="cart-detail cart-total bg-light mt-3">
                                    <h3 className="billing-heading mb-4">Cart Total</h3>
                                    <p className="d-flex">
                                        <span>Subtotal</span>
                                        <span>&#8377;{total}</span>
                                    </p>
                                    <p className="d-flex">
                                        <span>Shipping</span>
                                        <span>&#8377;{shipping}</span>
                                    </p>

                                    <hr />
                                    <p className="d-flex total-price">
                                        <span>Final Amount</span>
                                        <span>&#8377;{final}</span>
                                    </p>
                                </div>
                            </div>
                            <div className="">
                                <div className="cart-detail bg-light p-3  mt-2">
                                    <h3 className="billing-heading mb-4">Payment Method</h3>
                                    <div className="form-group">
                                        <div className="col-md-12">
                                            <div className="radio">
                                                <label><input type="radio" name="mode" className="mr-2" value="NetBanking" onChange={getData} /> Net Banking/Cards/Upi</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="col-md-12">
                                            <div className="radio">
                                                <label><input type="radio" name="mode" className="mr-2" value='COD' checked onChange={getData} /> Cash On Delivery</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <div className="col-md-12">
                                            <div className="checkbox">
                                                <label><input type="checkbox" value="" className="mr-2" /> I have read and accept the terms and conditions</label>
                                            </div>
                                        </div>
                                    </div>
                                    <p><button className="btn btn-primary" onClick={placeOrder}>Place an order</button></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
