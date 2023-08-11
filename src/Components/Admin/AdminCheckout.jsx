import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { DataGrid } from '@mui/x-data-grid';
import { useSelector, useDispatch } from 'react-redux';
import { deleteCheckout, getCheckout } from "../../Store/ActionCreaters/CheckoutActionCreater"
import LeftNav from './LeftNav'
import Button from '@mui/material/Button';



export default function AdminCheckout() {
    var Checkout = useSelector((state) => state.CheckoutStateData)
    var dispatch = useDispatch()
    var navigate = useNavigate()
    var columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'userid', headerName: 'User Id', width: 80 },
        { field: 'paymentmode', headerName: 'Payment Mode', width: 120 },
        { field: 'orderstatus', headerName: 'Order Status', width: 120 },
        { field: 'paymentstatus', headerName: 'Payment Status', width: 130 },
        { field: 'totalAmount', headerName: 'Total Amount', width: 120 },
        { field: 'shippingAmount', headerName: 'Shipping Amount', width: 120 },
        { field: 'finalAmount', headerName: 'Final Amount', width: 130 },
        { field: 'time', headerName: 'Date', width: 130 },
        {
            field: "view",
            headerName: "view",
            sortable: false,
            renderCell: ({ row }) =>
                <Button onClick={() => {
                    navigate("/admin-single-Checkout/" + row.id)
                }}>
                    <span className='material-symbols-outlined' >
                        visibility
                    </span>
                </Button>,
        }
    ];

    var rows = []
    for (let item of Checkout) {
        rows.push(item)
    }

    function getAPIData() {
        dispatch(getCheckout())
    }

    useEffect(() => {
        getAPIData()
    }, [])
    return (
        <>
            <div className="container-fluid my-5 ">
                <div className="row">
                    <div className="col-lg-2 col-12">
                        <LeftNav />
                    </div>

                    <div className="col-lg-10 col-12">
                        <h5 className='text-center bg1'> <Link to="/admin-add-Checkout" className='text-light'>Checkout</Link> </h5>
                        <div style={{ height: 420, width: '100%' }}>
                            <DataGrid
                                rows={rows}
                                columns={columns}
                                initialState={{
                                    pagination: {
                                        paginationModel: { page: 0, pageSize: 5 },
                                    },
                                }}
                                pageSizeOptions={[5, 20]}
                            // checkboxSelection
                            />
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
