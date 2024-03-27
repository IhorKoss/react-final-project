import {Outlet} from "react-router-dom";
import {Header} from "../components/HeaderContainer/Header";

const MainLayout = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    );
};

export {MainLayout};