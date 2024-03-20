import {NavLink} from "react-router-dom";

import searchIcon from '../images/colourSearch.png'
import whiteSearchIcon from '../images/whiteSearch.png'
import appLogo from '../images/appLogo.png'
import css from './Header.module.css';
import dark from './HeaderDark.module.css'
import moon from '../images/moon.png'
import sun from '../images/sun.png'
import {useAppContext} from "../../hook";
const Header = () => {
    const{theme,setTheme}=useAppContext()
    const themeChange=()=>{
        setTheme(prevState => !prevState)
    }
    return (
        <div  className={theme?css.Header:dark.Header}>
            <div><img src={appLogo} alt="" className={css.Logo}/></div>
            <div className={css.NavContainer}>
                <div className={theme?css.ThemeSwitcher:dark.ThemeSwitcher} onClick={themeChange}><img src={theme?sun:moon} alt=""/>{theme?'Light':'Dark'}</div>
                <NavLink to={'/movies'} className={theme?css.CentreBtn:dark.CentreBtn}>Homepage</NavLink>
                <NavLink to={'/genres'} className={theme?css.CentreBtn:dark.CentreBtn}>Gennres</NavLink>
                <NavLink to={'/search'} className={theme?css.RightBtn:dark.RightBtn}><img src={theme?searchIcon:whiteSearchIcon} alt="Search" style={{height:'6vh'}}/></NavLink>
            </div>
        </div>
    );
};

export {Header};