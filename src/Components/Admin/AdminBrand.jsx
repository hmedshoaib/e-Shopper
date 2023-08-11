import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { DataGrid } from '@mui/x-data-grid';
import { useSelector, useDispatch } from 'react-redux';
import { deleteBrand, getBrand } from "../../Store/ActionCreaters/BrandActionCreater"
import LeftNav from './LeftNav'
import Button from '@mui/material/Button';



export default function AdminBrand() {
    var brand = useSelector((state) => state.BrandStateData)
    var dispatch = useDispatch()
    var navigate = useNavigate()
    var columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'Name', width: 130 },
        {
            field: "edit",
            headerName: "edit",
            sortable: false,
            renderCell: ({ row }) =>
                <Button onClick={() => {
                    navigate('/admin-update-brand/' + row.id)
                }}>
                    <span className='material-symbols-outlined' >
                        edit
                    </span>
                </Button>,
        },
        {
            field: "delete",
            headerName: "delete",
            sortable: false,
            renderCell: ({ row }) =>
                <Button onClick={() => {
                    dispatch(deleteBrand({ id: row.id }))
                }}>
                    <span className='material-symbols-outlined' >
                        delete_forever
                    </span>
                </Button>,
        }
    ];

    var rows = []
    for (let item of brand) {
        rows.push(item)
    }

    function getAPIData() {
        dispatch(getBrand())
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
                        <h5 className='text-center bg1'> <Link to="/admin-add-brand" className='text-light'>Brand<span className="float-right text-light material-symbols-outlined">
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
