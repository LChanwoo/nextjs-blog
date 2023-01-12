
export const FooterComponent = () => {
    const YEAR = new Date().getFullYear();
    const day = new Date().getDay();
    const month = new Date().getMonth();
    const date = new Date().getDate();
    return (
        // <footer className="flex flex-row justify-center items-center w-full">
        // {/* <div className="w-full items-center m-0  justify-center"> */}
            <div className="justify-center items-center w-full">
            {/* <h1 className="font-extrabold text-4xl "> 안녕하세요! </h1> 
             */}
             {YEAR}@Chanwoo Aldrich Lee
            </div>            
        // </div>
        // </footer>
    )
}