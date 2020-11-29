import React, { useState } from 'react';
import { useCartMutations } from '@store/cart';
import s from './addToCart.module.css';

const AddToCart = ({ product }) => {
    const { addToCart } = useCartMutations();
    const [qty, setQty] = useState(1);
    const [added, setAdded] = useState(false);

    const handleChange = (ev) => setQty(parseInt(ev.target.value));

    const handleAdd = () => {
        addToCart(product, qty);
        setAdded(true);
    }

    const handleShowAgain = () => {
        setQty(1);
        setAdded(false);
    }

    return (
        <div className={s.container}>
            {
                !added ? (
                    <>
                        <input 
                            type="number" 
                            defaultValue={qty}
                            className={s.input}
                            onChange={handleChange}
                        />
                        <button 
                            className={s.button}
                            onClick={handleAdd}
                        >
                                Add to Cart
                        </button>
                    </>
                ): (
                    <>
                        Added to cart!
                        <div
                            className={s.addAgain}
                            onClick={handleShowAgain}
                        >
                            I want to add more!
                        </div>
                    </>
                )
            }
        </div>
    );
}
 
export default AddToCart;