import React from 'react';
import './Header.scss'
import Menu from '../Menu';

const Header = () => {
    return (
        <header className="header">
            <div className="wrapper">
                <Menu />
                
            </div>
        </header>
    );
};

export default Header;