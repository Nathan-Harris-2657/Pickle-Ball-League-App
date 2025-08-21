import { NavLink } from "react-router-dom";

// Data
import pickleballBrands from "../data/brands";

function Paddles() {
  return (
    <>
      {pickleballBrands.map((brand) => (
        <NavLink key={brand.name} to={`/${brand.name.toLowerCase()}`}>
          {brand.name}
        </NavLink>
      ))}
    </>
  );
}

export default Paddles;
