import Information from "../information/information";
import Register from "../register/register";
import News from "../news/news";
import Documents from "../documents/documents";
import Faq from "../faq/faq";
import React from "react";


export default function HomePage(){
    return (
        <div>
            <Information/>
            <Register/>
            <News/>
            <Documents/>
            <Faq/>
        </div>
    )
}