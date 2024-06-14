import React from 'react';

const History = () => {
  return (
    <div className='history p-5 flex flex-col gap-4'>
      <div className="invitees bg-section p-5 border-border border-2 flex flex-col gap-4">
        <div className="invitees-head flex justify-between items-center text-text-1">
          <p className='text-lg font-medium'>السجل</p>
        </div>
        <div className="invitees-body-wrapper" style={{ maxHeight: '300px', overflowY: 'auto' }}>
          <table className='invitees-body border-collapse border border-border w-full text-center'>
            <thead className='bg-main text-white'>
              <tr>
                <th className='border border-border p-2'>العدد</th>
                <th className='border border-border p-2'>اسم المناسبة</th>
                <th className='border border-border p-2'>اسم القاعة</th>
                <th className='border border-border p-2'>نوع المناسبة</th>
                <th className='border border-border p-2'>تاريخ المناسبة</th>
                <th className='border border-border p-2'>العنوان</th>
                <th className='border border-border p-2'>الوقت</th>
                <th className='border border-border p-2'>مشاهدة التفاصيل</th>
              </tr>
            </thead>
            <tbody className='text-text-1'>
              <tr>
                <td className='border border-border p-2'>1</td>
                <td className='border border-border p-2'>فرح ام احمد</td>
                <td className='border border-border p-2'>الزهراء</td>
                <td className='border border-border p-2'>فرح</td>
                <td className='border border-border p-2'>2024/8/12</td>
                <td className='border border-border p-2'>13 شارع</td>
                <td className='border border-border p-2'>منذ شهر</td>
                <td className='border border-border p-2'><button className='bg-blue-500 text-white py-1 px-3 rounded'>التفاصيل</button></td>
              </tr>
              <tr>
                <td className='border border-border p-2'>2</td>
                <td className='border border-border p-2'>علي</td>
                <td className='border border-border p-2'>الزهراء</td>
                <td className='border border-border p-2'>اجتماع</td>
                <td className='border border-border p-2'>2024/9/15</td>
                <td className='border border-border p-2'>21 شارع</td>
                <td className='border border-border p-2'>منذ أسبوع</td>
                <td className='border border-border p-2'><button className='bg-blue-500 text-white py-1 px-3 rounded'>التفاصيل</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default History;
