import React from 'react';
import { useCart } from '@store/cart';
import MyCart from '@components/Cart/myCart';
import Layout from '@components/Layouts/layout';
import { Header } from 'semantic-ui-react';

const MyCartPage = () => {
    
    const { items } = useCart();

    return (
        <Layout>
            <Header textAlign="center">
                My Cart
            </Header>

            <MyCart products={items} />
        </Layout>
    )
}
 
export default MyCartPage;