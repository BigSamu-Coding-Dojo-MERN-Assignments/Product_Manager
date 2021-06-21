import React, {useState} from 'react'
import ProductForm from '../components/ProductForm'
import ProductList from '../components/ProductList'


const Main = () => {

    //-----------------------------------
    // I) VARIABLES
    // ----------------------------------

    const [isUpdatingProducts, setIsUpdatingProducts] = useState(false)

    //-----------------------------------
    // II) JSX
    // ----------------------------------

    return (
        <div className ="container">
          <div className="w-50 m-auto">
            <ProductForm 
              isUpdatingProducts={isUpdatingProducts} 
              setIsUpdatingProducts={setIsUpdatingProducts}
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
