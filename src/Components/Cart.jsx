import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { deleteCart, getCart, updateCart } from "../Store/ActionCreaters/CartActionCreater"
export default function Cart() {
    var [cart, setcart] = useState([])
    var [total, settotal] = useState(0)
    var [shipping, setshipping] = useState(0)
    var [final, setfinal] = useState(0)
    // var [qty, setqty] = useState(1)
    var carts = useSelector((state) => state.CartStateData)

    var dispatch = useDispatch()
    var navigat = useNavigate()


    function getAPIData() {
        dispatch(getCart())
        var data = carts.filter((item) => item.userid === localStorage.getItem("userid"))
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
            final = total+shipping
            settotal(total)
            setshipping(shipping)
            setfinal(final)
        }
    }

    function update(id, op) {
        var item = carts.find((item) => item.id === id)
        if (op === "dec" && item.qty == 1) {
            return
        }
        else if (op === "dec") {
            item.qty = item.qty - 1
            item.total = item.total - item.price
        }
        else {
            item.qty = item.qty + 1
            item.total = item.total + item.price
        }
        dispatch(updateCart(item))
        getAPIData()
    }

    function deleteItem(id) {
        dispatch(deleteCart({ id: id }))
        getAPIData()
    }

    useEffect(() => {
        getAPIData()
    }, [carts.length])
    return (
        <>


            <section className="ftco-section ftco-cart">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
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
                                            <th>&nbsp;</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            cart.map((item, index) => {
                                                return <tr key={index} className="text-center">

                                                    <td className="image-prod"><img src={`assets/images/${item.pic}`} height="50px" width="50px" className='rounded' alt="" />
                                                    </td>
                                                    <td className="product-name">{item.name} </td>


                                                    <td className="product-name">{item.color} </td>
                                                    <td className="product-name">{item.size} </td>

                                                    <td className="price">&#8377;{item.price}</td>
                                                    <td className="price"><button className='btn form-contol border-none' onClick={() => update(item.id, "dec")} style={{ width: "50px" }}>
                                                        <i className="ion-ios-remove"></i></button>
                                                        &nbsp;&nbsp;&nbsp;{item.qty}&nbsp;&nbsp;&nbsp;
                                                        <button className='btn' onClick={() => update(item.id, "inc")} style={{ width: "50px" }}>
                                                            <i className="ion-ios-add"></i>
                                                        </button></td>

                                                    {/* <td className="quantity">
                                                        <div className="input-group mb-3">
                                                        <input type="text" name="quantity" className="quantity form-control input-number"value="1" min="1" max="100" />
                                                        </div>
                                                    </td> */}

                                                    <td className="total">&#8377;{item.total}</td>
                                                    <td className="product-remove " onClick={() => deleteItem(item.id)} ><Link to="#"><span className="ion ion-ios-close"></span></Link></td>
                                                </tr>
                                            })
                                        }

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-end">
                        <div className="col col-lg-5 col-md-6 mt-3 cart-wrap">
                            <div className="cart-total mb-3">
                                <h3>Cart Totals</h3>
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
                            <p className="text-center"><Link to="/checkout" className="btn btn-primary">Proceed to Checkout</Link></p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
