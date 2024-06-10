"use client"

import News from "@/components/News"

const newsTest = [
    {
        id:1,
        title:"noticia texte",
        image:"https://th.bing.com/th/id/R.9d5ba799ded60b4429169d8711f3f5f8?rik=%2bD2BYXv3N3knYA&riu=http%3a%2f%2fovernature.net%2fdownload%2f143-paisagem-foto-hd-inebriante-sol-amanhecer.jpg&ehk=XP9O%2b4O8FUSoZ5fifJevY3pall5ziuo9nzNQIOtvhPk%3d&risl=&pid=ImgRaw&r=0",
        text:'Esse texto é um <b>teste</b>para saber se está funcionando'
    },
    {
        id:2,
        title:"noticia teste",
        image:"https://th.bing.com/th/id/R.9d5ba799ded60b4429169d8711f3f5f8?rik=%2bD2BYXv3N3knYA&riu=http%3a%2f%2fovernature.net%2fdownload%2f143-paisagem-foto-hd-inebriante-sol-amanhecer.jpg&ehk=XP9O%2b4O8FUSoZ5fifJevY3pall5ziuo9nzNQIOtvhPk%3d&risl=&pid=ImgRaw&r=0",
        text:'Esse texto é um <b>teste</b>para saber se está funcionando'
    },
    {
        id:3,
        title:"noticia teste",
        image:"https://th.bing.com/th/id/R.9d5ba799ded60b4429169d8711f3f5f8?rik=%2bD2BYXv3N3knYA&riu=http%3a%2f%2fovernature.net%2fdownload%2f143-paisagem-foto-hd-inebriante-sol-amanhecer.jpg&ehk=XP9O%2b4O8FUSoZ5fifJevY3pall5ziuo9nzNQIOtvhPk%3d&risl=&pid=ImgRaw&r=0",
        text:'Esse texto é um <b>teste</b>para saber se está funcionando'
    }
]

const HomePage = () => {
    return(
        <div>
            Home
            {newsTest.map((news)=>(
                <News props={news} key={news.id}/>             
            ))}
        </div>
    )
}
export default HomePage