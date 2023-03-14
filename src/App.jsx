import React from "react";
import Estudiante from "./components/Estudiante";
import Hobbies from "./components/Hobbies";
import Series from "./components/Series";
import "./App.css";

function App() {
    const estudiante = {
        nombre: "Hola ¡Mi nombre es Deiber Olivares!",
        semestre: "Soy estudiante de 9 no semestre de Ingeniería de Sistemas en la Universidad De La Costa (CUC)",
    };

    const hobbies = ["Leer", "Jugar videojuegos", "Tocar guitarra"];
    const series = [
        {
            nombre: "Breaking Bad",
            descripcion:
                "Un profesor de química de secundaria con cáncer de pulmón se convierte en un criminal peligroso para poder pagar su tratamiento y asegurar el futuro de su familia.",
            actores: ["Bryan Cranston", "Aaron Paul"],
        },
        {
            nombre: "Stranger Things",
            descripcion:
                "En la década de 1980, en Hawkins, Indiana, un niño de 12 años desaparece misteriosamente y sus amigos se embarcan en una peligrosa búsqueda para encontrarlo.",
            actores: ["Winona Ryder", "Millie Bobby Brown", "David Harbour"],
        },
    ];

    return (
        <div className="App">
            <Estudiante className="Estudiante" nombre={estudiante.nombre} semestre={estudiante.semestre} />
            <Hobbies className="Hobbies" hobbies={hobbies} />
            <Series className="Series" series={series} />
        </div>
    );
}

export default App;
