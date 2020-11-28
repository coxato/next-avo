import React from 'react';
import Navbar from '../Navbar/navbar';

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <Navbar/>
            {children}
            <footer>the footer</footer>
        </div>
    );
}
 
export default Layout;