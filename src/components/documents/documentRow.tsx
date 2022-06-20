import React from "react";
//@ts-ignore
import fail from "../../img/download.svg";

const DocumentRow = (props: {type: string, name: string, date: string, num: string, size: string}) => {
    return (
        <tr>
            <td>{props.type}</td>
            <td><div style={{width: 390}}>{props.name}</div></td>
            <td>{props.date}</td>
            <td>{props.num}</td>
            <td>
                <div style={{display: 'flex'}}>
                    <div className='ico_table' style={{backgroundImage: `url(${fail})`}}></div>
                    Скачать ({props.size})
                </div>
            </td>
        </tr>
    )
}

export default DocumentRow