import { Outlet, Link } from "react-router-dom"

const Header = () => {
    return (
        <div className='header'>
            <div className='logo'>
                <a href="#/"><img src={require('../logo.png') } alt=''/></a>
            </div>
            <nav>
                <Link to='/'> Home </Link>
                <Link to='/'>Knowledge Centre</Link>
                <Link to='/'>FAQ's</Link>
                <Link to='/'>Gallery</Link>
                <Link to='/'>Ask a Legal Expert</Link>
                <Link to="/login">Login</Link>
                <button className='create-ac'>Create Account</button>
            </nav>
            <Outlet />
        </div>
    )
}

export default Header;