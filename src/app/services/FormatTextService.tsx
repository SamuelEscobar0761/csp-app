import React from "react";

export const JumpLine = ({texto}: {texto: string}) => {
    const lineas = texto.split('\n');
    return (
        <div>
            {lineas.map((linea, index) => (
                <React.Fragment key={index}>
                {linea}
                <br />
                </React.Fragment>
            ))}
        </div>
  );
}