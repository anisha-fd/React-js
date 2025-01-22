import React, { useContext } from 'react'
import { CartContext } from './Features/ContextProvider'
import Cart from './Pages/Cart'


const Product = ({product}) => {
    const {dispatch} = useContext(CartContext)
    return (
        <div className='col'>
            <div className="card h-90 mt-5" >
                <img src={product.thumbnail} className="card-img-top h-75" alt="..."/>
                    <div className="card-body">
                        <h4 className="card-title">{product.title}</h4>
                        <h5 className="">{product.price}</h5>

                        <button href="#" className="btn btn-primary" onClick={()=>dispatch({type:"Add",product:product})}>Add to Cart</button>
                    </div>
            </div>
        </div>
    )
}

export default Product
