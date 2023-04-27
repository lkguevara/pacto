import Head from "next/head"
import Image from "next/image"
import Link from "next/link"

export default function signup({title}){
    return (
        <>
            <Head>
                <title>SIGNUP {title? `| ${title}` : ""}</title>
                <meta name="description" content="PACTO" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/pacto-logo.png" />
            </Head>
            <div>
                <Image priority src="/pacto-logo.png" alt="logo" width="85" height="88"/>
                <h2>¡Registro!</h2>
            </div>
            <Link href="/">Home</Link>
        </>
    )
}
