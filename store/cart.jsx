import React, { useContext, useReducer, createContext } from 'react';
import cartReducer from './cartReducer';

const ItemsContext = createContext({});

function CartHOC({ children }){
    const [state, dispatch] = useReducer(cartReducer, {});

    return(
        <ItemsContext.Provider value={{ state, dispatch }}>
            {children}
        </ItemsContext.Provider>
    )
}

// ===== custom hooks =====

// just get cart data
const useCart = () => {
    const { state } = useContext(ItemsContext);

    const itemsById = state;
    const items = Object.values(itemsById);

    const totalItems = items.reduce((sum, item) => sum += item.qty, 0);
    const totalPrice = items.reduce((sum, item) => sum+= item.price * item.qty , 0);

    return {
        itemsById,
        items,
        totalItems,
        totalPrice
    }
}

// modify card data
const useCartMutations = () => {
    const { dispatch } = useContext(ItemsContext);
    const cartAction = (type, item, qty = 1) => ({type, item, qty});

    const addToCart = (item, qty) => {
        dispatch(
            cartAction('addItem', item, qty)
        )
    }

    const removeFromCart = (item) => {
        dispatch(
            cartAction('removeItem', item)
        )
    }

    return {
        addToCart,
        removeFromCart
    }
}


export {
    useCart,
    useCartMutations
}

export default CartHOC;