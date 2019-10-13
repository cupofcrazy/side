import React, { Component } from 'react';
import MenuIcon from '../svg/MenuIcon';
import './Menu.scss'

class Menu extends Component {
    constructor(props) {
        super(props)
        this.menu = React.createRef()

    }
    state = {
        isOpen: false
    }
    toggleMenu() {
        this.setState((prevState) => ({
            isOpen: !prevState.isOpen
        }))
        if (this.state.isOpen) {
            this.openMenu();
        } else {
            this.closeMenu();
        }
    }
    openMenu = () => {
        this.menu.current.classList.add('open')
    }
    closeMenu = () => {
        this.menu.current.classList.remove('open')
    }
    render() {
        return (
            <>
                <div className="menu-btn">
                    <MenuIcon color="#FFFFFF" width={15} height={13}/>
                </div>
            </>
        );
    }
}

export default Menu;