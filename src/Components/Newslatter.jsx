import React, { useState,useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { addNewslatter,getNewslatter } from "../Store/ActionCreaters/NewslatterActionCreater"

export default function Newslatter() {
  var [email, setemail] = useState("")
  var [show, setshow] = useState(false)
  var [msg, setmsg] = useState(false)
  var newslatter = useSelector((state) => state.NewslatterStateData)
  var dispatch = useDispatch()
  function getData(e) {
    setemail(e.target.value)
  }
  function postData(e) {
    e.preventDefault()
    var d = newslatter.find((item) => item.email === email)
    if (d) {
      setshow(true)
      setmsg("Your Email Id is Already Subscribed!!!!")
    }
    else {
      dispatch(addNewslatter({ email: email }))
      setshow(true)
      setmsg("Thanks to Subscibe our Newslatter Service!!!")
    }
  }
  useEffect(() => {
    dispatch(getNewslatter())
  }, [newslatter.length])

  return (
    <>
      <div className="container">
        <div className="row justify-content-center ">
          <div className="col-md-8 heading-section text-center mb-0  ">
            <h3 className="mb-0">Subcribe Our Newslatter service</h3>
            {
              show ? <div class="alert alert-success alert-dismissible fade show text-center" role="alert">
                {msg}
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div> : ""
            }
            <form onSubmit={postData}>
              <div className="mb-3 Ahmed1">
                <input type="email" name="email" className=' form-control' onChange={getData} placeholder='Enter Your Email:' />
              </div>
              <div className="mb-3 bg1 xyne">
                <button type='subcribe' className='btn w-100 bg1'>Subcribe</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
