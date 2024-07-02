import CloseIcon from '@mui/icons-material/Close';
import CreateIcon from '@mui/icons-material/Create';
import GridViewIcon from '@mui/icons-material/GridView';
import GroupsIcon from '@mui/icons-material/Groups';
import HistoryIcon from '@mui/icons-material/History';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AllStateContext } from '../../context/AllStateContext';

const VerticalNavbar = () => {
    const { mobileSize, openMenu, changeMenuValue, setLogoutDialog , setCategoryDialog, setTypeCategoryDialog } = useContext(AllStateContext);

    return (
        <header className={`${openMenu ? "fixed right-0 top-0 z-10 flex" : mobileSize ? "hidden" : "flex"} flex-col gap-10 w-[300px] md: h-screen bg-navbar-bg p-5 text-text-2-navbar`}>
            <div className='flex items-center justify-between'>
                <div className="logo flex items-center gap-2">
                    <div className="image w-12 h-12">
                        <img className='w-12 h-12' src="https://i.ibb.co/jz1tS6k/Whats-App-Image-2024-06-10-at-00-00-30-4670a87f-modified-2.png" alt="logo" />
                    </div>
                    <Link to={"/system/administrator/dashboard"} className='font-semibold text-white'>صفحه الادمن</Link>
                </div>
                <div>
                    {mobileSize && (
                        <div className="menu cursor-pointer" onClick={changeMenuValue}>
                            {openMenu ? <CloseIcon fontSize='large' sx={{ color: "#dbe3ef" }} /> : <MenuIcon fontSize='large' sx={{ color: "#dbe3ef" }} />}
                        </div>
                    )}
                </div>
            </div>
            <nav className="flex flex-col gap-5">
                <ul>
                    <p className='px-3 py-1 text-text-1-navbar text-sm'>الاحصائيات</p>
                    <li><Link to="/system/administrator/dashboard" className='flex items-center gap-2 p-3 transition-all hover:bg-navbar-hover hover:text-text-1-navbar'><GridViewIcon /><span>الاحصائيات العامه</span></Link></li>
                    <li><Link to="/system/administrator/history" className='flex items-center gap-2 p-3 transition-all hover:bg-navbar-hover hover:text-text-1-navbar'><HistoryIcon /><span>السجل</span></Link></li>
                </ul>
                <ul>
                    <p className='px-3 py-1 text-text-1-navbar text-sm'>ادارة المناسبات</p>
                    <li><Link to="system/administrator/category/1" className='flex items-center gap-2 p-3 transition-all hover:bg-navbar-hover hover:text-text-1-navbar'><GroupsIcon /><span>ادارة المناسبه 1</span></Link></li>
                    <li><Link to="system/administrator/category/2" className='flex items-center gap-2 p-3 transition-all hover:bg-navbar-hover hover:text-text-1-navbar'><GroupsIcon /><span>ادارة المناسبه 2</span></Link></li>
                    <li><Link to="system/administrator/category/3" className='flex items-center gap-2 p-3 transition-all hover:bg-navbar-hover hover:text-text-1-navbar'><GroupsIcon /> <span>ادارة المناسبه 3</span></Link></li>
                    <li className='justify-self-end'><button  onClick={() => { setCategoryDialog(true); setTypeCategoryDialog("create"); }}  className='flex cursor-pointer items-center gap-2 p-3 transition-all hover:bg-navbar-hover hover:text-text-1-navbar'><CreateIcon /><span>إنشاء مناسبه</span></button></li>
                </ul>
                <ul>
                    <p className='px-3 py-1 text-text-1-navbar text-sm'>أخرى</p>
                    <li className='justify-self-end'><button onClick={() => setLogoutDialog(true)} className='flex items-center gap-2 p-3 transition-all hover:bg-navbar-hover hover:text-text-1-navbar'><LogoutIcon /><span>تسجيل الخروج</span></button></li>
                </ul>
            </nav>
            <div className='flex flex-col'>
            </div>
        </header>
    );
};

export default VerticalNavbar;
