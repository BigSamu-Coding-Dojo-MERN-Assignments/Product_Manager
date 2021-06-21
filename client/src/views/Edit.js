import React from 'react'

import ProductForm from '../components/ProductForm'


const Edit = (props) => {
 

  //-----------------------------------
  // I) JSX
  // ----------------------------------

  return (
    <div className ="container">
      <div className="w-50 m-auto">
        <ProductForm
          formType = {"update"}
        />
      </div>
    </div>
  )
}

export default Edit