import React, { useContext } from 'react'
import {BsCart} from 'react-icons/bs'
import '../Components/Navbar.css'
import { Link } from 'react-router-dom'
import { CartContext } from './Features/ContextProvider'


const Navbar = () => {

    const{cart} = useContext(CartContext)
  return (
    <div className='nav'>
      <Link to='/' className='navbar-brand fs-4 fw-bolder'>Shop</Link>
      <Link to='/cart ' className='navbar-link fs-5 text-white'><BsCart/>{cart.length}</Link>
    </div>
  )
}

export default Navbar
