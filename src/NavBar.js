import CartWidget from "./CartWidget"
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
    const navStyle = {
        backgroundColor: '#f5f5f5',
        padding: '20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    };

    const titleStyle = {
        color: '#900C3F',
        fontSize: '24px',
        marginRight: '20px'
    };

    const buttonStyle = {
        backgroundColor: 'gray',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        padding: '8px 12px',
        margin: '0 5px',
        cursor: 'pointer',
    };

    return (
        <nav style={navStyle}>
            <h2 style={titleStyle}>Tienda One Piece</h2>
            <Link to='/'> 
                <button style={buttonStyle}>Inicio</button>
            </Link>
            <NavLink style={buttonStyle} to={`/category/figura`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Figuras</NavLink>
            <NavLink style={buttonStyle} to={`/category/manga`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Mangas</NavLink>
            <NavLink style={buttonStyle} to={`/category/indumentaria`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Indumentaria</NavLink>
            <CartWidget />
        </nav>
    );
}
export default NavBar;
