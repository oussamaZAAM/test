import Image from "next/image";
import { TbEdit } from "react-icons/tb";
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';
import React, { useState } from 'react';

export default function Profile() {
    const [selectedDate, setSelectedDate] = useState<Date>(new Date());

    const onChange = (value: Date, event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        setSelectedDate(value);
    };
    return (
        <>

            {/* Dashboard Header + notifications */}
            <div className="flex justify-between items-center w-full mt-4 mb-2">
                <span className="text-2xl font-semibold text-start">Profile</span>
                <div className="flex justify-end items-center gap-2">
                    <div className="flex justify-center items-center p-2.5 rounded-md bg-white shadow">
                        <TbEdit className="h-5 w-5" />
                    </div>
                </div>
            </div>

            {/* Profile Informations */}
            <div className="flex flex-col justify-start items-center">
                <Image
                    src={require("../public/images/avatar 1.png")}
                    width={500}
                    height={500}
                    className="h-24 w-24 rounded-full"
                    alt="Avatar"
                />
                <span className="text-md font-semibold text-center mt-3 mb-1">Esther Howard</span>
                <span className="text-xs font-medium text-center">Elementary</span>
            </div>

            {/* Calendar */}
            <div className="flex flex-col justify-start items-center mt-1">
                <Calendar className="!rounded-md !border-main-500 !p-2 !w-full" value={selectedDate} onChange={onChange} />
            </div>
        </>
    )
}