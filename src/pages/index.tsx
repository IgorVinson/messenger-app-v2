import Head from 'next/head'
import Image from 'next/image'
import {Inter} from '@next/font/google'
import styles from '@/styles/Home.module.css'
import {useSelector} from "react-redux";

const inter = Inter({subsets: ['latin']})

export default function Home() {

    const users = useSelector((state: any) => state.users)

    console.log(users)
    return (
        <>
            <h1>I am messenger !!!</h1>
        </>
    )
}
