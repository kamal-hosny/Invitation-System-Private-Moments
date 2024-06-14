import { createContext, useEffect, useState } from "react";

const AllStateContext = createContext({});

const AllStateProvider = ({ children }) => {
    const [openMenu, setOpenMenu] = useState(false);
    const [mobileSize, setMobileSize] = useState(window.innerWidth < 768);

    const [logoutDialog, setLogoutDialog] = useState(false);
    
    const [categoryDialog, setCategoryDialog] = useState(false);
    const [typeCategoryDialog, setTypeCategoryDialog] = useState(null);

    const [inviteeDialog, setInviteeDialog] = useState(false);
    const [typeInviteeDialog, setTypeInviteeDialog] = useState(null);

    console.log(inviteeDialog, typeInviteeDialog)

    useEffect(() => {
        const handleResize = () => {
            setMobileSize(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const changeMenuValue = () => {
        setOpenMenu((prevState) => !prevState);
    };

    return (
        <AllStateContext.Provider 
            value={{ 
                openMenu, 
                changeMenuValue, 
                mobileSize, 
                logoutDialog, 
                setLogoutDialog, 
                categoryDialog, 
                setCategoryDialog, 
                typeCategoryDialog, 
                setTypeCategoryDialog,
                inviteeDialog,
                setInviteeDialog,
                typeInviteeDialog,
                setTypeInviteeDialog
            }}
        >
            {children}
        </AllStateContext.Provider>
    );
};

export { AllStateContext, AllStateProvider };
