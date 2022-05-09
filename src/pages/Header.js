import {Outlet, Link} from "react-router-dom"

const Header = () =>{
    return (
        <div>
            <h1>LandDoc</h1>
            <nav>
                <Link to="/"> Home </Link>
                <Link to="/login"> Login </Link>
                <Link to="/SignUp"> SignUp </Link>
            </nav>
            <Outlet/>
        </div>
    )
}

export default Header;