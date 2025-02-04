import React, { useMemo } from 'react'
import { useTable } from "react-table";
import MOCK_DATA from "./MOCK_DATA.json";
import { Columnas } from "./Columnas";
import "../styles/Tabla.css";

export const Tabla = () => {

    const columnas = useMemo(() => Columnas, []);
    const data = useMemo(() => MOCK_DATA, []);

    /* Respaldo por si acaso sale mal */
    /*
    const tableInstance = useTable({
        columns: columnas,
        data: data
    });

    */

    /* Funciones que brinda reac-table para facilitar codigo de las tablas */
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        footerGroups,
        rows,
        prepareRow,
    } = useTable({
        columns: columnas,
        data: data
    });

    return (
        <table {...getTableProps()}>
            <thead>
                {
                    headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {
                                headerGroup.headers.map((column) => (
                                    <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                                ))}
                        </tr>
                    ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {
                    rows.map(row => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {
                                    row.cells.map((cell) => {
                                        return (<td {...cell.getCellProps()}>{cell.render('Cell')}</td>)
                                    })
                                }
                            </tr>
                        )
                    })
                }
            </tbody>
            <tfoot>
                {
                    footerGroups.map(footerGroup => (
                        <tr {...footerGroup.getFooterGroupProps()}>
                            {
                                footerGroup.headers.map(column => (
                                    <td {...column.getFooterProps}>
                                        {
                                            column.render('Footer')
                                        }
                                    </td>
                                ))
                            }
                        </tr>
                    ))
                }
            </tfoot>
        </table>
    )
}
