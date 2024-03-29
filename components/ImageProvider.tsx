import Head from "next/head"
import Image from "next/image"

export const ImageProvider = ({ src }) => {
    return (
        <>
            <Head>
                <meta property="og:image" content={src} />
            </Head>
            <Image
                src={src}
                alt="profile"
                width={400}
                height={300}
                className="justify-center items-center w-fit p-5"
            />
        </>
    )
}