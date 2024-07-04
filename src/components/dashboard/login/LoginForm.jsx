import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { records, loading, error } = useSelector((state) => state.loginAuth);
  console.log(records, loading, error);

  const [showPassword, setShowPassword] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log("data", data);
    dispatch({
      "name": data.name,
      "pass": data.password
    })
    .unwrap()
    .then(() => {
      navigate("/system/administrator/dashboard");
    })
    .catch((error) => {
      console.log(error);
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-3 w-[400px] bg-white p-8'>
      <div className="title-login flex flex-col gap-1">
        <p className='text-base'>مرحبا بعودتك</p>
        <p className='text-gray-400 text-xs'>املي بياناتك لكي تذهب لصفحه الادمن</p>
      </div>
      <div className="body-login flex flex-col gap-3">
        {/* start name */}
        <div className="name w-full">
          <label htmlFor="name" className='block text-red font-semibold text-sm'>
            الاسم
          </label>
          <div className='mt-2'>
            <input {
              ...register("name", {
                required: "الاسم مطلوب",
                pattern: {
                  message: "الاسم غير صحيح",
                },
              })
            }
            type="text" name="name" id="name" className='border-2 p-2 w-full' />
          </div>
          
          {errors.name && (
            <span className="text-red-500 text-xs">
              {errors.name.message}
            </span>
          )}
        </div>
        {/* end name */}

        {/* start password */}
        <div className="password relative w-full">
          <label htmlFor="password" className='block text-red font-semibold text-sm'>
            كلمه السر
          </label>
          <div className="mt-2 relative">
            <input {
              ...register("password", {
                required: "كلمه السر مطلوبة",
                pattern: {
                  message: "كلمه السر غير صحيحه",
                },
                minLength: {
                  value: 8,
                  message: "يجب أن تكون كلمة المرور مكونة من 8 أحرف على الأقل."
                },
              })
            } type={showPassword ? "text" : "password"}
            id="password" name="password" className='border-2 p-2 w-full' />
            <div className="icon-login absolute top-1/2 cursor-pointer -translate-y-1/2 left-[5%]" onClick={() => { setShowPassword(!showPassword) }}>
              {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
            </div>
          </div>
          
          {errors.password && (
            <span className="text-red-500 text-xs">
              {errors.password.message}
            </span>
          )}
        </div>
        {/* end password */}
      </div>
      <button type="submit" className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">تسجيل الدخول</button>
    </form>
  )
}

export default LoginForm;
