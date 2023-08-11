import React, { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { getProduct } from "../Store/ActionCreaters/ProductActionCreater"
import { getCart, addCart } from "../Store/ActionCreaters/CartActionCreater"
import { addWishlist, getWishlist } from "../Store/ActionCreaters/WishlistActionCreater"

export default function SingleProduct() {
    var [p, setp] = useState({
        pic1:"",
        pic2:"",
        pic3:"",
        pic4:""

    })
    var [qty, setqty] = useState(1)
    var productid = useSelector((state) => state.ProductStateData)
    var cart = useSelector((state) => state.CartStateData)
    var wishlist = useSelector((state) => state.WishlistStateData)
    var { id } = useParams()
    var dispatch = useDispatch()
    var navigat = useNavigate()
    function getAPIData() {
        dispatch(getProduct())
        dispatch(getCart())
        dispatch(getWishlist())
        var data = productid.find((item) => item.id === Number(id))
        if (data)
            setp(data)
    }

    function addToCart() {
        // var d = cart.find((item) => item.id === productid && Number(id) === localStorage.getItem("userid"))
        var d = cart.find((item) => item.productid === Number(id) && item.userid === localStorage.getItem("userid"))

        if (d)
            navigat("/cart")
        else {
            var item = {
                productid: p.id,
                userid: localStorage.getItem("userid"),
                name: p.name,
                color: p.color,
                size: p.size,
                price: p.finalprice,
                qty: qty,
                total: p.finalprice * qty,
                pic: p.pic1
            }
            dispatch(addCart(item))
            navigat("/cart")
        }
    }

    function addToWishlist() {
        // var d = wishlist.find((item) => item.id === productid && Number(id) === localStorage.getItem("userid"))
        var d = wishlist.find((item) => item.productid ===Number(id) && item.userid === localStorage.getItem("userid"))

        if (d)
            navigat("/profile")
        else {
            var item = {
                productid: p.id,
                userid: localStorage.getItem("userid"),
                name: p.name,
                color: p.color,
                size: p.size,
                price: p.finalprice,
                pic: p.pic1
            }
            dispatch(addWishlist(item))
            navigat("/profile")
        }
    }
    useEffect(() => {
        getAPIData()
    }, [productid.length])
    return (
        <>


            <section className="">
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-lg-6 col-12 mt-4  ">
                            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src={`/assets/images/${p.pic1}`} height="450px" className="d-block w-100" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={`/assets/images/${p.pic2}`} height="450px" className="d-block w-100" alt="..." />
                                    </div>
                                    <div className="carousel-item active">
                                        <img src={`/assets/images/${p.pic3}`} height="450px" className="d-block w-100" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={`/assets/images/${p.pic4}`} height="450px" className="d-block w-100" alt="..." />
                                    </div>

                                </div>
                                <button className="carousel-control-prev" type="button" data-target="#carouselExampleControls" data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-target="#carouselExampleControls" data-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Next</span>
                                </button>
                            </div>
                        </div>
                        <div className="col-lg-6 product-details">
                            <h3>{p.name}</h3>
                            <div className="rating d-flex">
                                <p className="text-left mr-4">
                                    <Link to="#" className="mr-2">5.0</Link>
                                    <Link to="#"><span className="ion-ios-star-outline"></span></Link>
                                    <Link to="#"><span className="ion-ios-star-outline"></span></Link>
                                    <Link to="#"><span className="ion-ios-star-outline"></span></Link>
                                    <Link to="#"><span className="ion-ios-star-outline"></span></Link>
                                    <Link to="#"><span className="ion-ios-star-outline"></span></Link>
                                </p>
                                <p className="text-left mr-4">
                                    <Link to="#" className="mr-2" style={{ color: "#000" }}>100 <span style={{ color: "#bbb" }}>Rating</span></Link>
                                </p>
                                <p className="text-left">
                                    <Link to="#" className="mr-2" style={{ color: "#000" }}>500 <span style={{ color: "#bbb" }}>Sold</span></Link>
                                </p>
                            </div>

                            <div className="col-12">
                                <div className='d-flex border-bottom'>
                                    <div className='w-50 p-2 ' >Category :</div>
                                    <div className='w-50 p-2 ' >{p.maincategory}/{p.subcategory}</div>
                                </div>
                                <div className='d-flex border-bottom'>
                                    <div className='w-50 p-2' >Brand :</div>
                                    <div className='w-50 p-2' >{p.brand}</div>
                                </div>
                                <div className='d-flex border-bottom'>
                                    <div className='w-50 p-2' >Price :</div>
                                    <div className='w-50 p-2' >&#8377;<del>{p.baseprice}</del>&nbsp;<sup>&#8377;{p.finalprice}</sup>&nbsp;&nbsp;&nbsp;&nbsp;{p.discount}%off</div>
                                </div>
                                <div className='d-flex border-bottom'>
                                    <div className='w-50 p-2' >Color :</div>
                                    <div className='w-50 p-2' >{p.color}</div>
                                </div>
                                <div className='d-flex border-bottom'>
                                    <div className='w-50 p-2' >Size :</div>
                                    <div className='w-50 p-2' >{p.size}</div>
                                </div>
                                <div className='d-flex border-bottom'>
                                    <div className='w-50 p-2' >Stock :</div>
                                    <div className='w-50 p-2' >{p.stock}</div>
                                </div>
                                <div className='d-flex border-bottom'>
                                    <div className='w-50 p-2' >Description :</div>
                                    <div className='w-50 p-2' >{p.description}</div>
                                </div>

                            </div>

                            <div className="row mb-2 mt-2">

                                <div className="input-group col-md-6 d-flex  ">
                                    <span className="input-group-btn mr-2">
                                        <button type="button" className="quantity-left-minus btn ml-4" data-type="minus" data-field="" onClick={() => {
                                            if (qty > 1)
                                                setqty(qty - 1)
                                        }}>
                                            <i className="ion-ios-remove"></i>
                                        </button>
                                    </span>
                                    {/* <input type="text" id="qty" name="qty" className="quantity form-control input-number" value={qty} min="1" max="100" /> */}
                                    <p className='form-control'>{qty}</p>
                                    <span className="input-group-btn ml-2 ">
                                        <button type="button" className="quantity-right-plus btn" data-type="plus" data-field="" onClick={() => setqty(qty + 1)} >
                                            <i className="ion-ios-add"></i>
                                        </button>
                                    </span>
                                </div>
                            </div>
                            <div className="d-flex">
                                <Link to="/cart" onClick={addToCart} className="btn btn-black  w-50 mr-2">Add to Cart</Link>
                                <Link to="/profile" onClick={addToWishlist} className="btn btn-primary w-50 ">Add to Wishlisht</Link>
                            </div>
                        </div>

                    </div>




                    <div className="row mt-5">
                        <div className="col-md-12 nav-link-wrap">
                            <div className="nav nav-pills d-flex text-center" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                <Link className="nav-link  active mr-lg-1" id="v-pills-1-tab" data-toggle="pill" to="#v-pills-1" role="tab" aria-controls="v-pills-1" aria-selected="true">Description</Link>

                                <Link className="nav-link  mr-lg-1" id="v-pills-2-tab" data-toggle="pill" to="#v-pills-2" role="tab" aria-controls="v-pills-2" aria-selected="false">Manufacturer</Link>

                                <Link className="nav-link " id="v-pills-3-tab" data-toggle="pill" to="#v-pills-3" role="tab" aria-controls="v-pills-3" aria-selected="false">Reviews</Link>

                            </div>
                        </div>
                        <div className="col-md-12 tab-wrap">

                            <div className="tab-content bg-light" id="v-pills-tabContent">

                                <div className="tab-pane fade show active" id="v-pills-1" role="tabpanel" aria-labelledby="day-1-tab">
                                    <div className="p-4">
                                        <h3 className="mb-4">Manufactured by&nbsp;{p.brand}</h3>
                                        <p>On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country. But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their.</p>
                                    </div>
                                </div>



                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
