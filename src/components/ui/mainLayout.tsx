
import React from 'react'
import NavBar from "@/components/ui/navBar";

interface LayoutProps {
    children: React.ReactNode
    handleToggleContactList: () => void
    showContactList: boolean
}

const MainLayout = ({ children, handleToggleContactList, showContactList }: LayoutProps) => {
    return (
        <>
                <NavBar
                    showContactList={showContactList}
                    handleToggleContactList={handleToggleContactList}/>
            <>{children}</>
        </>
    )
}

export default MainLayout