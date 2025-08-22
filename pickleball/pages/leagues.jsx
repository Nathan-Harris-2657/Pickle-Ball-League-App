import { NavLink } from 'react-router-dom'
import pickballcourt from '../assets/pickleballcourt.jpg'

function Leagues(){
    return(
        <>
            <div id='courtContainer'>
                <div id='courtContainer2'>
                    <img id='courtImg' src={pickballcourt} alt="Court" />

                    <div id='leagueContainer'>
                        <div className='leagueLink'>
                            <NavLink to={'sign-up'}>Sign Up</NavLink>
                        </div>

                        <div className='leagueLink'>
                            <NavLink to={'upcoming-leagues'}>Upcoming Leagues</NavLink>
                        </div>

                        <div className='leagueLink'>
                            <NavLink to={'/how-leagues-work'}>How Leagues Work</NavLink>
                        </div>
                    </div>
                </div>


                
            </div>
        </>
    )
}
export default Leagues