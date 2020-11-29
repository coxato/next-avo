import React, { useState, useEffect } from 'react';
import ProductList from '@components/ProductList/productList';
import Layout from '@components/Layouts/layout';

const Home = () => {
    const [productsList, setProductsList] = useState([]);

    useEffect(() => {
        fetch('/api/avo')
            .then( r => r.json() )
            .then( avos => setProductsList(avos.data) )
    }, []);

    return ( 
        <Layout>
            <h1 className="title">Avos Store</h1>
            
            <div className="avos">
                <ProductList products={productsList} />
            </div>

            <style jsx>{`
                .title{
                    font-size: 30px;
                    text-align: center;
                    margin: 20px 0;
                }
            `}</style>
        </Layout>
     );
}
 
export default Home;