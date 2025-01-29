const Saludar = (props) => {
    return (
        <div>
            Hola, {props.userInfo.nombre}, me he enterado de que tiene{" "}
            {props.userInfo.edad} años y de que su color favorito es el{" "}
            {props.userInfo.color}
        </div>
    );
}
export default Saludar;