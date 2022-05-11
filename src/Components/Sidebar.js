import React, {useEffect, useState} from 'react'
import Channel from './Channel'
const Sidebar = () => {
    const [articles, setArticles] = useState([])
    let list = []
    const updateNews = async ()=>{
        const url = "http://localhost:3000/c.json";
        let data = await fetch(url);
        let parsedData = await data.json()
        setArticles(parsedData);
    }
    useEffect(() => {
        updateNews();
        //eslint-disable-next-line
    }, [])
    return (
        <>
        
           <div class="w3-sidebar w3-bar-block w3-light-grey w3-card" style={{width:"15%"}}>
           {articles.map((element) => {
                            return <>
                                <Channel id={element.id}  name={element.name}/>
                                </>
                        })}
            </div>
        </>
    )
}

export default Sidebar