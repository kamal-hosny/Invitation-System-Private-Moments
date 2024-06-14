import React, { useContext } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { AllStateContext } from '../../context/AllStateContext';
import DarkMode from './DarkMode';

const HorizontalNavbar = () => {
    const { openMenu, changeMenuValue, mobileSize, setLogoutDialog } = useContext(AllStateContext);

    return (
        <div className='flex justify-between flex-row-reverse bg-section w-full items-center shadow-sm h-20 py-4 px-6'>

            <div className="account flex flex-row-reverse items-center gap-4">
                <div className="icon overflow-hidden w-10 h-10 rounded-full cursor-pointer" onClick={() => setLogoutDialog(true)}>
                    <img className='w-10 h-10' src="/src/assets/default-user-icon.jpeg" alt="User Icon" />
                </div>
            </div>

            <div className='flex items-center gap-6'>
                {mobileSize && (
                    <div className="menu cursor-pointer" onClick={changeMenuValue}>
                        {openMenu ? <CloseIcon fontSize='large' sx={{ color: "var(--color-text-1-css)" }} /> : <MenuIcon fontSize='large' sx={{ color: "var(--color-text-1-css)" }} />}
                    </div>
                )}

                <DarkMode />
            </div>
        </div>
    );
};

export default HorizontalNavbar;
