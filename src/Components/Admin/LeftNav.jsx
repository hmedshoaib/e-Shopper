import React from 'react'
import { Link } from 'react-router-dom'

export default function LeftNav() {
    return (
        <>
            <div className="list-group">
                <Link to="/admin-home" className="list-group-item list-group-item-action list-group-item-primary">Home</Link>
                <Link to="/admin-user" className="list-group-item list-group-item-action list-group-item-secondary">Users</Link>
                <Link to="/admin-maincategory" className="list-group-item list-group-item-action list-group-item-success">MainCategories</Link>
                <Link to="/admin-subcategory" className="list-group-item list-group-item-action list-group-item-danger">SubCategories</Link>
                <Link to="/admin-brand" className="list-group-item list-group-item-action list-group-item-warning">Brands</Link>
                <Link to="/admin-product" className="list-group-item list-group-item-action list-group-item-info">Products</Link>
                <Link to="/admin-contactus" className="list-group-item list-group-item-action list-group-item-light">Contact-Us</Link>
                <Link to="/admin-newslatter" className="list-group-item list-group-item-action list-group-item-dark">NewsLatters</Link>
                <Link to="/admin-checkout" className="list-group-item list-group-item-action list-group-item-dark">Checkouts</Link>
            </div>
        </>
    )
}
