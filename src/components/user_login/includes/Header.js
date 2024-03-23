import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../../includes/GlobalState";

import ImageBarsSidebar from '../../../assets/images/svg/bars-navbar-outlined.svg'
import ImageHouse from '../.../../../../assets/images/svg/menu_sidebar/house_light.svg'
import ImageBookBible from '../.../../../../assets/images/svg/menu_sidebar/book-bible_light.svg'
import ImageHouseLove from '../.../../../../assets/images/svg/menu_sidebar/house-chimney-heart_light.svg'
import ImageUserGroup from '../.../../../../assets/images/svg/menu_sidebar/user-group_light.svg'
import ImageGear from '../.../../../../assets/images/svg/menu_sidebar/gear_light.svg'
import ImageQuestion from '../.../../../../assets/images/svg/menu_sidebar/circle-question_light.svg'
import ImageBracketLogout from '../.../../../../assets/images/svg/menu_sidebar/arrow-right-from-bracket_light.svg'
import ImageUserIcon from '../.../../../../assets/images/svg/user-icon.svg'
import ImageLogoLD from '../../../assets/images/svg/logo-ld.svg'


const Header = (props) => 
{
    const { title, menuSelected } = props
    const [showSidebar, setShowSidebar] = useState(false)
    const [stateGlobal] = useContext(Context)

    const onClickShowSidebar = (e) =>
    {
        e.preventDefault()
        setShowSidebar(!showSidebar)
    }

    const path_user = stateGlobal.path_user_login

	return (
		<>
            {/* Navbar */}
			<nav className="navbar-ld">
                <div className="content-title">
                    <div className="d-flex align-items-center">
                        <div className="d-block d-lg-none">
                            <a href="#sidebar" onClick={(e) => onClickShowSidebar(e)} className="me-4 open-sidebar"><img src={ImageBarsSidebar} className="btn-show-sidebar" alt="Show - Hide Sidebar" /></a>
                        </div>

                        <div className="flex-grow-1">
                            <h3>{title}</h3>
                        </div>

                        <div className="profile-img">
                            <Link to={path_user + ('/profil')}><img src={ImageUserIcon} alt="User Profile" /></Link>
                        </div>
                    </div>

                </div>
            </nav>


            {/* Sidebar */}
            <div className={"sidebar-left" + (showSidebar ? ' show' : '')}>
                <div className="logo">
                    <Link to={path_user + ('/beranda')}>
                        <img src={ImageLogoLD} alt="Logo LD" className="ld me-2" />
                        Lectio Divina
                    </Link>
                </div>

                <div className="menu-sidebar">

                    <div className="user-detail mb-4">
                        <div className="d-flex align-items-center">
                            <img src={ImageUserIcon} alt="User Icon" className="img-user me-3" />

                            <div className="flex-grow-1">
                                <div className="name">
                                    <b>Nama Pengguna</b><br/>
                                </div>
                                <Link to={path_user + ('/profil')}>Lihat Profil</Link>
                            </div>
                        </div>
                    </div>

                    <div className="mb-3">
                        <Link to={path_user + ('/beranda')} onClick={() => setShowSidebar(!showSidebar)}
                        className={menuSelected === 'dasbor' ? 'active' : ''}>
                            <img src={ImageHouse} alt="Beranda" className="icon beranda" /> Beranda
                        </Link>
                    </div>

                    <hr/>

                    <div className="mb-3">
                        <Link to={path_user + ('/alkitab')} onClick={() => setShowSidebar(!showSidebar)}
                        className={menuSelected === 'alkitab' ? 'active' : ''}>
                            <img src={ImageBookBible} alt="Alkitab" className="icon alkitab" /> Alkitab
                        </Link>

                        <Link to={path_user + ('/my-ld')} onClick={() => setShowSidebar(!showSidebar)}
                        className={menuSelected === 'my-ld' ? 'active' : ''}>
                            <img src={ImageHouseLove} alt="My Ld" className="icon my-ld" /> My LD
                        </Link>

                        <Link to={path_user + ('/komunitas')} onClick={() => setShowSidebar(!showSidebar)} 
                        className={menuSelected === 'komunitas' ? 'active' : ''}>
                            <img src={ImageUserGroup} alt="Komunitas" className="icon komunitas" /> Komunitas
                        </Link>
                    </div>

                    <hr/>

                    <div className="mb-3">
                        <Link to={path_user + ('/pengaturan')} onClick={() => setShowSidebar(!showSidebar)}
                        className={menuSelected === 'pengaturan' ? 'active' : ''}>
                            <img src={ImageGear} alt="Pengaturan" className="icon pengaturan" /> Pengaturan
                        </Link>

                        <Link to={path_user + ('/faq')} onClick={() => setShowSidebar(!showSidebar)}
                        className={menuSelected === 'faq' ? 'active' : ''}>
                            <img src={ImageQuestion} alt="Pengaturan" className="icon faq" /> FAQ
                        </Link>
                    </div>

                </div>

                <div className="py-4 px-3">
                    <div className="d-grid">
                        <button className="btn btn-primary btn-primary-ld btn-logout">
                            <img src={ImageBracketLogout} alt="Keluar" className="icon me-2" /> Keluar
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
