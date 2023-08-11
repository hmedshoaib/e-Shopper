import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { DataGrid } from '@mui/x-data-grid';
import { useSelector, useDispatch } from 'react-redux';
import { deleteProduct, getProduct } from "../../Store/ActionCreaters/ProductActionCreater"
import LeftNav from './LeftNav'
import Button from '@mui/material/Button';



export default function AdminProduct() {
    var product = useSelector((state) => state.ProductStateData)
    var dispatch = useDispatch()
    var navigate = useNavigate()
    var columns = [
        { field: 'id', headerName: 'ID', width: 30 },
        { field: 'name', headerName: 'Name', width: 180 },
        { field: 'maincategory', headerName: 'Maincategory', width: 100 },
        { field: 'subcategory', headerName: 'Subcategory', width: 100 },
        { field: 'brand', headerName: 'Brand', width: 80 },
        { field: 'color', headerName: 'Color', width: 80 },
        { field: 'size', headerName: 'Size', width: 50 },
        { field: 'baseprice', headerName: 'Base Price', width: 100, renderCell: ({ row }) => <p>&#8377;{row.baseprice}</p> },
        { field: 'discount', headerName: 'Discount', width: 100, renderCell: ({ row }) => <p>{row.discount}%</p> },
        { field: 'finalprice', headerName: 'Final Price', width: 100, renderCell: ({ row }) => <p>&#8377;{row.finalprice}</p> },
        { field: 'stock', headerName: 'Stock', width: 100 },
        { field: 'pic1', headerName: 'Pic1', width: 70, renderCell: ({ row }) => <img src={`/assets/images/${row.pic1}`} height="45px" width="100%" className='rounded'></img> },
        { field: 'pic2', headerName: 'Pic2', width: 70, renderCell: ({ row }) => <img src={`/assets/images/${row.pic2}`} height="45px" width="100%" className='rounded'></img> },
        { field: 'pic3', headerName: 'Pic3', width: 70, renderCell: ({ row }) => <img src={`/assets/images/${row.pic3}`} height="45px" width="100%" className='rounded'></img> },
        { field: 'pic4', headerName: 'Pic4', width: 70, renderCell: ({ row }) => <img src={`/assets/images/${row.pic4}`} height="45px" width="100%" className='rounded'></img> },


        {
            field: "edit",
            headerName: "Edit",
            sortable: false,
            renderCell: ({ row }) =>
                <Button onClick={() => {
                    navigate('/admin-update-product/' + row.id)
                }}>
                    <span className='material-symbols-outlined' >
                        edit
                    </span>
                </Button>,
        },
        {
            field: "delete",
            headerName: "Delete",
            sortable: false,
            renderCell: ({ row }) =>
                <Button onClick={() => {
                    dispatch(deleteProduct({ id: row.id }))
                }}>
                    <span className='material-symbols-outlined' >
                        delete_forever
                    </span>
                </Button>,
        }
    ];

    var rows = []
    for (let item of product) {
        rows.push(item)
    }

    function getAPIData() {
        dispatch(getProduct())
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
                        <h5 className='text-center bg1'> <Link to="/admin-add-product" className='text-light'>Product<span className="float-right text-light material-symbols-outlined">
                            add
                        </span></Link> </h5>
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
