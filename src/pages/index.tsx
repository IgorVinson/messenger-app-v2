import {useSelector} from "react-redux";
import MainLayOut from "@/components/layouts/MainLayOut";


export default function Home() {

    const users = useSelector((state: any) => state.users)

    console.log(users)
    return (
        <>
            <MainLayOut/>
        </>
    )
}
