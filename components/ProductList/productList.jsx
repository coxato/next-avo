import React from 'react';
import Link from 'next/link';
import s from './productList.module.css';

const ProductList = ({ products }) => {
    return ( 
        <div className={s.container}>
            {
                products.map( ({id, name, price, image}) => (
                    <div className={s.productItem} key={id}>
                        <Link href={`/product/${id}`}>
                            <div className={s.productCard}>
                                <img className={s.image} src={image} alt={name} />
                                <h2 className={s.name}>{name}</h2>
                                <h3 className={s.price}>${price} kg</h3>
                            </div>
                        </Link>
                    </div>
                ))
            }
        </div>
     );
}
 
export default ProductList;