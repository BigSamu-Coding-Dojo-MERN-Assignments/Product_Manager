import React from 'react'

import axios from 'axios';
import _ from 'lodash';


const DeleteButton = (props) => {

    //-----------------------------------
    // I) HOOKS & VARIABLES
    // ----------------------------------

    // i) Lifting States
    const {product, changeStyle, setIsUpdatingProducts} = props;

    //-----------------------------------
    // II) HANDLERS
    // ----------------------------------

    const deleteProduct = (productID) =>{
        
        axios.delete('http://localhost:8000/api/products/delete/' + productID)
            .then(res => {
                if(setIsUpdatingProducts !== undefined)
                    setIsUpdatingProducts(true)
                console.log(res)
            })
            .catch(err => {
                console.log(err)

            })
    }

    return (
        <>  
            {(!changeStyle) 
            ?
            <button 
                className="mx-1 btn btn-outline-danger btn-sm py-0" 
                onClick = {(e) => deleteProduct(product._id)}
            >
                Delete
            </button>
            :
             <button 
                className="mx-2 btn btn-outline-danger" 
                onClick = {(e) => deleteProduct(product._id)}
            >
             Delete
            </button>
            }
        </>
    )
}

export default DeleteButton
