import React from "react";

export const JumpLine = ({texto}: {texto: string}) => {
    const lineas = texto.split('\n');
    return (
        <>
            {lineas.map((linea, index) => (
                <React.Fragment key={index}>
                {linea}
                <br />
                </React.Fragment>
            ))}
        </>
  );
}