import React ,{ useState } from 'react'

import { useForm } from "react-hook-form";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const regPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;


const LoginForm = () => {

    const [showPassword, setShowPassword] = useState(false)
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
  
    const onSubmit = (data) => {
      console.log("data", data);
    };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-3 w-[400px] bg-white p-8'>
              <div className="title-login flex flex-col gap-1">
                <p className='text-base'>مرحبا بعودتك</p>
                <p className='text-gray-400 text-xs'>املي بياناتك لكي تذهب لصفحه الادمن</p>
              </div>
              <div className="body-login flex flex-col gap-3 ">
                {/* start email */}
                <div className="email w-full">
                  <label htmlFor="email" className='block text-red font-semibold text-sm'>
                    البريد الالكتروني
                  </label>
                  <div className='mt-2 '>
                    <input {
                      ...register("email", {
                        required: "البريد الالكتروني مطلوب",
                        pattern: {
                          value: regEmail,
                          message: "البريد الالكتروني غير صحيحه",
                        },
                      })
                    }
                    type="text" name="email" id="email" className='border-2 p-2 w-full' />
                  </div>
                  
                  {errors.email && (
                    <span className="text-red-500 text-xs">
                      {errors.email.message}
                    </span>
                  )}
                </div>
                {/* end email */}

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
                          value: regPassword,
                          message: "كلمه السر غير صحيحه",
                        },
                        minLength: {
                          value: 8,
                          message: "يجب أن تكون كلمة المرور مكونة من 8 أحرف على الأقل."
                        },
                      })
                    } type={showPassword ?  "text" : "password" } 
                    id="password" name="password" className='border-2 p-2 w-full' />
                    <div className="icon-login absolute top-1/2 cursor-pointer -translate-y-1/2 left-[5%]" onClick={()=>{setShowPassword(!showPassword)}}>
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

export default LoginForm