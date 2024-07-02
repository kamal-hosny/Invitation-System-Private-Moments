import React, { useContext, useState } from 'react';
import { AllStateContext } from '../../../context/AllStateContext';
import { useForm } from 'react-hook-form';
import { FormControl, MenuItem, Select } from '@mui/material';
import { styled } from '@mui/system';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';


const CustomSelect = styled(Select)(({ theme }) => ({
  '& .MuiSelect-select': {
    backgroundColor: 'white',
    padding: '10px',
  },
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: 'var(--color-border-css)',
    borderWidth: '2px',
    borderRadius: '0',
  },
  '&:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: 'var(--color-border-css)',
  },
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: 'var(--main-color-css)',
  },
}));

const CreateInvitee = () => {
  const { register, handleSubmit, setValue } = useForm();
  const onSubmit = (data) => console.log(data);

  const { inviteeDialog, setInviteeDialog, typeInviteeDialog } = useContext(AllStateContext);

  const [approvalStatus, setApprovalStatus] = useState('');
  const handleApprovalChange = (event) => {
    setApprovalStatus(event.target.value);
    setValue("approvalStatus", event.target.value); // Integrate with React Hook Form
  };

  const [invitationStatus, setInvitationStatus] = useState('');
  const handleInvitationChange = (event) => {
    setInvitationStatus(event.target.value);
    setValue("invitationStatus", event.target.value); // Integrate with React Hook Form
  };

  return (
    <>
      {inviteeDialog && (
        <>
          <div
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
            className="fixed h-full w-full z-[15]"
            onClick={() => { setInviteeDialog(false); }}
          ></div>

          <div className='fixed flex flex-col border-2 border-border top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[16] justify-center items-center bg-section rounded-lg w-96'>
            <div className="logoutDialog-head w-full p-5 text-lg flex justify-center text-text-1">
              {typeInviteeDialog === "create" ? "أضافه مدعو" : "التعديل علي المدعو"}
            </div>
            <div className="logoutDialog-body w-full flex justify-start gap-2 p-3 border-y-2 border-border">
              <form onSubmit={handleSubmit(onSubmit)} className='w-full grid grid-cols-2 gap-2'>
                <div className="flex flex-col gap-2 col-span-1">
                  <label className='text-text-2'>الاسم:</label>
                  <input type="text" {...register("name", { required: true })} className='border-border border-2 p-2 w-full focus:outline-main' />
                </div>
                <div className="flex flex-col gap-2 col-span-1">
                  <label className='text-text-2'>رقم الهاتف:</label>
                  <input type="text" {...register("phone", { required: true })} className='border-border border-2 p-2 w-full focus:outline-main' />
                </div>
                <div className="flex flex-col gap-2 col-span-2">
                  <label className='text-text-2'>العنوان:</label>
                  <input type="text" {...register("address", { required: true })} className='border-border border-2 p-2 w-full focus:outline-main' />
                </div>
                <div className="flex flex-col gap-2 col-span-1">
                  <label className='text-text-2'>الايميل:</label>
                  <input type="email" {...register("email", { required: true })} className='border-border border-2 p-2 w-full focus:outline-main' />
                </div>
                <div className="flex flex-col gap-2 col-span-1">
                  <label className='text-text-2'>العمر:</label>
                  <input type="number" {...register("age", { required: true })} className='border-border border-2 p-2 w-full focus:outline-main' />
                </div>

        {typeInviteeDialog === "edit" && (
          <>
                          <div className="flex flex-col gap-2 col-span-2">
                  <label className='text-text-2'>الموافقة علي الدعوة:</label>
                  <FormControl fullWidth>
                    <CustomSelect
                      labelId="approval-status-label"
                      value={approvalStatus}
                      onChange={handleApprovalChange}
                      displayEmpty
                      inputProps={{ 'aria-label': 'الموافقة علي الدعوة' }}
                    >
                      <MenuItem value="">
                        <em>اختر الحاله</em>
                      </MenuItem>
                      <MenuItem value="-">-</MenuItem>
                      <MenuItem value="لا">لا</MenuItem>
                      <MenuItem value="نعم">نعم</MenuItem>
                    </CustomSelect>
                  </FormControl>
                </div>

                <div className="flex flex-col gap-2 col-span-2">
                  <label className='text-text-2'>حالة الدعوة:</label>
                  <FormControl fullWidth>
                    <CustomSelect
                      labelId="invitation-status-label"
                      value={invitationStatus}
                      onChange={handleInvitationChange}
                      displayEmpty
                      inputProps={{ 'aria-label': 'حالة الدعوة' }}
                    >
                      <MenuItem value="">
                        <em>اختر الحاله</em>
                      </MenuItem>
                      <MenuItem value="-">-</MenuItem>
                      <MenuItem value="لا">لا</MenuItem>
                      <MenuItem value="نعم">نعم</MenuItem>
                    </CustomSelect>
                  </FormControl>
                </div>
          </>
        )}



                <div className="col-span-2 flex justify-between gap-2 mt-2 items-center">
                  <div className='flex items-center gap-2'>
                    <button type="submit" className="bg-green-500 text-white px-3 py-2 rounded-sm">
                      {typeInviteeDialog === "create" ? "إنشاء" : "تعديل"}
                    </button>
                    <button type="button" className="bg-gray-500 text-white px-3 py-2 rounded-sm" onClick={() => { setInviteeDialog(false); }}>
                      إلغاء
                    </button>
                  </div>
                  
                  {typeInviteeDialog === "edit" && (
                  <div className="delete-invitee p-3 cursor-pointer text-text-1">
                  <DeleteOutlineIcon />
                  </div>
                  )}

                </div>
              </form>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default CreateInvitee;
