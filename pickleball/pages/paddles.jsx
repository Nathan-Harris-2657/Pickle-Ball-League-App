import { NavLink } from "react-router-dom";

// Data
import pickleballBrands from "../data/brands";

function Paddles() {
  return (
    <>
    
      <div id="brandContainer">
        {pickleballBrands.map((brand) => (
          <NavLink key={brand.name} to={`/${brand.name}`}>
            <img className="pickleBallLogos" src={brand.logo} alt={`${brand.name} logo`} />
          </NavLink>
        ))}
      </div>
      
    </>
  );
}

export default Paddles;
