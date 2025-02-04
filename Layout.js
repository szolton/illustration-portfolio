// components/Layout.js
import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <div className="bg-gray-100 min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
