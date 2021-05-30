import { useState } from 'react';
import { useHistory } from 'react-router-dom'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Button
} from 'reactstrap';

const NavigationBar = () => {
    const { push } = useHistory()
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return (
        <Navbar expand="md">
            <NavbarBrand className="mx-3" onClick={() => push('/')} style={{ cursor: 'pointer' }}>AGRAPH</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar className="d-flex justify-content-end">
                <Nav className="mx-3" navbar>
                    <NavItem>
                        <Button color="primary" className="mx-2" onClick={() => push('/login')}>Login</Button>
                    </NavItem>
                    <NavItem>
                        <Button color="primary" className="mx-2" onClick={() => push('/register')}>Sign up</Button>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    );
}

export default NavigationBar;
