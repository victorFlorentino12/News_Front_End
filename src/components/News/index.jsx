"use client"

import Image from "next/image";

const News = ({props}) =>{
    return(
        <div>
            <div>{props.title}</div>
            <img src={props.image} width={150} height={150} alt="oi" />
            <div dangerouslySetInnerHTML={{__html: props.text}}/>
            <h1>oi</h1>
        </div>
    )
}
export default News;