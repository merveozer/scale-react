import { Route, Routes } from "react-router-dom"
import {appRoutes} from "@/routes/app-routes"
import MainLayout from "@/routes/layouts/main-layout"
import HomePage from "./pages/home-page"

const AppRouter = () => {
    return(
        <Routes>
            <Route path={appRoutes.home}
            element={
                <MainLayout>
                   <HomePage />
                </MainLayout>
            }
            />
            <Route path={appRoutes.artist}
            element={
                <MainLayout>
                    <div>Artist Page</div>
                </MainLayout>
            }
            />
        </Routes>
    )
}

export default AppRouter