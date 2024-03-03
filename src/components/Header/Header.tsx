import {NavLink} from "react-router-dom";

import searchIcon from '../images/colourSearch.png'
import appLogo from '../images/appLogo.png'
import css from './Header.module.css';
import moon from '../images/moon.png'
import sun from '../images/sun.png'
import {useAppContext} from "../../hook";
const Header = () => {
    const{theme,setTheme}=useAppContext()
    const themeChange=()=>{
        setTheme(prevState => !prevState)
    }
    return (
        <div  className={css.Header}>
            <div><img src={appLogo} alt="" className={css.Logo}/></div>
            <div className={css.NavContainer}>
                <div className={css.ThemeSwitcher} onClick={themeChange}><img src={theme?sun:moon} alt=""/>{theme?'Light':'Dark'}</div>
                <NavLink to={'/movies'} className={css.CentreBtn}>Homepage</NavLink>
                <NavLink to={'/genres'} className={css.CentreBtn}>Genres</NavLink>
                <NavLink to={'/search'} className={css.RightBtn}><img src={searchIcon} alt="Search" style={{height:'6vh'}}/></NavLink>
            </div>
        </div>
    );
};

export {Header};