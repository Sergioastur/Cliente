// ! Se evita con el css que la grafica se descontrole y de error react
import "./estadisticas.css";
import React, { useEffect, useState, useRef } from 'react';
import { Chart, registerables } from 'chart.js';


// Registrar todos los componentes de Chart.js
Chart.register(...registerables);

const Estadisticas = () => {
    const [estadisticas, setEstadisticas] = useState(null);
    const [error, setError] = useState(null);
    const idUsuario = 6; 
    const mes = 3; 
    const anio = 2025;
    const canvasRef = useRef(null); 
    const chartRef = useRef(null); 

    useEffect(() => {
        const fetchData = async () => {
            const apiUrl = `http://localhost:8000/estadisticas.php?mes=${mes}&anio=${anio}&id_usu=${idUsuario}`;

            try {
                const response = await fetch(apiUrl);
                const data = await response.json();

                if (data.error) {
                    setError(data.error);
                    return;
                }

                setEstadisticas(data);
            } catch (error) {
                console.error("Error al obtener datos:", error);
                setError("Error al cargar datos.");
            }
        };

        fetchData();
    }, [idUsuario, mes, anio]);

    useEffect(() => {
        if (estadisticas && canvasRef.current) {
            const canvas = canvasRef.current;

            // ! Se añade para evitar que la gráfica se descontrole (al final se usa css para controlar el tamaño)
            canvas.height = 400; 
            canvas.width = canvas.parentElement.offsetWidth; 

            crearGrafico(estadisticas.evolucion);
        }
    }, [estadisticas]);

    const crearGrafico = (evolucion) => {
        if (chartRef.current) {
            chartRef.current.destroy(); 
        }

        const ctx = canvasRef.current.getContext("2d"); 
        chartRef.current = new Chart(ctx, {
            type: "line",
            data: {
                labels: evolucion.map(item => item.fecha),
                datasets: [{
                    label: "Nivel LENTA",
                    data: evolucion.map(item => item.lenta),
                    borderColor: "rgba(75, 192, 192, 1)",
                    backgroundColor: "rgba(75, 192, 192, 0.2)",
                    borderWidth: 2,
                }],
            },
            options: {
                responsive: true,
                maintainAspectRatio: false, 
                scales: {
                    x: { title: { display: true, text: "Fecha" }, type: 'category' },
                    y: { title: { display: true, text: "Nivel LENTA" } }
                }
            }
        });
    };

    return (
        <div id="estadisticas">
            {error ? (
                <p>Error: {error}</p>
            ) : estadisticas ? (
                <>
                    <h2>Estadísticas de LENTA - {mes}/{anio}</h2>
                    <ul>
                        <li><strong>Media:</strong> {estadisticas.estadisticas.media_lenta}</li>
                        <li><strong>Mínimo:</strong> {estadisticas.estadisticas.min_lenta}</li>
                        <li><strong>Máximo:</strong> {estadisticas.estadisticas.max_lenta}</li>
                    </ul>
                    <canvas ref={canvasRef}></canvas>
                </>
            ) : (
                <p>Cargando datos...</p>
            )}
        </div>
    );
};

export default Estadisticas;
