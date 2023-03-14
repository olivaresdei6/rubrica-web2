import React from "react";

function Hobbies({hobbies}) {
    return (
        <div>
            <h2>Hobbies</h2>
            <ul>
                {hobbies.map((hobbie) => (
                    <li key={hobbie}>{hobbie}</li>
                ))}
            </ul>
        </div>
    );
}

export default Hobbies;
