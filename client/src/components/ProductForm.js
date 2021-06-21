import React, {useState} from 'react'

import axios from 'axios';

const ProductForm = (props) => {
    
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
    axios.post('http://localhost:8000/api/products/new', product)
      .then(res=>console.log("Response: ", res))
      .catch(err=>console.log("Error: ", err))
    
    setIsUpdatingProducts(true);

    setProduct({
      title: '',
      price: '',
      description: ''
    })
  }

  //-----------------------------------
  // III) JSX
  // ----------------------------------

  return (
    <>
      <div className="mt-3">
        <form onSubmit={onSubmitHandler}>
          <h2 className="mb-3">Product List</h2>
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
          <input 
            className="btn btn-primary"
            type="submit" 
            value="Submit" 
          />
        </form>
      </div>
    </>
  )
}

export default ProductForm
