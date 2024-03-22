import { useContext, useState } from "react";

import ImageBarsSidebar from '../../../assets/images/svg/bars-navbar-outlined.svg'
import ImageHouse from '../.../../../../assets/images/svg/menu_sidebar/house_light.svg'
import ImageBookBible from '../.../../../../assets/images/svg/menu_sidebar/book-bible_light.svg'
import ImageHouseLove from '../.../../../../assets/images/svg/menu_sidebar/house-chimney-heart_light.svg'
import ImageUserGroup from '../.../../../../assets/images/svg/menu_sidebar/user-group_light.svg'
import ImageGear from '../.../../../../assets/images/svg/menu_sidebar/gear_light.svg'
import ImageQuestion from '../.../../../../assets/images/svg/menu_sidebar/circle-question_light.svg'

import { Context } from "../../../includes/GlobalState";
import { Link } from "react-router-dom";


const Header = ({ title }) => 
{
    const [menuSelected, setMenuSelected] = useState('dasbor')
    const [showSidebar, setShowSidebar] = useState(false)
    const [stateGlobal] = useContext(Context)

    const onClickShowSidebar = (e) =>
    {
        e.preventDefault()
        setShowSidebar(!showSidebar)
    }

    const onMenuSelected = (value) =>
    {
        setMenuSelected(value)
        setShowSidebar(!showSidebar)
    }
    

	return (
		<>
            {/* Navbar */}
			<nav className="navbar-ld">
                <div className="content-title">
                    <div className="d-flex align-items-center">
                    <div className="d-block d-lg-none">
                        <a href="#sidebar" onClick={(e) => onClickShowSidebar(e)} className="me-4"><img src={ImageBarsSidebar} className="btn-show-sidebar" alt="Show - Hide Sidebar" /></a>
                    </div>
                        <h3>{title}</h3>
                    </div>

                </div>
            </nav>


            {/* Sidebar */}
            <div className={"sidebar-left" + (showSidebar ? ' show' : '')}>
                <div className="logo">
                    Lectio Divina
                </div>

                <div className="menu-sidebar">
                    <div className="mb-3">
                        <Link to={stateGlobal.path_user_login + ('/dasbor')} onClick={() => onMenuSelected('dasbor')}
                        className={menuSelected === 'dasbor' ? 'active' : ''}>
                            <img src={ImageHouse} alt="Beranda" className="icon beranda" /> Beranda
                        </Link>
                    </div>

                    <hr/>

                    <div className="mb-3">
                        <Link to={stateGlobal.path_user_login + ('/alkitab')} onClick={() => onMenuSelected('alkitab')}
                        className={menuSelected === 'alkitab' ? 'active' : ''}>
                            <img src={ImageBookBible} alt="Alkitab" className="icon alkitab" /> Alkitab
                        </Link>

                        <Link to={stateGlobal.path_user_login + ('/my-ld')} onClick={() => onMenuSelected('my-ld')}
                        className={menuSelected === 'my-ld' ? 'active' : ''}>
                            <img src={ImageHouseLove} alt="My Ld" className="icon my-ld" /> My LD
                        </Link>

                        <Link to={stateGlobal.path_user_login + ('/komunitas')} onClick={() => onMenuSelected('komunitas')} 
                        className={menuSelected === 'komunitas' ? 'active' : ''}>
                            <img src={ImageUserGroup} alt="Komunitas" className="icon komunitas" /> Komunitas
                        </Link>
                    </div>

                    <hr/>

                    <div className="mb-3">
                        <Link to={stateGlobal.path_user_login + ('/pengaturan')} onClick={() => onMenuSelected('pengaturan')}
                        className={menuSelected === 'pengaturan' ? 'active' : ''}>
                            <img src={ImageGear} alt="Pengaturan" className="icon pengaturan" /> Pengaturan
                        </Link>

                        <Link to={stateGlobal.path_user_login + ('/faq')} onClick={() => onMenuSelected('faq')}
                        className={menuSelected === 'faq' ? 'active' : ''}>
                            <img src={ImageQuestion} alt="Pengaturan" className="icon faq" /> FAQ
                        </Link>
                    </div>

                </div>

                <div className="py-4 px-3">
                    <div className="d-grid">
                        <button className="btn btn-primary btn-primary-ld">
                            Keluar
                        </button>
                    </div>
                </div>
            </div>

            {showSidebar ? (
                <div className="d-block d-lg-none">
                    <div className="backdrop-sidebar-show" onClick={(e) => onClickShowSidebar(e)}></div>
                </div>
            ) : ''}
            
		</>
	);
};

export default Header;
