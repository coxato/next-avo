import React from 'react';
import { useCart } from '@store/cart';
import Basket from '../SVGIcons/Basket';


const CartNavItem = () => {
    const { totalItems } = useCart(); 

    return (
        <>
            <Basket />
            <span style={{marginLeft: '10px'}}>
                {totalItems}
            </span>
        </>
    );
}
 
export default CartNavItem;