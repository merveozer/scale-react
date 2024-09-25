import { NavRoute, navRoutes } from "@/routes/app-routes";
import NavItem from "./nav-item";

const NavigationMenu = () => {

    return(
        <div className = "p-2 bg-primary flex justify-center">
            <ul className = "text-nav flex gap-10">
                {
                    navRoutes.map((route: NavRoute, index: number) => {
                        return <NavItem key={index} route={route}/>
                    })
                }
            </ul>

        </div>
    )
}

export default NavigationMenu;