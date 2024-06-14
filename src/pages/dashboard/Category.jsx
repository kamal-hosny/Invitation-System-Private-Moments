import React, { useContext } from 'react';
import SettingsIcon from '@mui/icons-material/Settings';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import { AllStateContext } from '../../context/AllStateContext';

const Category = () => {
  const { setTypeCategoryDialog, setCategoryDialog, setInviteeDialog, setTypeInviteeDialog } = useContext(AllStateContext);

  return (
    <div className='category p-5 flex flex-col gap-4'>
      <div className="category-data bg-section p-5 border-border border-2">
        <div className='flex items-start justify-between text-text-1'>
          <p className='text-lg font-medium pb-5'>فرح ام احمد</p>
          <button onClick={() => {
            setTypeCategoryDialog("edit");
            setCategoryDialog(true);
          }} className="edit-category cursor-pointer transition-all hover:text-text-2">
            <SettingsIcon />
          </button>
        </div>
        <div className="info text-text-2 flex flex-col gap-1">
          <div><span>اسم القاعة: </span> <span>الاسم</span></div>
          <div><span>عنوان القاعة: </span> <span>العنوان</span></div>
          <div><span>تاريخ المناسبة: </span><span>التاريخ</span></div>
          <div><span>موعد المناسبة: </span><span>الموعد</span></div>
          <div><span>اسم العريس: </span><span>العريس</span></div>
          <div><span>اسم العروس: </span><span>العروس</span></div>
          <div><span>الوقت المتبقي للبدء: </span><span>الوقت</span></div>
        </div>
      </div>
      
      <div className="invitees bg-section p-5 border-border border-2 flex flex-col gap-4">
        <div className="invitees-head flex justify-between items-center text-text-1">
          <p className='text-lg font-medium'>المدعوين</p>
          <button className='bg-primary rounded' onClick={() => { setInviteeDialog(true); setTypeInviteeDialog("create"); }}>
            <div className="icon-invitees">
              <PersonAddAlt1Icon />
            </div>
          </button>
        </div>
        <div className="invitees-body-wrapper" style={{ maxHeight: '300px', overflowY: 'auto' }}>
          <table className='invitees-body border-collapse border border-border w-full text-center'>
            <thead className='bg-main text-white'>
              <tr>
                <th className='border border-border p-2'>العدد</th>
                <th className='border border-border p-2'>الاسم</th>
                <th className='border border-border p-2'>رقم الهاتف</th>
                <th className='border border-border p-2'>الايميل</th>
                <th className='border border-border p-2'>العنوان</th>
                <th className='border border-border p-2'>العمر</th>
                <th className='border border-border p-2'>الموافقة علي الدعوة؟</th>
                <th className='border border-border p-2'>تم ارسال الدعوة أم لا</th>
                <th className='border border-border p-2'>حالة الدعوة</th>
                <th className='border border-border p-2'>ارسال الدعوة</th>
                <th className='border border-border p-2'>تعديل</th>
              </tr>
            </thead>
            <tbody className='text-text-1'>
              <tr>
                <td className='border border-border p-2'>1</td>
                <td className='border border-border p-2'>احمد</td>
                <td className='border border-border p-2'>0123456789</td>
                <td className='border border-border p-2'>ahmed@example.com</td>
                <td className='border border-border p-2'>القاهرة</td>
                <td className='border border-border p-2'>30</td>
                <td className='border border-border p-2'><span className='bg-green-200 py-[2px] px-4 rounded-2xl text-green-600'>نعم</span></td>
                <td className='border border-border p-2'><span className='bg-red-200 py-[2px] px-4 rounded-2xl text-red-600'>لا</span></td>
                <td className='border border-border p-2'><span className='bg-gray-200 py-[2px] px-4 rounded-2xl text-gray-600'>-</span></td>
                <td className='border border-border p-2'><button className='bg-blue-500 text-white py-1 px-3 rounded'>Send</button></td>
                <td className='border border-border p-2'><div className="td-icon cursor-pointer" onClick={() => { setInviteeDialog(true); setTypeInviteeDialog('edit'); }}><ManageAccountsIcon /></div></td>
              </tr>
              <tr>
                <td className='border border-border p-2'>2</td>
                <td className='border border-border p-2'>علي</td>
                <td className='border border-border p-2'>0987654321</td>
                <td className='border border-border p-2'>ali@example.com</td>
                <td className='border border-border p-2'>الإسكندرية</td>
                <td className='border border-border p-2'>25</td>
                <td className='border border-border p-2'><span className='bg-green-200 py-[2px] px-4 rounded-2xl text-green-600'>نعم</span></td>
                <td className='border border-border p-2'><span className='bg-red-200 py-[2px] px-4 rounded-2xl text-red-600'>لا</span></td>
                <td className='border border-border p-2'><span className='bg-gray-200 py-[2px] px-4 rounded-2xl text-gray-600'>-</span></td>
                <td className='border border-border p-2'><button className='bg-blue-500 text-white py-1 px-3 rounded'>Send</button></td>
                <td className='border border-border p-2 '><div className="td-icon cursor-pointer" onClick={() => { setInviteeDialog(true); setTypeInviteeDialog('edit'); }}><ManageAccountsIcon /></div></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Category;
