import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginAuth } from "../../../store/login/act/actPostLoginAuth";
import Loading from "../../Loading";

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { records, loading, error } = useSelector((state) => state.loginAuth);

  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("data", data);
    dispatch(loginAuth({
      "name": data.name,
      "pass": data.password
    }))
      .unwrap()
      .then(() => {
        navigate("/system/administrator/dashboard");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-3 w-[400px] bg-white p-8"
      >
        <div className="title-login flex flex-col gap-1">
          <p className="text-base">مرحبا بعودتك</p>
          <p className="text-gray-400 text-xs">
            املي بياناتك لكي تذهب لصفحه الادمن
          </p>
        </div>
        <div className="body-login flex flex-col gap-3">
          <div className="name w-full">
            <label
              htmlFor="name"
              className="block text-red font-semibold text-sm"
            >
              الاسم
            </label>
            <div className="mt-2">
              <input
                {...register("name", {
                  required: "الاسم مطلوب",
                  pattern: {
                    message: "الاسم غير صحيح",
                  },
                })}
                type="text"
                name="name"
                id="name"
                className="border-2 p-2 w-full"
              />
            </div>
            {errors.name && (
              <span className="text-red-500 text-xs">{errors.name.message}</span>
            )}
          </div>

          <div className="password relative w-full">
            <label
              htmlFor="password"
              className="block text-red font-semibold text-sm"
            >
              كلمه السر
            </label>
            <div className="mt-2 relative">
              <input
                {...register("password", {
                  required: "كلمه السر مطلوبة",
                  pattern: {
                    message: "كلمه السر غير صحيحه",
                  },
                  minLength: {
                    value: 8,
                    message: "يجب أن تكون كلمة المرور مكونة من 8 أحرف على الأقل.",
                  },
                })}
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                className="border-2 p-2 w-full"
              />
              <div
                className="icon-login absolute top-1/2 cursor-pointer -translate-y-1/2 left-[5%]"
                onClick={() => {
                  setShowPassword(!showPassword);
                }}
              >
                {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
              </div>
            </div>
            {errors.password && (
              <span className="text-red-500 text-xs">
                {errors.password.message}
              </span>
            )}
          </div>
        </div>
        <Loading loading={loading} error={error}>
          <button
            type="submit"
            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
          >
            تسجيل الدخول
          </button>
        </Loading>
      </form>
    </>
  );
};

export default LoginForm;
