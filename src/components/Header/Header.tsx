import css from './Header.module.css';
import {NavLink} from "react-router-dom";
import {MainLayout} from "../../layouts";
const Header = () => {
    return (
        <div  className={css.Header}>
            <div>MoviAPP</div>
            <div>
                <NavLink to={'/movies'}>Homepage</NavLink>
                <NavLink to={'/search'}>Search</NavLink>
                <NavLink to={'/genres'}>Genres</NavLink>
            </div>
        </div>
    );
};

export {Header};