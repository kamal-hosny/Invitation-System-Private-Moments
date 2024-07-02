import React, { useContext } from 'react'
import { AllStateContext } from '../../../context/AllStateContext'

const LogoutDialog = () => {
    const { logoutDialog, setLogoutDialog } = useContext(AllStateContext)
  return (
    <>
    {logoutDialog && (<div
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
                    className="fixed h-full w-full z-[15]"
                    onClick={()=>{setLogoutDialog(false)}}
    ></div>)}
    {logoutDialog && (<div
           className='fixed flex flex-col  border-2 border-border top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[16] justify-center items-center bg-section  rounded-lg w-80'        
    >
        <div className="logoutDialog-head border-b-2 border-border w-full p-5 text-lg flex justify-center text-text-1">
        تأكيد تسجيل الخروج
        </div>
        <div className="logoutDialog-footer w-full flex justify-start gap-2 p-3">
          <button className='bg-[#dc3545] text-white px-3 py-1.5 rounded-sm' onClick={()=>{setLogoutDialog(false)}}>تأكيد</button>
          <button className='bg-gray-500 text-white px-3 py-1.5 rounded-sm' onClick={()=>{setLogoutDialog(false)}}>إلغاء</button>
        </div>
    </div>)}
    
    
    </>
                
  )
}

export default LogoutDialog