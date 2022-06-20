import React from "react";
//@ts-ignore
import offoceWork from '../../img/3d_Office_Work.png';
import './information.css';

const Information: React.FC = () => {

    return (
        <div className='information_container'>
            <div className="header_information">
                <div className="description">
                    <h2>РЕЕСТР ПРОГРАММНОГО ОБЕСПЕЧЕНИЯ</h2>
                    <p>Единый реестр программ для электронных вычислительных машин и баз данных</p>
                    <p>
                        Включено ПО в реестр: <span>13 438</span>
                        <br/>
                        Правообладателей: <span>4 272</span>
                    </p>
                </div>
                <div className="search_information">
                    <form action="" className="search_information_form">
                        <input type="text" name="s" id="search" placeholder='Поиск реестр...'/>
                        <button type="submit" className='linze'></button>
                        <button type="submit" className="search_information_button">Искать</button>
                    </form>
                </div>
            </div>
            <div className="img_information">
                <img src={offoceWork} alt=""/>
            </div>
        </div>
    )
}

export default Information