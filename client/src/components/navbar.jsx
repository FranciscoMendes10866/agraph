import { useState } from 'react';
import { useHistory } from 'react-router-dom'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    Button
} from 'reactstrap';
import { useAtom } from 'jotai'

import { usernameAtomPersisted } from '../store/usernameAtom'
import { tokenAtomPersisted } from '../store/tokenAtom'
import { userIdAtomPersisted } from '../store/userIdAtom'

const NavigationBar = ({ pathName }) => {
    const [username, setUsername] = useAtom(usernameAtomPersisted)
    const [, setToken] = useAtom(tokenAtomPersisted)
    const [, setUserId] = useAtom(userIdAtomPersisted)
    const { push } = useHistory()
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const handleLogOut = e => {
        e.preventDefault()
        setUsername('')
        setToken('')
        setUserId('')
    }
    return (
        <Navbar expand="md">
            <NavbarBrand className="mx-3" onClick={() => push('/')} style={{ cursor: 'pointer' }}>AGRAPH</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar className="d-flex justify-content-end">
                <Nav className="mx-3" navbar>
                    {!username ? (
                        <>
                            <NavItem>
                                <Button color="primary" className="mx-2" onClick={() => push('/login')}>Login</Button>
                            </NavItem>
                            <NavItem>
                                <Button color="primary" className="mx-2" onClick={() => push('/register')}>Sign up</Button>
                            </NavItem>
                        </>
                    ) : (
                        <NavItem>
                            {pathName === '/create-recipe' ? (
                                <Button color="warning" className="mx-2" onClick={() => push('/')}>Cancel</Button>
                            ): (
                                <Button color="primary" className="mx-2" onClick={() => push('/create-recipe')}>Create post</Button>
                            )}
                            <Button color="warning" className="mx-2" onClick={handleLogOut}>Log out</Button>
                        </NavItem>
                    )}
                </Nav>
            </Collapse>
        </Navbar>
    );
}

export default NavigationBar;
