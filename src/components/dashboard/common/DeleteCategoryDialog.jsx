import React, { useCallback, useContext } from "react";
import { AllStateContext } from "../../../context/AllStateContext";
import { deleteParty } from "../../../store/party/act/actDeleteParty";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getAllParty } from '../../../store/party/act/actGetAllParty';

const DeleteCategoryDialog = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { id } = useParams();
    const { deleteCategoryDialog, setDeleteCategoryDialog } = useContext(AllStateContext);

    const removeCategory = useCallback(() => {
        dispatch(deleteParty(id)).then(() => {
            dispatch(getAllParty());
            navigate("/system/administrator/dashboard")
        });
        setDeleteCategoryDialog(false);
    }, [dispatch, id, setDeleteCategoryDialog]);

    return (
        <>
            {deleteCategoryDialog && (
                <div
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
                    className="fixed h-full w-full z-[15]"
                    onClick={() => {
                        setDeleteCategoryDialog(false);
                    }}
                ></div>
            )}
            {deleteCategoryDialog && (
                <div className="fixed flex flex-col border-2 border-border top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[16] justify-center items-center bg-section rounded-lg w-80">
                    <div className="logoutDialog-head border-b-2 border-border w-full p-5 text-lg flex justify-center text-text-1">
                        هل أنت متاكد من حذف المدعو إليه
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
                                setDeleteCategoryDialog(false);
                            }}
                        >
                            إلغاء
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default DeleteCategoryDialog;
