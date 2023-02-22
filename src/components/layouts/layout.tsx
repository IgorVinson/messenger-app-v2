
import React from 'react'
import NavBar from "@/components/layouts/navBar";

interface LayoutProps {
    children: React.ReactNode
    handleToggleContactList: () => void
    showContactList: boolean
}

const Layout = ({ children, handleToggleContactList, showContactList }: LayoutProps) => {
    return (
        <>
                <NavBar showContactList={showContactList} handleToggleContactList={handleToggleContactList}/>
            <>{children}</>
        </>
    )
}

export default Layout