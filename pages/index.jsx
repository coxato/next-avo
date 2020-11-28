import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Home = () => {
    const [productsList, setProductsList] = useState([]);

    useEffect(() => {
        fetch('/api/avo')
            .then( r => r.json() )
            .then( avos => setProductsList(avos.data) )
    }, []);

    return ( 
        <div>
            <h1>Hi!</h1>
            <h3>I'm using next js</h3>
            <p>it's cool</p>
            <a href="/about">go to about page</a>
            <div className="avos">
                <ul>
                    {productsList.map( ({name, id}) => (
                        <li key={id}>
                            <Link href={`/product/${id}`}>
                                <a>{name}</a>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
     );
}
 
export default Home;