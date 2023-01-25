import Head from "next/head"
import Image from "next/image"
import { useEffect } from "react"
// import "/styles/global.css"

export const IndexPage = () => {
    return (
        <>
        <div className="flex flex-row justify-center items-center w-full " >
            <div className="w-full items-center m-0  justify-center" >
                <Image className="justify-center w-full p-10" src="/images/me2.png" alt="profile" width={300} height={300} />
            </div>
            <div className="justify-center items-center w-full">
                <h1 className="font-extrabold text-3xl "> 안녕하세요! </h1> 
                항상 끊임없이 새로운 것을 지향하며 도전하는 <br/>
                웹개발자 이찬우입니다.

            </div>
        </div>
        <hr className="nx-my-8 dark:nx-border-gray-900"></hr>

        <div>
            <h3  className="flex items-center justify-center "> 기술 Stack </h3>

            <div  className="flex items-center justify-center ">
                <img src="https://img.shields.io/badge/nodejs-green?style=flat&logo=Node.js&logoColor=white"/>
                <img src="https://img.shields.io/badge/HTML5-red?style=flat&logo=HTML5&logoColor=white"/>
                <img src="https://img.shields.io/badge/CSS3-blue?style=flat&logo=CSS3&logoColor=white"/>
                <img src="https://img.shields.io/badge/JavaScript-yellow?style=flat&logo=JavaScript&logoColor=white"/>
                <img src="https://img.shields.io/badge/TypeScript-blue?style=flat&logo=TypeScript&logoColor=white"/>
                <img src="https://img.shields.io/badge/Java-Purple?style=flat&logo=Java&logoColor=white"/>
            </div>
            <br/>
            <div  className="flex items-center justify-center ">
                <img src="https://img.shields.io/badge/react-blue?style=flat&logo=react&logoColor=white"/>
                <img src="https://img.shields.io/badge/Next.js-yellow?style=flat&logo=Next.js&logoColor=white"/>
                <img src="https://img.shields.io/badge/TailwindCss-blue?style=flat&logo=Tailwind CSS&logoColor=white"/>
            </div>
            <br/>
            <div className="flex items-center justify-center ">
                <img src="https://img.shields.io/badge/NestJs-black?style=flat&logo=NestJs&logoColor=red"/>
                <img src="https://img.shields.io/badge/Express.js-yellow?style=flat&logo=Express&logoColor=white"/>
                <img src="https://img.shields.io/badge/SpringBoot-green?style=flat&logo=Spring Boot&logoColor=white"/>
            </div>
            <br/>
            <div className="flex items-center justify-center ">
                <img src="https://img.shields.io/badge/PM2-black?style=flat&logo=PM2&logoColor=white"/>
                <img src="https://img.shields.io/badge/npm-black?style=flat&logo=npm&logoColor=white"/>
                <img src="https://img.shields.io/badge/Axios-black?style=flat&logo=Axios&logoColor=white"/>
                <img src="https://img.shields.io/badge/vercel-black?style=flat&logo=vercel&logoColor=white"/>
                <img src="https://img.shields.io/badge/Amazon AWS-black?style=flat&logo=Amazon AWS&logoColor=white"/>
                <img src="https://img.shields.io/badge/Amazon EC2-black?style=flat&logo=Amazon EC2&logoColor=white"/>
            </div>
            <br/>
            <h5 className="flex items-center justify-center "> 협업툴 </h5>
            <div  className="flex items-center justify-center ">
                <img src="https://img.shields.io/badge/Notion-black?style=flat&logo=Notion&logoColor=white"/>
                <img src="https://img.shields.io/badge/Slack-black?style=flat&logo=Slack&logoColor=white"/>
                <img src="https://img.shields.io/badge/Figma-black?style=flat&logo=Figma&logoColor=white"/>
                <img src="https://img.shields.io/badge/Telegram-black?style=flat&logo=Telegram&logoColor=white"/>
            </div>

            <br/>
            <br/>
        </div>
        </>
    )
}
