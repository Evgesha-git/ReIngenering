import React from "react";
import {newsData} from "../../dataFiles/data";
import NewsItem from "./newsItem";
import './news.css';

const News: React.FC = () => {
    const news = newsData

    return (
        <div className='news_container'>
            <h2>Новости реестра</h2>
            <div className='news_elements'>
                <div className='news'>
                    {news.map((item, i) => {
                        return <NewsItem key={i.toString()} img={item.img} header={item.header} date={item.date} desc={item.desc}/>
                    })}
                </div>
                <button className='news_button'>Показать все</button>
            </div>
        </div>
    )
}

export default News