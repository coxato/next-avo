import React, { useState } from 'react';
import { useCartMutations } from '@store/cart';
import s from './addToCart.module.css';

const AddToCart = ({ product }) => {
    const { addToCart } = useCartMutations();
    const [qty, setQty] = useState(1);
    const [added, setAdded] = useState(false);

    const handleChange = (ev) => setQty(parseInt(ev.target.value));

    const handleAdd = () => {
        if(parseInt(qty) > 0){
            addToCart(product, qty);
            setAdded(true);
        }
    }

    const handleShowAgain = () => {
        setQty(1);
        setAdded(false);
    }

    return (
        <div className={s.container}>
            {
                !added ? (
                    <div className={s.inputContainer}>
                        <input 
                            type="number" 
                            defaultValue={isNaN(qty) ? 0 : qty}
                            className={s.input}
                            onChange={handleChange}
                        />
                        <button 
                            className={s.button}
                            onClick={handleAdd}
                        >
                                Add to Cart
                        </button>
                    </div>
                ): (
                    <div className={s.added}>
                        Added to cart!
                        <div
                            className={s.addAgain}
                            onClick={handleShowAgain}
                        >
                            I want to add more!
                        </div>
                    </div>
                )
            }
        </div>
    );
}
 
export default AddToCart;