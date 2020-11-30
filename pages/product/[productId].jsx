import React from 'react';
// import React, { useEffect, useState } from 'react';
// import { useRouter } from 'next/router';
import ProductDetail from '@components/ProductDetail/productDetail';
import AddToCart from '@components/Cart/addToCart';
import Layout from '@components/Layouts/layout';

// En caso de querer SSG (static site generic) en páginas dinámicas
// se deben usar si o si 2 métodos propios de nextjs
// getStaticPaths y getStaticProps

// getStaticPaths para decirle a nextjs todas las rutas dinámicas
// que necesita la app, en este caso todos los ids de los avocados
export const getStaticPaths = async () => {
    const response = await fetch('https://next-avo.vercel.app/api/avo');
    const json = await response.json();
    const { data: allAvos } = json;

    const paths = allAvos.map( ({id}) => ({
        params: { productId: id }
    }));

    return {
        paths,
        // everythig else is an 404
        fallback: false
    }
}

// getStaticProps para generar la data estatica en este caso
// al ser una página dinámica requiere el método anterior getStaticPaths
// para saber todos los paths que requiere esta página
export const getStaticProps = async (context) => {
    const params = context.params;
    const productId = params?.productId;

    const response = await fetch(`https://next-avo.vercel.app/api/avo/${productId}`)
    const avo = await response.json();

    return {
        props: {
            product: avo
        }
    }
}


const ProductItem = ({ product }) => {
// const ProductItem = () => {

    // const { query: { productId } } = useRouter();

    // Client Side Rendering
    // const [product, setProduct] = useState(null);

    // useEffect(() => {
    //     fetch(`/api/avo/${productId}`)
    //         .then( r => r.json())
    //         .then( data => setProduct(data))
    //         .catch( () => setProduct(null) );
    // }, []);

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