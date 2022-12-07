
import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";
import React, { useState, useEffect } from 'react';
import { NotionRenderer } from 'react-notion';
import {articleCss} from '/css/article.ts'


export default ({ blockMap })=>{
    const YEAR = new Date().getFullYear();
    const [response, setResponse] = useState({});
  
  useEffect(() => {
    const NOTION_PAGE_ID = '416da310ee1e438997c1a8f02d66d726';
        fetch(`https://notion-api.splitbee.io/v1/page/${NOTION_PAGE_ID}`)
        .then(res => res.json())
        .then((resJson) => {
            setResponse(resJson);
        });
    }, [])
    if(response === null){
        return(<></>);   
    }
    return (
            <article style={articleCss}>
    
                    <NotionRenderer blockMap={response} fullPage={true} hideHeader={true}  />  
            </article>

    )
};