import { format } from "date-fns";
import { ColumnFilter } from "./ColumnFilter";

export const Columnas = [
    {
        Header: 'Id',
        Footer: 'Id',
        accessor: 'id',
        disableFilters: true
    },
    {
        Header: 'Nombre Sucursal',
        Footer: 'Nombre Sucursal',
        accessor: 'nombre_sucursal',
    },
    {
        Header: 'Fecha de apertura',
        Footer: 'Fecha de apertura',
        accessor: 'fecha_apertura',
        Cell: ({value}) => {return format(new Date(value), 'dd/MM/yyyy')},
    },
    {
        Header: 'Horario Atencion',
        Footer: 'Horario Atencion',
        accessor: 'horario_atencion',
    },
    {
        Header: 'Administrador',
        Footer: 'Administrador',
        accessor: 'empleado_admin',
    },
    {
        Header: 'Capacidad Maxima',
        Footer: 'Capacidad Maxima',
        accessor: 'capacidad_maxima',
    },
    {
        Header: 'Telefono1',
        Footer: 'Telefono1',
        accessor: 'telefono1',
    },
    {
        Header: 'Telefono2',
        Footer: 'Telefono2',
        accessor: 'telefono2',
    }
]