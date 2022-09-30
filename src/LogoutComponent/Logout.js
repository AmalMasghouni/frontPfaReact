import React from 'react'
import Swal from 'sweetalert2/dist/sweetalert2.js';

import { Link } from 'react-router-dom';
export default function Logout() {
  return (
    <div>
      <Link to='/' className='main_bt' onClick={() => Swal.fire({
                                                                            position: 'top-end',
                                                                            icon: 'success',
                                                                            title: 'Deconnecté(e)',
                                                                            showConfirmButton: false,
                                                                            timer: 1500})} >Se déconnecter</Link>
 
    </div>
  )
}
