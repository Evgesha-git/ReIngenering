import React from "react";
import {DataGrid, GridColDef} from "@mui/x-data-grid";
import {registers} from "../../dataFiles/data";
import './register.css';

/**
 * Возможно потом доделаю, были бы данные, было бы проще, ибо хотелось бы сделать все функциональным
 * */

const Register:React.FC = () => {
    const columns: GridColDef[] = [
        {field: 'id', headerName: `Регистрационный
         номер`, width: 188},
        {field: 'name', headerName: `Наименование
         программного обеспечения`, width: 267},
        {field: 'kodName', headerName: `Код
         класса`, width: 57},
        {field: 'klassProgramm', headerName: `Класс программного
         обеспечения`, width: 173},
        {field: 'date', headerName: `Дата
         регистрации`, width: 108},
        {field: 'reference', headerName: `Адрес
         сайта`, width: 77},
    ];

    const rows = registers;

    console.log(rows);

    return (
        <div className='register_main'>
            <div className='register_filter'>
                <h2>Реестры</h2>
                <div className='filters'>

                </div>
            </div>
            <div className='register_table' style={{height: 1364}}>
                {/* Тут я не осилил задачу */}
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={10}
                />
            </div>

            <div className='pagination'>

            </div>
        </div>
    )
}

export default Register;