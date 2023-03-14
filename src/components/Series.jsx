import React from "react";

function Series({series}) {
    return (
        <div>
            <h2>Series favoritas</h2>
            {series.map((serie) => (
                <div key={serie.nombre}>
                    <h3>{serie.nombre}</h3>
                    <p>{serie.descripcion}</p>
                    <p>Actores relevantes: {serie.actores.join(", ")}</p>
                </div>
            ))}
        </div>
    );
}

export default Series;
