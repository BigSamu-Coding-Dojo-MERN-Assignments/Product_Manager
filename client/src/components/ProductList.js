import React,{useState, useEffect} from 'react'

import {
    Link
} from "react-router-dom";

import axios from 'axios';
import _ from 'lodash';

const ProductList = (props) => {

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

    return (
        <div>
            <h3> All Products: </h3>
            <div>
                
            {productsList.map((product, index) => 
                <p className="my-1" key={index}>
                    <u>
                        <Link className="text-dark" to = {"/products/"+product._id}>
                            {product.title}
                        </Link>
                    </u>
                </p>
            )}

        </div>
        </div>
    )
}

export default ProductList
