import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AllStateContext } from '../../../context/AllStateContext';
import { MenuItem, Select, FormControl, styled } from '@mui/material';
import { Helmet } from 'react-helmet-async';

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

const CreateCategoryDialog = () => {
    const { register, handleSubmit, setValue } = useForm();
    const onSubmit = (data) => console.log(data);
    

    const { categoryDialog, setCategoryDialog, typeCategoryDialog,  } = useContext(AllStateContext);

    const [eventType, setEventType] = useState('');

    const handleChange = (event) => {
        setEventType(event.target.value);
        setValue("eventType", event.target.value);  // Integrate with React Hook Form
    };

    return (
        <>
            <Helmet>
                <style type="text/css">
                    {`
                    .Documents-btn {
                        display: flex;
                        align-items: center;
                        justify-content: flex-start;
                        width: fit-content;
                        height: 40px;
                        border: none;
                        padding: 0px 15px;
                        border-radius: 5px;
                        background-color: rgb(49, 49, 83);
                        gap: 10px;
                        cursor: pointer;
                        transition: all 0.3s;
                    }
                    
                    /* Ensure label covers the button area */
                    .Documents-btn label {
                        width: 100%;
                    }
                    
                    .Documents-btn .folderContainer {
                        width: 40px;
                        height: fit-content;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: flex-end;
                        position: relative;
                    }
                    
                    .Documents-btn .fileBack {
                        z-index: 1;
                        width: 80%;
                        height: auto;
                    }
                    
                    .Documents-btn .filePage {
                        width: 50%;
                        height: auto;
                        position: absolute;
                        z-index: 2;
                        transition: all 0.3s ease-out;
                    }
                    
                    .Documents-btn .fileFront {
                        width: 85%;
                        height: auto;
                        position: absolute;
                        z-index: 3;
                        opacity: 0.95;
                        transform-origin: bottom;
                        transition: all 0.3s ease-out;
                    }
                    
                    .Documents-btn .text {
                        color: white;
                        font-size: 14px;
                        font-weight: 600;
                        letter-spacing: 0.5px;
                    }
                    
                    .Documents-btn input[type="file"] {
                        display: none;
                    }
                    `}
                </style>
            </Helmet>

            {categoryDialog && (
                <div
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
                    className="fixed h-full w-full z-[15]"
                    onClick={() => { setCategoryDialog(false) }}
                ></div>
            )}

            {categoryDialog && (
                <div className='fixed flex flex-col border-2 border-border top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[16] justify-center items-center bg-section rounded-lg w-96'>
                    <div className="logoutDialog-head w-full p-5 text-lg flex justify-center text-text-1">
                        {typeCategoryDialog === "create" ? "إنشاء مناسبة" : "تعديل المناسبة"}
                    </div>
                    <div className="logoutDialog-body w-full flex justify-start gap-2 p-3 border-y-2 border-border">
                        <form onSubmit={handleSubmit(onSubmit)} className='w-full grid grid-cols-2 gap-2'>
                            <div className="flex flex-col gap-2 col-span-1">
                                <label className='text-text-2'>اسم المناسبة:</label>
                                <input type="text" {...register("name")} className='border-border border-2 p-2 w-full focus:outline-main' />
                            </div>
                            <div className="flex flex-col gap-2 col-span-1">
                                <label className='text-text-2'>نوع المناسبة:</label>
                                <FormControl>
                                    <CustomSelect
                                        labelId="event-type-label"
                                        value={eventType}
                                        onChange={handleChange}
                                        displayEmpty
                                        inputProps={{ 'aria-label': 'نوع المناسبة' }}
                                    >
                                        <MenuItem value="">
                                            <em>اختر نوع المناسبة</em>
                                        </MenuItem>
                                        <MenuItem value="فرح">فرح</MenuItem>
                                        <MenuItem value={10}>مناسبه اجتماع</MenuItem>
                                        <MenuItem value={20}>دعوة حزب</MenuItem>
                                        <MenuItem value={30}>حفل تخرج</MenuItem>
                                        <MenuItem value={40}>غير ذلك</MenuItem>
                                    </CustomSelect>
                                </FormControl>
                            </div>
                            <div className="flex flex-col gap-2 col-span-1">
                                <label className='text-text-2'>اسم القاعة:</label>
                                <input type="text" {...register("hallName")} className='border-border border-2 p-2 w-full focus:outline-main' />
                            </div>
                            <div className="flex flex-col gap-2 col-span-1">
                                <label className='text-text-2'>تاريخ المناسبة:</label>
                                <input type="date" {...register("date")} className='border-border border-2 p-2 w-full focus:outline-main' />
                            </div>
                            <div className="flex flex-col gap-2 col-span-2">
                                <label className='text-text-2'>عنوان القاعة:</label>
                                <input type="text" {...register("address")} className='border-border border-2 p-2 w-full focus:outline-main' />
                            </div>
                            {eventType === "فرح" && (
                                <>
                                    <div className="flex flex-col gap-2 col-span-1">
                                        <label className='text-text-2'>اسم العريس:</label>
                                        <input type="text" {...register("groomName")} className='border-border border-2 p-2 w-full focus:outline-main' />
                                    </div>
                                    <div className="flex flex-col gap-2 col-span-1">
                                        <label className='text-text-2'>اسم العروس:</label>
                                        <input type="text" {...register("brideName")} className='border-border border-2 p-2 w-full focus:outline-main' />
                                    </div>
                                </>
                            )}
                            <div className="flex flex-col gap-2 col-span-1">
                                <label className='text-text-2'>من الساعة:</label>
                                <input type="time" {...register("startTime")} className='border-border border-2 p-2 w-full focus:outline-main' />
                            </div>
                            <div className="flex flex-col gap-2 col-span-1">
                                <label className='text-text-2'>إلى الساعة:</label>
                                <input type="time" {...register("endTime")} className='border-border border-2 p-2 w-full focus:outline-main' />
                            </div>
                            <div className="col-span-2 flex justify-between gap-2 mt-2">
                            <div className='flex items-center gap-2'>
                                    <button type="submit" className="bg-green-500 text-white px-3 py-2 rounded-sm">
                                        {typeCategoryDialog === "create" ? "إنشاء" : "تعديل"}
                                    </button>
                                    <button type="button" className="bg-gray-500 text-white px-3 py-2 rounded-sm" onClick={() => { setCategoryDialog(false) }}>
                                        إلغاء
                                    </button>
                                </div>
                                <div>
                                    <label className="Documents-btn">
                                        <input type="file" {...register("image")} id="imageUpload" style={{ display: 'none' }} />
                                        <span className="folderContainer">
                                            <svg className="fileBack" width="146" height="113" viewBox="0 0 146 113" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0 4C0 1.79086 1.79086 0 4 0H50.3802C51.8285 0 53.2056 0.627965 54.1553 1.72142L64.3303 13.4371C65.2799 14.5306 66.657 15.1585 68.1053 15.1585H141.509C143.718 15.1585 145.509 16.9494 145.509 19.1585V109C145.509 111.209 143.718 113 141.509 113H3.99999C1.79085 113 0 111.209 0 109V4Z" fill="url(#paint0_linear_117_4)"></path>
                                                <defs>
                                                    <linearGradient id="paint0_linear_117_4" x1="0" y1="0" x2="72.93" y2="95.4804" gradientUnits="userSpaceOnUse">
                                                        <stop stopColor="#8F88C2"></stop>
                                                        <stop offset="1" stopColor="#5C52A2"></stop>
                                                    </linearGradient>
                                                </defs>
                                            </svg>
                                            <svg className="filePage" width="88" height="99" viewBox="0 0 88 99" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect width="88" height="99" fill="url(#paint0_linear_117_6)"></rect>
                                                <defs>
                                                    <linearGradient id="paint0_linear_117_6" x1="0" y1="0" x2="81" y2="160.5" gradientUnits="userSpaceOnUse">
                                                        <stop stopColor="white"></stop>
                                                        <stop offset="1" stopColor="#686868"></stop>
                                                    </linearGradient>
                                                </defs>
                                            </svg>
                                            <svg className="fileFront" width="160" height="79" viewBox="0 0 160 79" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0.29306 12.2478C0.133905 9.38186 2.41499 6.97059 5.28537 6.97059H30.419H58.1902C59.5751 6.97059 60.9288 6.55982 62.0802 5.79025L68.977 1.18034C70.1283 0.410771 71.482 0 72.8669 0H77H155.462C157.87 0 159.733 2.1129 159.43 4.50232L150.443 75.5023C150.19 77.5013 148.489 79 146.474 79H7.78403C5.66106 79 3.9079 77.3415 3.79019 75.2218L0.29306 12.2478Z" fill="url(#paint0_linear_117_5)"></path>
                                                <defs>
                                                    <linearGradient id="paint0_linear_117_5" x1="38.7619" y1="8.71323" x2="66.9106" y2="82.8317" gradientUnits="userSpaceOnUse">
                                                        <stop stopColor="#C3BBFF"></stop>
                                                        <stop offset="1" stopColor="#51469A"></stop>
                                                    </linearGradient>
                                                </defs>
                                            </svg>
                                        </span>
                                        <p className="text">رفع الصوره</p>
                                    </label>
                                </div>
                             
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}

export default CreateCategoryDialog;
