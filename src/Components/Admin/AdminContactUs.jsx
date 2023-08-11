import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { DataGrid } from '@mui/x-data-grid';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact, getContact } from "../../Store/ActionCreaters/ContactActionCreater"
import LeftNav from './LeftNav'
import Button from '@mui/material/Button';



export default function AdminContactUs() {
    var Contact = useSelector((state) => state.ContactStateData)
    var dispatch = useDispatch()
    var navigate = useNavigate()
    var columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'Name', width: 130 },
        { field: 'email', headerName: 'Email', width: 220 },
        { field: 'phone', headerName: 'Phone', width: 130 },
        { field: 'status', headerName: 'Status', width: 130 },
        { field: 'subject', headerName: 'Subject', width: 130 },
        { field: 'time', headerName: 'Date', width: 130 },
        {
            field: "view",
            headerName: "view",
            sortable: false,
            renderCell: ({ row }) =>
                <Button onClick={() => {
                    navigate("/admin-single-contact/" + row.id)
                }}>
                    <span className='material-symbols-outlined' >
                        visibility
                    </span>
                </Button>,
        },
        {
            field: "delete",
            headerName: "delete",
            sortable: false,
            renderCell: ({ row }) => {
                if (row.status === "Done") {
                    return <Button onClick={() => {
                        dispatch(deleteContact({ id: row.id }))
                    }}>
                        <span className='material-symbols-outlined' >
                            delete_forever
                        </span>
                    </Button>
                }
            }

        }
    ];

    var rows = []
    for (let item of Contact) {
        rows.push(item)
    }

    function getAPIData() {
        dispatch(getContact())
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
                        <h5 className='text-center bg1'> <Link to="/admin-add-Contact" className='text-light'>Contact</Link> </h5>
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
