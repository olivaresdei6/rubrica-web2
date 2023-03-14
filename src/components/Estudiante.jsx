import React from "react";

function Estudiante({nombre, semestre}) {
    return (
        <div>
            <h2>Información del estudiante</h2>
            <p>Nombre: {nombre}</p>
            <p>Semestre: {semestre}</p>
        </div>
    );
}

export default Estudiante;
