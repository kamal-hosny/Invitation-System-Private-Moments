import { FormControl, MenuItem, Select, styled } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { AllStateContext } from "../../../context/AllStateContext";
import { postParty } from "../../../store/party/act/actCreateParty";
import { editParty } from "../../../store/party/act/actEditParty";
import { getAllParty } from "../../../store/party/act/actGetAllParty";
import { getOneParty } from "../../../store/party/act/actGetOneParty";

const CustomSelect = styled(Select)(({ theme }) => ({
    "& .MuiSelect-select": {
        backgroundColor: "white",
        padding: "10px",
    },
    "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "var(--color-border-css)",
        borderWidth: "2px",
        borderRadius: "0",
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
        borderColor: "var(--color-border-css)",
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: "var(--main-color-css)",
    },
}));

const CreateCategoryDialog = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { register, handleSubmit, setValue, reset } = useForm();
    const { categoryDialog, setCategoryDialog, typeCategoryDialog } =
        useContext(AllStateContext);
    const [eventType, setEventType] = useState("");

    const handleChange = (event) => {
        const value = event.target.value;
        setEventType(value);
        setValue("eventType", value); // Integrate with React Hook Form
    };

    const data = useSelector((state) => state?.allParty?.record?.data?.[0]);

    useEffect(() => {
        if (id) {
            dispatch(getOneParty(id));
        }
    }, [dispatch, id]);

    useEffect(() => {
        if (typeCategoryDialog === "create") {
            reset();
            setEventType(""); // Reset eventType when creating a new party
        } else {
            if (data) {
                setValue("name", data.title);
                setValue("hallName", data.place);
                setValue("address", data.address);
                setValue("date", data.date);
                setValue("groomName", data.Groom_name);
                setValue("brideName", data.Bride_name);
                setValue("linkAddress", data.location);
                setValue("eventType", data.eventType);
                setValue("startTime", data.startTime);
                setValue("endTime", data.endTime);
                setEventType(data.eventType);
            }
        }
    }, [data, setValue, typeCategoryDialog, reset]);

    const onSubmit = (data) => {
        const payload = {
            title: data.name,
            place: data.hallName,
            address: data.address,
            date: data.date,
            Groom_name: data.groomName,
            Bride_name: data.brideName,
            location: data.linkAddress,
            eventType: data.eventType,
            startTime: data.startTime,
            endTime: data.endTime,
        };

        if (typeCategoryDialog === "create") {
            dispatch(postParty(payload)).then(() => {
                setCategoryDialog(false);
                dispatch(getAllParty());
                reset();
            });
        } else {
            dispatch(editParty({ id, data: payload })).then(() => {
                setCategoryDialog(false);
                dispatch(getAllParty());
                dispatch(getOneParty(id));
                reset();
            });
        }
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
                    onClick={() => {
                        setCategoryDialog(false);
                    }}
                ></div>
            )}

            {categoryDialog && (
                <div className="fixed flex flex-col border-2 border-border top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[16] justify-center items-center bg-section rounded-lg w-96">
                    <div className="logoutDialog-head w-full p-5 text-lg flex justify-center text-text-1">
                        {typeCategoryDialog === "create"
                            ? "إنشاء مناسبة"
                            : "تعديل المناسبة"}
                    </div>
                    <div className="logoutDialog-body w-full flex justify-start gap-2 p-3 border-y-2 border-border">
                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            className="w-full grid grid-cols-2 gap-2"
                        >
                            <div className="flex flex-col gap-2 col-span-1">
                                <label className="text-text-2">اسم المناسبة:</label>
                                <input
                                    type="text"
                                    {...register("name")}
                                    className="border-border border-2 p-2 w-full focus:outline-main"
                                />
                            </div>
                            <div className="flex flex-col gap-2 col-span-1">
                                <label className="text-text-2">نوع المناسبة:</label>
                                <FormControl>
                                    <CustomSelect
                                        labelId="event-type-label"
                                        value={eventType}
                                        onChange={handleChange}
                                        displayEmpty
                                        inputProps={{ "aria-label": "نوع المناسبة" }}
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
                                <label className="text-text-2">اسم القاعة:</label>
                                <input
                                    type="text"
                                    {...register("hallName")}
                                    className="border-border border-2 p-2 w-full focus:outline-main"
                                />
                            </div>
                            <div className="flex flex-col gap-2 col-span-1">
                                <label className="text-text-2">تاريخ المناسبة:</label>
                                <input
                                    type="date"
                                    {...register("date")}
                                    className="border-border border-2 p-2 w-full focus:outline-main"
                                />
                            </div>
                            <div className="flex flex-col gap-2 col-span-2">
                                <label className="text-text-2">عنوان القاعة:</label>
                                <input
                                    type="text"
                                    {...register("address")}
                                    className="border-border border-2 p-2 w-full focus:outline-main"
                                />
                            </div>
                            <div className="flex flex-col gap-2 col-span-2">
                                <label className="text-text-2">رابط العنوان:</label>
                                <input
                                    type="text"
                                    {...register("linkAddress")}
                                    className="border-border border-2 p-2 w-full focus:outline-main"
                                />
                            </div>
                            {eventType === "فرح" && (
                                <>
                                    <div className="flex flex-col gap-2 col-span-1">
                                        <label className="text-text-2">اسم العريس:</label>
                                        <input
                                            type="text"
                                            {...register("groomName")}
                                            className="border-border border-2 p-2 w-full focus:outline-main"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-2 col-span-1">
                                        <label className="text-text-2">اسم العروس:</label>
                                        <input
                                            type="text"
                                            {...register("brideName")}
                                            className="border-border border-2 p-2 w-full focus:outline-main"
                                        />
                                    </div>
                                </>
                            )}
                            <div className="flex flex-col gap-2 col-span-1">
                                <label className="text-text-2">من الساعة:</label>
                                <input
                                    type="time"
                                    {...register("startTime")}
                                    className="border-border border-2 p-2 w-full focus:outline-main"
                                />
                            </div>
                            <div className="flex flex-col gap-2 col-span-1">
                                <label className="text-text-2">إلى الساعة:</label>
                                <input
                                    type="time"
                                    {...register("endTime")}
                                    className="border-border border-2 p-2 w-full focus:outline-main"
                                />
                            </div>
                            <div className="col-span-2 flex justify-between gap-2 mt-2">
                                <div className="flex items-center gap-2">
                                    <button
                                        type="submit"
                                        className="bg-green-500 text-white px-3 py-2 rounded-sm"
                                    >
                                        {typeCategoryDialog === "create" ? "إنشاء" : "تعديل"}
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setCategoryDialog(false)}
                                        className="bg-gray-500 text-white px-3 py-2 rounded-sm"
                                    >
                                        إلغاء
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

export default CreateCategoryDialog;
