// Clase Persona
class Persona {
    constructor(nombre, peso, altura) {
        this.nombre = nombre;
        this.peso = peso;
        this.altura = altura;
    }
}

// Clase IMC
class IMC {
    constructor(nombre, imc) {
        this.nombre = nombre;
        this.imc = imc;
    }
}

// Lista de personas
const personas = [];

// Añadir persona
function addPerson() {
    const nombre = document.getElementById("nombre").value;
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);

    if (nombre && !isNaN(peso) && !isNaN(altura)) {
        personas.push(new Persona(nombre, peso, altura));
        alert(`Persona añadida: ${nombre}`);
        clearInputs();
    } else {
        alert("Por favor, introduce datos válidos.");
    }
}

// Modificar persona
function modifyPerson() {
    const nombre = document.getElementById("nombre").value;
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);

    const persona = personas.find(p => p.nombre === nombre);
    if (persona) {
        persona.peso = peso;
        persona.altura = altura;
        alert(`Persona modificada: ${nombre}`);
        clearInputs();
    } else {
        alert("Persona no encontrada.");
    }
}

// Calcular IMC
function calculateIMC() {
    const resultados = document.getElementById("resultados");
    resultados.innerHTML = ""; // Limpiar resultados previos

    personas.forEach(persona => {
        const imcValue = persona.peso / (persona.altura ** 2);
        let categoria = "";

        if (imcValue < 18.49) {
            categoria = "demasiado delgada";
        } else if (imcValue >= 18.49 && imcValue <= 24.99) {
            categoria = "peso normal";
        } else {
            categoria = "demasiado obesa";
        }

        // Mostrar resultados
        const resultado = document.createElement("li");
        resultado.textContent = `${persona.nombre} - IMC: ${imcValue.toFixed(2)} (${categoria})`;
        resultados.appendChild(resultado);
    });
}

// Limpiar inputs
function clearInputs() {
    document.getElementById("nombre").value = "";
    document.getElementById("peso").value = "";
    document.getElementById("altura").value = "";
}
