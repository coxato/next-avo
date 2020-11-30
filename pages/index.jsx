// import React from 'react';
import React, { useState, useEffect } from 'react';
import ProductList from '@components/ProductList/productList';
import Layout from '@components/Layouts/layout';

/**
 * Los siguientes métodos (getServerSideProps y getStaticProps)
 * solo se pueden usar en las páginas, en los componentes no.
 */

/**
 * si se quieren cargar datos desde el server, se usa la
 * función propia de nextjs getServerSideProps
 * se exporta y usa así:
 */

// export const getServerSideProps = async () => {
//     const response = await fetch('http://localhost:3000/api/avo');
//     const json = await response.json();
//     const { data: { productList } } = json;
//     // siempre debe retornar un objeto con las props que
//     //  usará el componente
//     return {
//         props: {
//             productList
//         }
//     }
// }

// Static Site Generation SSG
// export const getStaticProps = async () => {
//     const response = await fetch('https://next-avo.vercel.app/api/avo');
//     const json = await response.json();
//     const { data: productList } = json;
//     // siempre debe retornar un objeto con las props que
//     //  usará el componente
//     return {
//         props: {
//             productList
//         }
//     }
// }

//  Server Side Rendering (SSR) vs Static Side Generation (SSG)
// la diferencia es que con SSR el servidor hace un request a la API cada vez
// que un usuario entra a dicha página, en cambio, con SSG el llamado a la API
// se realiza 1 sola vez cuando se hace `yarn build`. Se debe entonces tener en cuenta
// al usar SSG si los datos que se piden a la API cambiarán o no


// const Home = ({ productList }) => {
const Home = () => {
    const [productList, setProductList] = useState([]);

    // el useEffect siempre se ejecuta en el navegador
    // CSR Client Side Rendering
    useEffect(() => {
        fetch('/api/avo')
            .then( r => r.json() )
            .then( avos => setProductList(avos.data) )
    }, []);

    
    return ( 
        <Layout>
            <h1 className="title">Avos Store</h1>
            
            <div className="avos">
                <ProductList products={productList} />
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