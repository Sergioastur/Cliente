const SaludarBtn = (props) => {
    return (
        <button onClick={() => props.saludarFn(props.userInfo.nombre)}>Si me pinchas ¿no sangro?</button>
    );
}
export default SaludarBtn;