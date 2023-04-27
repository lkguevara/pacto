import EnConstruccion from "@/components/enConstruccion"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"

export default function signup(){
    return (
        <>
            <Head>
                <title>PACTO | Sign Up</title>
                <meta name="description" content="PACTO" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/pacto-logo.png" />
            </Head>
            <Link href="/">
                <Image priority src="/pacto-logo.png" alt="logo" width="85" height="88"/>
            </Link>
            <EnConstruccion/>
        </>
    )
}
