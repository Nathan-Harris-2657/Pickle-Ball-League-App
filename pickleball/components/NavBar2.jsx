import { NavLink } from "react-router-dom"

function NavBar2(){
    return(
        <>
            <div id="navContainer2">
                <NavLink to={"/register"}>Register</NavLink>
                <NavLink to={"/login"}>Login</NavLink>
                <NavLink to={"/what-is-pickle-ball"}>What is Pickle Ball?</NavLink>
            </div>
        </>
    )
}
export default NavBar2