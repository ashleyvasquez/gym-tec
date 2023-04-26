import React, { useMemo } from 'react'
import { useTable, usePagination } from "react-table";
import MOCK_DATA from "./MOCK_DATA.json";
import { Columnas } from "./Columnas";
import "../styles/Tabla.css";

export const PagintationTable = () => {

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
        page,
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
        pageOptions,
        state,
        prepareRow,
    } = useTable({
        columns: columnas,
        data: data
    },
        usePagination
    );

    const { pageIndex } = state;

    return (
        <>
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
                    {page.map(row => {
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
            </table>
            <div>
                <span>
                    Page{' '}
                    <strong>
                        {pageIndex + 1} of {pageOptions.length}
                    </strong>{' '}
                </span>
                <button onClick={() => previousPage()} disabled={!canPreviousPage}>Previous</button>
                <button onClick={() => nextPage()} disabled={!canNextPage}>Next</button>
            </div>
        </>
    )
}