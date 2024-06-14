import React from 'react';
import VerticalNavbar from '../../components/dashboard/VerticalNavbar';

const Dashboard = () => {
  return (
    <>
      <div className='dashboard p-5'>
        <div className="cards grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="card p-5 border-2 border-border shadow-sm bg-section flex flex-col gap-4 col-span-1">
            <div className="card-header flex justify-between items-center text-text-1">
              <p>فرح ام احمد</p>
              <p className='cursor-pointer'>الاعدادات</p>
            </div>
            <div className="card-body grid grid-cols-3 gap-2 text-sm">
              <div className='col-span-1 text-center bg-green-100 py-6 border-green-200 border-2 '>
                <p>5</p>
                <p>تاكيد</p>
              </div>
              <div className='col-span-1 text-center bg-yellow-100 py-6 border-yellow-200 border-2'>
                <p>0</p>
                <p>الممسوحة ضوئيا</p>
              </div>
              <div className='col-span-1 text-center bg-blue-100 py-6 border-blue-200 border-2'>
                <p>0</p>
                <p>عدد المدعوين</p>
              </div>
              <div className='col-span-1 text-center bg-red-100 py-6 border-red-200 border-2'>
                <p>1</p>
                <p>اعتذار</p>
              </div>
              <div className='col-span-1 text-center bg-gray-100 py-6 border-gray-200 border-2'>
                <p>0</p>
                <p>لم يتم إرسال الدعوة بعد</p>
              </div>
              <div className='col-span-1 text-center bg-fuchsia-100 py-6 border-fuchsia-200 border-2'>
                <p>2</p>
                <p>تجاهل</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
