import { NavRoute } from "@/routes/app-routes";
import { AllHTMLAttributes } from "react";
import { Link } from "react-router-dom";

interface NavItemProps extends AllHTMLAttributes<HTMLElement> {
    route: NavRoute
}

const NavItem = ({route}: NavItemProps) => {
    return (
        <Link className = "flex flex-col p-2 gap-1 items-center w-full text-white rounded-2xl border" to = {route.path}>
            <span className = "text-sm font-bold text-center leading-relaxed">{route.title}</span>
        </Link>
    )
}

export default NavItem;