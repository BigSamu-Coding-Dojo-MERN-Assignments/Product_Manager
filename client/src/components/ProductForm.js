import React, {useState, useEffect} from 'react'

import {useParams, useHistory} from "react-router-dom";

import DeleteButton from '../components/DeleteButton'

import axios from 'axios';

const ProductForm = (props) => {
    
  //-----------------------------------
  // I) HOOKS & VARIABLES
  // ----------------------------------

  // i) Lifting States
  const {isUpdatingProducts, setIsUpdatingProducts, formType} = props;

  // ii) React Hooks - States
  const [product, setProduct] = useState({
    title: '',
    price: '',
    description: ''
  });

   // iii) React Router Hooks - Params and History
   const params = useParams();
   const history = useHistory();

   // iv) API Calls

  const createProduct = async (product) => {
    await axios.post('http://localhost:8000/api/products/new', product)
      .then(res=>console.log("Response: ", res))
      .catch(err=>console.log("Error: ", err))
  }

  const updateProduct = async (product) => {
    axios.put('http://localhost:8000/api/products/edit/'+params.id, product)
    .then(res=>console.log("Response: ", res))
    .catch(err=>console.log("Error: ", err)) 
  }

  // v) React Hooks - Effetcs

  useEffect(() => {
    if(formType === "update") {
      axios.get('http://localhost:8000/api/products/' + params.id)
          .then(res => {
              setProduct(res.data);
          })
    }
  }, [])

  //-----------------------------------
  // II) HANDLERS
  // ----------------------------------

  const onChangeHandler = (e) => {
    console.log(e.target.value)
    setProduct({...product,
        [e.target.name]: e.target.value}
    );

  };
  
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if(formType === "create"){
      createProduct(product)
      setIsUpdatingProducts(true);
      setProduct({
        title: '',
        price: '',
        description: ''
      })
    }
    else if (formType === "update"){
      updateProduct(product)
      history.push("/products")
    }
  }

  //-----------------------------------
  // III) JSX
  // ----------------------------------

  return (
    <>
      <div className="mt-3">
        <form onSubmit={onSubmitHandler}>
          {(formType === "create") 
          ?
            <h2 className="mb-3">New Product</h2>
          :
            <h2 className="mb-3">Edit Product</h2>
          }
          <div className="row mb-3 justify-content-center bg-light py-3">
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
          <div className="row mb-3 justify-content-center bg-light py-3">
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
          <div className="row mb-3 justify-content-center bg-light py-3">
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
          {(formType === "create") 
          ?
            <input 
              className="btn btn-primary"
              type="submit" 
              value="Submit" 
            />
          :
            <>
              <input 
                className="btn btn-success"
                type="submit" 
                value="Edit" 
              />
              <DeleteButton 
                  product = {product}
                  changeStyle = {true}
              />
            </>
          }
        </form>
      </div>
    </>
  )
}

export default ProductForm
