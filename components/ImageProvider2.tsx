import Head from "next/head"
import Image from "next/image"

export const ImageProvider2 = ({ src }) => {
    return (
        <>
            <Head>
                <meta property="og:image" content={src} />
            </Head>
            <Image
                src={src}
                alt="profile"
                width={600}
                height={500}
                className="justify-center items-center w-fit p-5"
            />
        </>
    )
}