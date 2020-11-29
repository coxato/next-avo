import React from 'react';
import s from './productDetail.module.css';

const ProductDetail = ({ name, image, price, attributes }) => {
    return ( 
        <div className={s.container}>
            <div className={s.wrapper}>

                <div className={s.left}>
                    <img className={s.image} src={image} alt={name}/>
                </div>
                <div className={s.right}>
                    <h1 className={s.name}>{name}</h1>
                    
                    <div className={s.section}>
                        <div className={s.sectionTitle}>Description</div>
                        <div className={s.sectionText}>{attributes.description}</div>
                    </div>

                    <div className={s.section}>
                        <div className={s.sectionTitle}>Shape</div>
                        <div className={s.sectionText}>{attributes.shape}</div>
                    </div>

                    <div className={s.section}>
                        <div className={s.sectionTitle}>Hardiness</div>
                        <div className={s.sectionText}>{attributes.hardiness}</div>
                    </div>

                    <div className={s.section}>
                        <div className={s.sectionTitle}>Taste</div>
                        <div className={s.sectionText}>{attributes.taste}</div>
                    </div>

                    <div className={s.section}>
                        <div className={s.sectionTitle}>Price</div>
                        <div className={s.sectionText}>${price} kg</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default ProductDetail;