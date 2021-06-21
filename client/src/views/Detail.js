import React, { useEffect, useState } from 'react'
import axios from 'axios';
import _ from 'lodash';

import {useParams, useHistory} from "react-router-dom";

const Detail = (props) => {
    
    
    const [product, setProduct] = useState({})
    const [doesProductExist, setDoesProductExist] = useState(false)
    const params = useParams();
    const history = useHistory();


    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + params.id)
            .then(res => {
                console.log(res)
                if(_.has(res.data,'title')){
                    setProduct({...res.data})
                    setDoesProductExist(true);
                }
                else{
                    setDoesProductExist(false);
                    history.push("/products")
                }
                
            })
            .catch(err => {
                console.log(err)
                setDoesProductExist(false)
            })
    }, [])
    
    return (
        <>  
            { doesProductExist && 
            <div className = "mt-4">
                <h3>{product.title}</h3>
                <ul className = "list-unstyled">
                    <li>Price: $ {product.price}</li>
                    <li>Description: {product.description}</li>
                </ul>
                
            </div>
            }
        </>
    )
}

export default Detail

