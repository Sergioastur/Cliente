const Variables2 = () => {
    const encabezado = (
        <header>
            <h1>Titulo</h1>
            <p>Home</p>
        </header>
    )

    const contenido = (
        <main>
            <h2>Subtitulo</h2>
            <p>Contenido</p>
        </main>
    )
    return (
        <>
            {encabezado}
            {contenido}
        </>
    )
 }
export default Variables2;