import { NavBar } from '../components'

const Layout = ({ children, location }) => {
    return (
        <div>
            <NavBar pathName={location.pathname} />
            {children}
        </div>
    );
}
 
export default Layout;
