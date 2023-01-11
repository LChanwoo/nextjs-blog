import Image from "next/image"
// import "/styles/global.css"

export const IndexPage = () => {
    return (
        <>
        <div className="flex flex-row justify-center items-center w-full ">
            <div className="w-full items-center m-0  justify-center" >
                {/* <div> */}
                    <Image className="justify-center w-full p-10" src="/images/me2.png" alt="profile" width={300} height={300} />
                {/* </div> */}
            </div>
            <div className="justify-center items-center w-full">
                <h1 className="font-extrabold text-4xl "> 안녕하세요! </h1> 
                항상 새로운 것을 지향하며 도전하는
                1년차 개발자 이찬우입니다.
            </div>
        </div>
        </>
    )
}
