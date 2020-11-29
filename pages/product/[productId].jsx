import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import ProductDetail from '@components/ProductDetail/productDetail';
import AddToCart from '@components/Cart/addtoCart';
import Layout from '@components/Layouts/layout';

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
        <Layout>
            {
                product ? (
                    <div>
                        <ProductDetail {...product} />
                        <AddToCart product={product} />
                    </div>
                ) : (
                    'sorry, this product does not exists'
                )
            }
        </Layout>
     );
}
 
export default ProductItem;