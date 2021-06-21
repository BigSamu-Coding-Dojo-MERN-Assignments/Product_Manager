import React,{useState, useEffect} from 'react'

import {
    Link
} from "react-router-dom";

import axios from 'axios';
import _ from 'lodash';

const ProductList = (props) => {
    
    //-----------------------------------
    // I) HOOKS & VARIABLES
    // ----------------------------------

     // i) Lifting States
    const {isUpdatingProducts, setIsUpdatingProducts} = props;

    // ii) React Hooks - States
    const [productsList, setProductList] = useState([]);

    // iii) React Hooks - Effects
    
    useEffect(()=>{
        axios.get('http://localhost:8000/api/products')
            .then(res=>{
                console.log(res.data)
                setProductList(res.data);
            }); 
    },[])

    
    useEffect(()=>{
        if(isUpdatingProducts){
            axios.get('http://localhost:8000/api/products')
                .then(res=>{
                    console.log(res.data)
                    setProductList(res.data);
                });
            setIsUpdatingProducts(false);
        }
    },[isUpdatingProducts])

    //-----------------------------------
    // II) HANDLERS
    // ----------------------------------

    const deleteProduct = (personId) =>{
        axios.delete('http://localhost:8000/api/products/delete/' + personId)
            .then(res => {
                setIsUpdatingProducts(true);
            })
            .catch(err => {
                console.log(err)

            })
    }



    //-----------------------------------
    // III) JSX
    // ----------------------------------

    return (
        <div>
            <h3> All Products: </h3>
            <div>
                
            {productsList.map((product, index) => 
                <p className="my-2" key={index}>
                    
                        <Link className="text-dark mx-1" to = {"/products/"+product._id}>
                            <u>{product.title}</u>
                        </Link>
                        | 
                        <Link className="mx-1 btn btn-success btn-sm py-0" to = {"/products/edit/"+product._id}>
                            Edit
                        </Link>
                        | 
                        <button className="mx-1 btn btn-outline-danger btn-sm py-0" onClick = {(e) => deleteProduct(product._id)}>
                            Delete
                        </button>
                    
                </p>
            )}

        </div>
        </div>
    )
}

export default ProductList
