import { Route, Routes } from "react-router-dom"
import {appRoutes} from "@/routes/app-routes"
import MainLayout from "@/routes/layouts/main-layout"
import HomePage from "./pages/home-page"
import ArtistPage from "@/pages/artist-page.tsx";
import LoginPage from "@/pages/login-page.tsx";

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
                     <ArtistPage />
                </MainLayout>
            }
            />
             <Route
                path={appRoutes.login}
                element={
                   <LoginPage />
                }
            />
        </Routes>
    )
}

export default AppRouter