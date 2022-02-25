import React from "react";

export function Columns({numbers}: {numbers: number[]}){

    return (
        <tr>
            {numbers.map(number => (
                <React.Fragment key={number}>
                    <td>{number}</td>
                </React.Fragment>
            ))}
        </tr>
    );
}