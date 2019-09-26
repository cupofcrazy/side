import React, { Component } from 'react';
import MenuIcon from '../svg/MenuIcon';
import './Menu.scss'

class Menu extends Component {
    state = {
        isOpen: false
    }
    toggleMenu() {
        this.setState((prevState) => ({
            isOpen: !prevState.isOpen
        }))
    }
    render() {
        return (
            <div className="menu-btn" onClick={ () => this.toggleMenu() }>
                <MenuIcon color="#FFFFFF" width={15} height={13}/>
            </div>
        );
    }
}

export default Menu;