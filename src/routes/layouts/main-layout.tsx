import NavigationMenu from "@/components/navigation/navigation-menu"
import { ReactNode } from "react"

const MainLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div>
            <NavigationMenu />
            <div>{children}</div>
        </div>
    )

}

export default MainLayout