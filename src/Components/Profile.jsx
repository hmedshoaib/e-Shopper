import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getUser } from "../Store/ActionCreaters/UserActionCreater"
import { deleteWishlist, getWishlist } from "../Store/ActionCreaters/WishlistActionCreater"
import { getCheckout } from "../Store/ActionCreaters/CheckoutActionCreater"
import BuyerProfile from './BuyerProfile'

export default function Profile() {
    var users = useSelector((state) => state.UserStateData)
    var wishlists = useSelector((state) => state.WishlistStateData)
    var [wishlist, setwishlist] = useState([])
    var checkouts = useSelector((state) => state.CheckoutStateData)
    var [orders, setorders] = useState([])
    var [user, setuser] = useState({})
    var dispatch = useDispatch()

    function deleteItem(id) {
        dispatch(deleteWishlist({ id: id }))
        getAPIData()
    }


    function getAPIData() {
        dispatch(getUser())
        dispatch(getWishlist())
        dispatch(getCheckout())
        var data = users.find((item) => item.id === Number(localStorage.getItem("userid")))
        if (data)
            setuser(data)

        data = wishlists.filter((item) => user.id === Number(localStorage.getItem("userid")))
        if (data)
            setwishlist(data)


        data = checkouts.filter((item) => user.id === Number(localStorage.getItem("userid")))
        if (data)
            setorders(data)
    }

    useEffect(() => {
        getAPIData()
    }, [users.length, wishlists.length, checkouts.length])
    return (
        <>
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-6 mt-2">
                        {
                            user.pic ?
                                <img src={`/assets/images/${user.pic}`} height="455px" width="100%" alt="" className='rounded' /> :
                                <img src={`/assets/images/noimage.png`} height="455px" width="100%" className='rounded'></img>
                        }
                    </div>
                    <div className="col-md-6">
                        <BuyerProfile user={user} />
                    </div>
                </div>

                <div className="cart-list">
                    <h5 className='text-center mt-3 bg1'>Wishlist-Section</h5>
                    <table className="mytable">
                        <thead className="thead-primary">
                            <tr className="text-center">
                                <th>&nbsp;</th>
                                {/* <th>&nbsp;</th> */}
                                <th>Product</th>
                                <th>Color</th>
                                <th>Size</th>
                                <th>Price</th>
                                <th>&nbsp;</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                wishlist.map((item, index) => {
                                    return <tr key={index} className="text-center">

                                        <td className="image-prod"><img src={`assets/images/${item.pic}`} height="50px" width="50px" className='rounded' alt="" />
                                        </td>
                                        <td className="product-name">{item.name} </td>


                                        <td className="product-name">{item.color} </td>
                                        <td className="product-name">{item.size} </td>

                                        <td className="price">&#8377;{item.price}</td>
                                        <td className="product-remove " onClick={() => deleteItem(item.id)} ><Link to={`/single-product/${item.id}`}><span className="ion ion-ios-cart"></span></Link></td>
                                        <td className="product-remove " onClick={() => deleteItem(item.id)} ><Link to="#"><span className="ion ion-ios-close"></span></Link></td>
                                    </tr>
                                })
                            }

                        </tbody>
                    </table>
                </div>
                <h5 className='text-center mt-3 bg1'>Order-History-Section</h5>
                {
                    orders.map((item, index) => {
                        return <div className="row" key={index}>
                            <div className="col-lg-4">
                                <table className='mytable'>
                                    <tbody>
                                        <tr>
                                            <th>Order ID</th>
                                            <td>{item.id}</td>
                                        </tr>
                                        <tr>
                                            <th>Payment Mode</th>
                                            <td>{item.paymentmode}</td>
                                        </tr>
                                        <tr>
                                            <th>Order Status</th>
                                            <td>{item.orderstatus}</td>
                                        </tr>
                                        <tr>
                                            <th>Payment Status</th>
                                            <td>{item.paymentstatus}</td>
                                        </tr>
                                        <tr>
                                            <th>Total Amount</th>
                                            <td>&#8377;{item.totalAmount}</td>
                                        </tr>
                                        <tr>
                                            <th>Shipping Amount</th>
                                            <td>&#8377;{item.shippingAmount}</td>
                                        </tr>
                                        <tr>
                                            <th>Final Amount</th>
                                            <td>&#8377;{item.finalAmount}</td>
                                        </tr>
                                        <tr>
                                            <th>Date</th>
                                            <td>{item.time}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="col-lg-8">
                                <table className="mytable">
                                    <thead className="thead-primary">
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
                                            item.products.map((item, index) => {
                                                return <tr key={index} className="text-center">

                                                    <td className="image-prod"><img src={`assets/images/${item.pic}`} height="50px" width="50px" className='rounded' alt="" />
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
                    })
                }
            </div>
        </>
    )
}
