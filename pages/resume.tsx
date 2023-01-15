import "react-notion/src/styles.css";
import { NotionRenderer } from 'react-notion';
import { useEffect, useState } from "react";


export default ({ blockMap })=>{
    const YEAR = new Date().getFullYear();
    const [response, setResponse] = useState({});
    const NOTION_PAGE_ID = '160bea0ed31b4f53b1a497d5252906cb';
    useEffect(() => {
        fetch(`https://notion-api.splitbee.io/v1/page/${NOTION_PAGE_ID}`)
        .then(res => res.json())
        .then((resJson) => {
            setResponse(resJson);
        });
    }, [])

    return (
 
            <div style={{width:"calc(100%-650px)",maxWidth:"768px",marginLeft:"auto",marginRight:"auto"}}>
                <div>
                    <h1 className="text-4xl font-extrabold p-5">이력서</h1>        
                    { response && <NotionRenderer blockMap={response} fullPage={true} hideHeader={true} />  }

                </div>

                <small style={{display:"block",marginTop:"8rem"}}>
                    <time >{YEAR} </time>
                      © Aldrich Lee.
                    <a href="/"> home </a>
                    <style jsx>{`
                        a {
                        float: right;
                        }
                        @media screen and (max-width: 480px) {
                        article {
                            padding-top: 2rem;
                            padding-bottom: 4rem;
                        }
                        .notion-text {
                            margin-top: 1em;
                            margin-bottom: 1em;
                            
                        }
                        }
                        
                    `}</style>
                </small>
            </div>

    )
};