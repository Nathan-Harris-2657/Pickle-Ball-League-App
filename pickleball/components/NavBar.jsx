import { NavLink } from "react-router-dom"

function NavBar1(){
    return(
    <>
        <div id="navContainer1">
                <NavLink to={"/leagues"}>Leagues</NavLink>
                <NavLink to={"/paddles"}>Paddles</NavLink>
        </div>
    </> 
    )

}
export default NavBar1