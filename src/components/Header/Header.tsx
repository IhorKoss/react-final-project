import {NavLink} from "react-router-dom";

import searchIcon from '../images/colourSearch.png'
import whiteSearchIcon from '../images/whiteSearch.png'
import appLogo from '../images/appLogo.png'
import css from './Header.module.css';
import dark from './HeaderDark.module.css'
import moon from '../images/moon.png'
import sun from '../images/sun.png'
import darkAcc from '../images/colourAcc.png'
import lightAcc from '../images/whiteAcc.png'
import {useAppDispatch, useAppSelector} from "../../hook";
import {themeActions} from "../../store";
const Header = () => {
    const{theme}=useAppSelector(state => state.theme)
    const dispatch=useAppDispatch();
    const themeChange=()=>{
        dispatch(themeActions.changeTheme())
    }
    return (
        <div  className={theme?css.Header:dark.Header}>
            <div className={css.imgContainer}>
                <img src={appLogo} alt="" className={css.Logo}/><img src={theme?lightAcc:darkAcc} alt="" className={css.Acc}/></div>
            <div className={theme?css.NavContainer:dark.NavContainer}>
                <div className={theme?css.ThemeSwitcher:dark.ThemeSwitcher} onClick={themeChange}><img src={theme?sun:moon} alt=""/>{theme?'Light':'Dark'}</div>
                <NavLink to={'/movies'} className={theme?css.CentreBtn:dark.CentreBtn}>Home</NavLink>
                <NavLink to={'/genres'} className={theme?css.CentreBtn:dark.CentreBtn}>Genres</NavLink>
                <NavLink to={'/search'} className={theme?css.RightBtn:dark.RightBtn}><img src={theme?searchIcon:whiteSearchIcon} alt="Search" style={{height:'6vh'}}/></NavLink>
            </div>
        </div>
    );
};

export {Header};