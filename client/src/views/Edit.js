import React, { useEffect, useState } from 'react'
import axios from 'axios';
import _ from 'lodash';

import {useParams, useHistory} from "react-router-dom";

const Edit = (props) => {
    
  //-----------------------------------
  // I) HOOKS & VARIABLES
  // ----------------------------------

  // i) Lifting States
  const {isUpdatingProducts, setIsUpdatingProducts} = props;

  // ii) React Hooks - States
  const [product, setProduct] = useState({
    title: '',
    price: '',
    description: ''
  });
  const params = useParams();
  const history = useHistory();


  useEffect(() => {
    axios.get('http://localhost:8000/api/products/' + params.id)
       
        .then(res => {
            console.log(res.data)
            setProduct(res.data);
        })
}, [])

  //-----------------------------------
  // II) HANDLERS
  // ----------------------------------

  // We create and event handler for updating the fields when data is put into the form
  const onChangeHandler = (e) => {
    console.log(e.target.value)
    setProduct({...product,
        [e.target.name]: e.target.value}
    );

  };
  
  const onSubmitHandler = (e) => {
    e.preventDefault();
    axios.put('http://localhost:8000/api/products/edit/'+params.id, product)
      .then(res=>console.log("Response: ", res))
      .catch(err=>console.log("Error: ", err))

    history.push("/products")
  }

  //-----------------------------------
  // III) JSX
  // ----------------------------------

  return (
    <>
      <div className="mt-3 w-50 mx-auto">
        <form onSubmit={onSubmitHandler}>
          <h2 className="mb-3">Edit Product</h2>
          <div className="row justify-content-center bg-light py-3">
            <label 
              htmlFor="title" 
              className="col-2 col-form-label text-left"
            >
              Title: 
            </label> 
            <div className="col-8">
              <input 
                type="text" 
                className="form-control" 
                id = "title" 
                name="title" 
                value={product.title}
                onChange={ onChangeHandler }
              />
            </div>
          </div>
          <div className="row justify-content-center bg-light py-3">
            <label 
              htmlFor="price" 
              className="col-2 col-form-label text-left"
            >
              Price:
            </label>
            <div className="col-8">
              <input 
                type="number" 
                className="form-control" 
                id = "price"
                name="price" 
                value={product.price}
                onChange={ onChangeHandler } 
              />
            </div> 
          </div>
          <div className="row justify-content-center bg-light py-3">
            <label 
              htmlFor="description" 
              className="col-2 col-form-label text-left"
            >
              Description: 
            </label>
            <div className="col-8">
              <input 
                type="text" 
                className="form-control" 
                id="description" 
                name="description" 
                value={product.description}
                onChange={ onChangeHandler } 
              />
            </div> 
          </div>
          <input 
            className="btn btn-primary mt-3"
            type="submit" 
            value="Submit" 
          />
        </form>
      </div>
    </>
  )
}

export default Edit