import { NavLink } from "react-router-dom"

function NavBar1(){
    return(
    <>
        <div id="navContainer1">
                <NavLink to={"/leagues"}>Leagues</NavLink>
                <NavLink to={"/paddles"}>Paddles</NavLink>
                <NavLink to={"/accessories"}>Accessories</NavLink>
                <NavLink to={"/register"}>Register</NavLink>
                <NavLink to={"/login"}>Login</NavLink>
                <NavLink to={"/contact"}>Contact</NavLink>
        </div>
    </> 
    )

}
export default NavBar1