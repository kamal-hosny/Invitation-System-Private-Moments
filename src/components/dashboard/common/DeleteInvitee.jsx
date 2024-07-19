import React, { useCallback, useContext } from 'react'
import { AllStateContext } from '../../../context/AllStateContext';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteInvite } from '../../../store/invitees/act/actDeleteInvitees';
import { getAllInvitees } from '../../../store/invitees/act/actGetAllPartyInvitees';

const DeleteInvitee = () => {
  const dispatch = useDispatch()

  const { deleteInviteesDialog, setDeleteInviteesDialog, inviteID }  = useContext(AllStateContext);

  const removeCategory = useCallback(() => {
    dispatch(deleteInvite(inviteID)).then(() => {
        dispatch(getAllInvitees());
        
    });
    setDeleteInviteesDialog(false);
}, [dispatch, inviteID, setDeleteInviteesDialog]);

  return (
    <>
    {deleteInviteesDialog && (
        <div
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
            className="fixed h-full w-full z-[15]"
            onClick={() => {
              setDeleteInviteesDialog(false);
            }}
        ></div>
    )}
    {deleteInviteesDialog && (
        <div className="fixed flex flex-col border-2 border-border top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[16] justify-center items-center bg-section rounded-lg w-80">
            <div className="logoutDialog-head border-b-2 border-border w-full p-5 text-lg flex justify-center text-text-1">
                هل أنت متاكد من حذف المناسبة
            </div>
            <div className="logoutDialog-footer w-full flex justify-start gap-2 p-3">
            
                <button
                    className="bg-[#dc3545] text-white px-3 py-1.5 rounded-sm"
                    onClick={removeCategory}
                >
                    تأكيد
                </button>
                <button
                    className="bg-gray-500 text-white px-3 py-1.5 rounded-sm"
                    onClick={() => {
                      setDeleteInviteesDialog(false);
                    }}
                >
                    إلغاء
                </button>
            </div>
        </div>
    )}
    </>
  )
}

export default DeleteInvitee