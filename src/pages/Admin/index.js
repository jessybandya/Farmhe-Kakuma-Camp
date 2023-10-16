import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'


function Admin() {
    const authId = useSelector((state) => state.authId)
    const history = useNavigate()

useEffect(() => {
    if(!authId && authId !== "aIYZY1R1kdXUmMc1P1PrWSwIhqB2"){
        Swal.fire({
            icon: 'warning',
            title: 'Warning!',
            text:'Only Admin can access the page!',
            showConfirmButton: false,
            timer:5000
        })
        history('/')
       }
}, [authId])

  return (
    <div>Admin</div>
  )
}

export default Admin