import CarritoImg from "./img/carrito.png"

const Carrito = () => {
    const carritoStyle = {
        width: '50px', 
        height: '50px',
    };
const numeroItems={
    fontSize:'30px', 
};
    return (
        <div>
            <img src={CarritoImg} alt="icono-carrito" style={carritoStyle} />
            <label style={numeroItems}>0</label>
        </div>
    );
}

export default Carrito;