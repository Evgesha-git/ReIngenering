import React from "react";
//@ts-ignore
import fail from '../../img/failsvg.svg'
import {documentsData} from "../../dataFiles/data";
import DocumentRow from "./documentRow";
import './documents.css';

const Documents: React.FC = () => {
    const documents = documentsData;

    return (
        <div className='documents_container'>
            <div className='documents_header'>
                <h2>Документы</h2>
                <p>Всего документов: <span>5</span></p>
            </div>
            <div className='documents_items'>
                <table>
                    <thead>
                    <tr>
                        <th style={{width: 250}}>Категория</th>
                        <th style={{width: 470}}>Наименование </th>
                        <th style={{width: 150}}>Дата</th>
                        <th style={{width: 135}}>Номер</th>
                        <th style={{width: 165}}>
                            <div style={{display: 'flex'}}>
                                <div className='ico_table' style={{backgroundImage: `url(${fail})`}}>
                                </div>
                                Содержание
                            </div>
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {documents.map((item, i) => <DocumentRow
                        key={i.toString()}
                        type={item.type}
                        name={item.name}
                        date={item.date}
                        num={item.num}
                        size={item.size}
                    />)}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Documents