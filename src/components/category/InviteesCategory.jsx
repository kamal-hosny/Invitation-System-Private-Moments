import React, { useContext, useEffect } from 'react';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import { AllStateContext } from '../../context/AllStateContext';
import { useDispatch, useSelector } from 'react-redux';
import { getAllInvitees } from '../../store/invitees/act/actGetAllPartyInvitees';
import Loading from '../Loading';

const InviteesCategory = () => {
  const dispatch = useDispatch();
  const { loading, error, records } = useSelector((state) => state?.allInvitees) || {};
  const { data } = records || {};

  // console.log(records);

  useEffect(() => {
    dispatch(getAllInvitees());
  }, [dispatch]);
  const { setInviteeDialog, setTypeInviteeDialog, setInviteID } = useContext(AllStateContext);

  const formatTimestamp = (timestamp) => {
    const date = new Date(Number(timestamp));
    const options = {
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    };
    return date.toLocaleString('ar-EG', options);
  };

  return (
    <>
    {loading ? (
            <div className='flex items-center justify-center' style={{height: "calc(50vh - 60px)"}}>
            <Loading error={error} loading={loading} />
            </div>
    ) : (
      <div className="invitees bg-section w-auto p-5 border-border border-2 flex flex-col gap-4">
        <div className="invitees-head flex justify-between items-center text-text-1">
          <p className='text-lg font-medium'>المدعوين</p>
          <button 
            className='bg-primary rounded' 
            onClick={() => { 
              setInviteeDialog(true); 
              setTypeInviteeDialog("create"); 
            }}
            aria-label="Add Invitee"
          >
            <div className="icon-invitees">
              <PersonAddAlt1Icon />
            </div>
          </button>
        </div>
        <div className="invitees-body-wrapper overflow-x-scroll">
          <table className='invitees-body border-collapse border border-border w-full text-center'>
            {data && data.length > 0 && (
              <thead className='bg-main text-white'>
                <tr>
                  <th className='border border-border p-2'>العدد</th>
                  <th className='border border-border p-2'>الاسم</th>
                  <th className='border border-border p-2'>رقم الهاتف</th>
                  <th className='border border-border p-2'>الايميل</th>
                  <th className='border border-border p-2'>العنوان</th>
                  <th className='border border-border p-2'>العمر</th>
                  <th className='border border-border p-2'>وقت الحضور</th>
                  <th className='border border-border p-2'>الموافقة علي الدعوة؟</th>
                  <th className='border border-border p-2'>حالة الدعوة</th>
                  <th className='border border-border p-2'>ارسال الدعوة</th>
                  <th className='border border-border p-2'>تعديل</th>
                </tr>
              </thead>
            )}
            <tbody className='text-text-1'>
              {data && data.length > 0 ? (
                [...data].reverse().map((x, index) => (
                  <tr key={x._id}>
                    <td className='border border-border p-2'>{index + 1}</td>
                    <td className='border border-border p-2'>{x.name}</td>
                    <td className='border border-border p-2'>{x.phone}</td>
                    <td className='border border-border p-2'>{x.email}</td>
                    <td className='border border-border p-2'>{x.address}</td>
                    <td className='border border-border p-2'>{x.age}</td>
                    <td className='border border-border p-2'>{formatTimestamp(x.time)}</td>
                    <td className='border border-border p-2'>
                      <span className='bg-red-200 py-[2px] px-4 rounded-2xl text-red-600'>لا</span>
                    </td>
                    <td className='border border-border p-2'>
                      <span className='bg-gray-200 py-[2px] px-4 rounded-2xl text-gray-600'>-</span>
                    </td>
                    <td className='border border-border p-2'>
                      <button className='bg-blue-500 text-white py-1 px-3 rounded'>Send</button>
                    </td>
                    <td className='border border-border p-2'>
                      <div 
                        className="td-icon cursor-pointer" 
                        onClick={() => { 
                          setInviteeDialog(true); 
                          setTypeInviteeDialog('edit'); 
                          setInviteID(x._id); 
                        }}
                        aria-label="Edit Invitee"
                      >
                        <ManageAccountsIcon />
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                !loading && (
                  <tr>
                    <td colSpan="11" className='border border-border p-2'>
                      لا يوجد مدعوين
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </div>
    )}
      
    </>
  );
}

export default InviteesCategory;
