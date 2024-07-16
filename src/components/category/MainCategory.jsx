import React, { useContext, useEffect } from 'react';
import SettingsIcon from '@mui/icons-material/Settings';
import DeleteIcon from '@mui/icons-material/Delete';
import { AllStateContext } from '../../context/AllStateContext';
import { getOneParty } from '../../store/party/act/actGetOneParty';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../Loading';

const MainCategory = ({ id }) => {
    const dispatch = useDispatch();
    const { setTypeCategoryDialog, setCategoryDialog, setDeleteCategoryDialog } = useContext(AllStateContext);

    // const data = useSelector((state) => state?.allParty?.record?.data?.[0]);
    const {loading, error, record} = useSelector((state) => state?.allParty);
    const data = record?.data[0] 

    useEffect(() => {
        dispatch(getOneParty(id));
    }, [dispatch, id]);

    return (
        <>
        {loading ? (
            <div className='flex items-center justify-center' style={{height: "calc(50vh - 60px)"}}>
            <Loading error={error} loading={loading} />
            </div>
        ) : (
            <>
             <div className="category-data bg-section p-5 border-border border-2">
            <div className='flex items-start justify-between text-text-1'>
                <p className='text-lg font-medium pb-5'>{data?.title || 'فرح ام احمد'}</p>
                <div className='flex gap-4 items-center'>
                    <button
                        onClick={() => {
                            setTypeCategoryDialog("edit");
                            setCategoryDialog(true);
                        }}
                        className="edit-category cursor-pointer transition-all hover:text-text-2"
                    >
                        <SettingsIcon />
                    </button>
                    <button
                        onClick={() => {
                            setDeleteCategoryDialog(true);
                        }}
                        className="delete-category cursor-pointer transition-all hover:text-text-2"
                    >
                        <DeleteIcon />
                    </button>
                </div>
            </div>

            <div className="info text-text-2 flex flex-col gap-1">
                <div><span>اسم القاعة: </span> <span>{data?.name || 'الاسم'}</span></div>
                <div><span>عنوان القاعة: </span> <span>{data?.place || 'العنوان'}</span></div>
                <div><span>تاريخ المناسبة: </span><span>{data?.date || 'التاريخ'}</span></div>
                <div><span>موعد المناسبة: </span><span>{data?.eventTime || 'الموعد'}</span></div>
                <div><span>اسم العريس: </span><span>{data?.Groom_name || 'العريس'}</span></div>
                <div><span>اسم العروس: </span><span>{data?.Bride_name || 'العروس'}</span></div>
                <div><span>الوقت المتبقي للبدء: </span><span>{data?.remainingTime || 'الوقت'}</span></div>
                <div className='self-end'><span>{data?.remainingTime || 'الوقت'}</span>:<span>created by</span></div>
                
            </div>
        </div>
            </>
        )}
       
        </>
    );
}

export default MainCategory;
