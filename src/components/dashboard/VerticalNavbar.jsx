import React, { useContext, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllParty } from '../../store/party/act/actGetAllParty';
import { AllStateContext } from '../../context/AllStateContext';
import CloseIcon from '@mui/icons-material/Close';
import CreateIcon from '@mui/icons-material/Create';
import GridViewIcon from '@mui/icons-material/GridView';
import GroupsIcon from '@mui/icons-material/Groups';
import HistoryIcon from '@mui/icons-material/History';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import { Helmet } from 'react-helmet-async';

const VerticalNavbar = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.allParty?.records?.data);

    useEffect(() => {
        dispatch(getAllParty());
    }, [dispatch]);

    const { mobileSize, openMenu, changeMenuValue, setLogoutDialog, setCategoryDialog, setTypeCategoryDialog } = useContext(AllStateContext);

    return (
        <>
            <Helmet>
                <style type="text/css">{`
                .v-nav .active{
                    background-color: var(--main-navber-hover-css);
                }
                `}
                </style>
            </Helmet>

            <header className={`${openMenu ? "fixed right-0 top-0 z-10 flex h-full" : mobileSize ? "hidden" : "flex relative"} v-nav  flex-col gap-10 w-[300px]  bg-navbar-bg p-5 text-text-2-navbar`}>
                <span className='absolute w-full -z-10 bg-navbar-bg top-0 left-0 h-screen'></span>
                <div className='flex items-center justify-between'>
                    <div className="logo flex items-center gap-2">
                        <div className="image w-12 h-12">
                            <img className='w-12 h-12' src="/assets/logo/logo.png" alt="logo" />
                        </div>
                        <Link to={"/system/administrator/dashboard"} className='font-semibold text-white'>صفحه الادمن</Link>
                    </div>
                    {mobileSize && (
                        <div className="menu cursor-pointer" onClick={changeMenuValue}>
                            {openMenu ? <CloseIcon fontSize='large' sx={{ color: "#dbe3ef" }} /> : <MenuIcon fontSize='large' sx={{ color: "#dbe3ef" }} />}
                        </div>
                    )}
                </div>
                <nav className="flex flex-col gap-5">
                    <ul>
                        <p className='px-3 py-1 text-text-1-navbar text-sm'>الاحصائيات</p>
                        <li><NavLink to="/system/administrator/dashboard" className='flex items-center gap-2 p-3 transition-all hover:bg-navbar-hover hover:text-text-1-navbar'><GridViewIcon /><span>الاحصائيات العامه</span></NavLink></li>
                        <li><NavLink to="/system/administrator/history" className='flex items-center gap-2 p-3 transition-all hover:bg-navbar-hover hover:text-text-1-navbar'><HistoryIcon /><span>السجل</span></NavLink></li>
                    </ul>
                    <ul>
                        <p className='px-3 py-1 text-text-1-navbar text-sm'>ادارة المناسبات</p>
                        {data && data.map((record) => (
                            <li key={record._id}>
                                <NavLink to={`/system/administrator/category/${record._id}`} className='flex items-center gap-2 p-3 transition-all hover:bg-navbar-hover hover:text-text-1-navbar w-full'>
                                    <GroupsIcon /><span className='truncate'>{record.title}</span>
                                </NavLink>
                            </li>
                        ))}
                        <li><button onClick={() => { setCategoryDialog(true); setTypeCategoryDialog("create"); }} className='flex cursor-pointer items-center gap-2 p-3 transition-all hover:bg-navbar-hover hover:text-text-1-navbar w-full'><CreateIcon /><span>إنشاء مناسبه</span></button></li>
                    </ul>
                    <ul>
                        <p className='px-3 py-1 text-text-1-navbar text-sm'>أخرى</p>
                        <li><button onClick={() => setLogoutDialog(true)} className='flex items-center gap-2 p-3 transition-all hover:bg-navbar-hover hover:text-text-1-navbar w-full'><LogoutIcon /><span>تسجيل الخروج</span></button></li>
                    </ul>
                </nav>
            </header>
        </>
    );
};

export default VerticalNavbar;
