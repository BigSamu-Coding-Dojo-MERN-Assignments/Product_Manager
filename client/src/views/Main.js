import React, {useState} from 'react'
import ProductForm from '../components/ProductForm'


const Main = () => {

    //-----------------------------------
    // I) VARIABLES
    // ----------------------------------

    // Variable that holds information about a Product inside Main component
    const [product, setProduct] = useState({
      title: '',
      price: '',
      description: ''
    });

    //-----------------------------------
    // II) JSX
    // ----------------------------------

    return (
        <div className ="container">
          <div className="w-50 m-auto">
            <ProductForm 
              product={product} 
              setProduct={setProduct}
            />
          </div>
        </div>
    )
}

export default Main
