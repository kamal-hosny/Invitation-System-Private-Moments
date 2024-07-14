import { createContext, useEffect, useMemo, useState } from "react";

const AllStateContext = createContext({});

const AllStateProvider = ({ children }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [mobileSize, setMobileSize] = useState(window.innerWidth < 768);

  const [logoutDialog, setLogoutDialog] = useState(false);

  // فتح و غلط نافذة المناسبة
  const [categoryDialog, setCategoryDialog] = useState(false);
  // تحديد نوع النافذة ( انشاء - تعديل )
  const [typeCategoryDialog, setTypeCategoryDialog] = useState(null);
  // حذف النافذة
  const [deleteCategoryDialog, setDeleteCategoryDialog] = useState(false);
  // نافذه حذف مدعو إليه
  const [deleteInviteesDialog, setDeleteInviteesDialog] = useState(false);
  //  ارسال id بتاع invite

  const [inviteeDialog, setInviteeDialog] = useState(false);
  const [typeInviteeDialog, setTypeInviteeDialog] = useState(null);
  const [inviteID, setInviteID] = useState(null);

  // console.log(inviteeDialog, typeInviteeDialog)

  useEffect(() => {
    const handleResize = () => {
      setMobileSize(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const changeMenuValue = () => {
    setOpenMenu((prevState) => !prevState);
  };

  const contextValue = useMemo(
    () => ({
      openMenu,
      changeMenuValue,
      mobileSize,
      logoutDialog,
      setLogoutDialog,
      categoryDialog,
      setCategoryDialog,
      typeCategoryDialog,
      setTypeCategoryDialog,
      deleteCategoryDialog,
      setDeleteCategoryDialog,
      inviteeDialog,
      setInviteeDialog,
      typeInviteeDialog,
      setTypeInviteeDialog,
      deleteInviteesDialog,
      setDeleteInviteesDialog,
      inviteID,
      setInviteID,
    }),
    [
      openMenu,
      mobileSize,
      logoutDialog,
      categoryDialog,
      typeCategoryDialog,
      deleteCategoryDialog,
      inviteeDialog,
      typeInviteeDialog,
      deleteInviteesDialog,
      inviteID,
    ]
  );

  return (
    <AllStateContext.Provider value={contextValue}>
      {children}
    </AllStateContext.Provider>
  );
};

export { AllStateContext, AllStateProvider };
