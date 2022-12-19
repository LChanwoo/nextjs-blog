
import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";
import React, { useState, useEffect } from 'react';
import { NotionRenderer } from 'react-notion';
import { articleCss} from "../css/article";



export const RenderPage = ({NOTION_PAGE_ID})=>{
    const [response, setResponse] = useState({});
  
  useEffect(() => {
        fetch(`https://notion-api.splitbee.io/v1/page/${NOTION_PAGE_ID}`)
        .then(res => res.json())
        .then((resJson) => {
            setResponse(resJson);
        });
    }, [])

    return (
            <article style={articleCss}>
                {response && ( <NotionRenderer blockMap={response} fullPage={true} hideHeader={true}/> )}    
            </article>

    )
};