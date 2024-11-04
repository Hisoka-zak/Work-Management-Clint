import React, { useState } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import moha from '../assets/moha.avif';

const Header = () => {

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(prevState => !prevState);
    };


    return (
        <Navbar className="navbar-h" expand="lg">
            <div className="container d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                    <img className="rounded-circle" src={moha} alt='logo' height='32px' />
                    <NavbarBrand href="#"><h5 className="mb-0">&nbsp;&nbsp; Mr.Mohammed</h5></NavbarBrand>
                </div>
                <Nav className="ml-auto text-white" navbar>
                    <NavItem>
                        <NavLink href="/home" active>Home</NavLink>
                    </NavItem>
                    <NavItem className="nav-link active">/</NavItem>
                    <NavItem>
                        <NavLink href="/contact" active>Contact Us</NavLink>
                    </NavItem>
                    <NavItem>
                        <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
                            <DropdownToggle nav caret>
                                More
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem header>Options</DropdownItem>
                                <DropdownItem className='bi bi-check2-square' href='/completedTasks'> Completed Tasks</DropdownItem>
                                <DropdownItem className='bi bi-box-arrow-left' href='/'> Sign Out</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </NavItem>
                </Nav>
            </div>
        </Navbar>
    );
};

export default Header;
