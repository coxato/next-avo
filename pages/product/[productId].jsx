import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';


const ProductItem = () => {

    const { query: { productId } } = useRouter();

    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch(`/api/avo/${productId}`)
            .then( r => r.json())
            .then( data => setProduct(data))
            .catch( () => setProduct(null) );
    }, []);

    return ( 
        <div>
            <h2>product item page for: {productId}</h2>
            {
                product ? (
                    <div>
                        <h1>{product.name}</h1>
                        <h1>{product.price}</h1>
                    </div>
                ) : (
                    'sorry, this product does not exists'
                )
            }
        </div>
     );
}
 
export default ProductItem;