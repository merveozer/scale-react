import NavigationMenu from "@/components/navigation/navigation-menu"
import { ReactNode } from "react"
import {Navigate} from "react-router-dom";
import {appRoutes} from "@/routes/app-routes.tsx";

const MainLayout = ({ children }: { children: ReactNode }) => {
    const authenticated = localStorage.getItem("authenticated");
    if (authenticated !== "YES") {
        return <Navigate to={appRoutes.login} />
    }

    return (
        <div>
            <NavigationMenu />
            <div>{children}</div>
        </div>
    )

}

export default MainLayout