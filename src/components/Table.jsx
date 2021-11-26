import React from "react";

const Table = ({headers, rows}) => {
    return (
        <table class="table">
            <thead>
                <tr>
                    {headers.map((tableHeader) => (                       
                        <th scope="col">{tableHeader}</th> 
                    ))}
                </tr>
            </thead>
            <tbody>
                {rows.map((tableRow) => (
                    <tr>
                        {tableRow.map((columnData) => (
                            <td>{columnData}</td>
                        ))}
                    </tr> 
                ))}  
            </tbody>
        </table>
    );
};




export default Table;































