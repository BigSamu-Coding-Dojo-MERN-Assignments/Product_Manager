import React, {useState, useEffect} from 'react'

import ProductForm from '../components/ProductForm'
import ProductList from '../components/ProductList'


const Main = () => {

    //-----------------------------------
    // I) HOOKS & VARIABLES 
    // ----------------------------------

    const [isUpdatingProducts, setIsUpdatingProducts] = useState(true)
  
    //-----------------------------------
    // II) JSX
    // ----------------------------------

    return (
        <div className ="container">
          <div className="w-50 m-auto">
            <ProductForm 
              isUpdatingProducts={isUpdatingProducts} 
              setIsUpdatingProducts={setIsUpdatingProducts}
              formType={"create"}
            />
          </div>

          <hr className="border"/>

          <ProductList 
            isUpdatingProducts={isUpdatingProducts} 
            setIsUpdatingProducts={setIsUpdatingProducts}
          />

        </div>
    )
}

export default Main
