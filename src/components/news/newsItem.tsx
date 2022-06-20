import React from "react";
//@ts-ignore
import dateLogo from '../../img/date_news.svg';

const NewsItem = (props:{img: string, header: string, date: string, desc: string,}) => {
    return (
        <div className='news_item'>
            <div className='news_img' style={{backgroundImage: `url(${props.img})`}}>
                {/*<img src={props.img} alt="img"/>*/}
            </div>
            <h3 className='news_header'>{props.header}</h3>
            <div className='news_date'>
                <div className='ico' style={{backgroundImage: `url(${dateLogo})`}}>
                    {/*<img src={dateLogo} alt="date"/>*/}
                </div>
                <span>{props.date}</span>
            </div>
            <p className='nes_desc'>{props.desc}</p>
        </div>
    )
}

export default NewsItem