import { changePage } from '@/app/GlobalRedux/Features/currentPage/currentPageSlice';
import { toggle } from '@/app/GlobalRedux/Features/sidebar/sidebarSlice';
import { RootState } from '@/app/GlobalRedux/store';
import Image from 'next/image';

import { BsBriefcase, BsBriefcaseFill, BsCalendar3Week, BsCalendar3WeekFill } from 'react-icons/bs';
import { MdChat, MdDashboard, MdOutlineChat, MdOutlineDashboard } from 'react-icons/md';
import { RiPencilRuler2Fill, RiPencilRuler2Line, RiSettings4Fill, RiSettings4Line } from 'react-icons/ri';

import { useDispatch, useSelector } from 'react-redux';

export default function Sidebar() {
    const isOpen = useSelector((state: RootState) => state.sidebar.isOpen);
    const currentPage = useSelector((state: RootState) => state.currentPage.value);

    const dispatch = useDispatch();

    return (
        <>
            <button onClick={() => dispatch(toggle())} data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" className={`hamburger ${isOpen ? 'z-50 right-0 mr-3' : 'left-0 ml-3'} fixed top-0 items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200`}>
                <span className="sr-only">Open sidebar</span>
                {isOpen
                    ? <svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="m249-207-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z" /></svg>
                    : <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                    </svg>}
            </button>

            <aside id="logo-sidebar" className={`sidebar ${isOpen ? 'open' : ''} overflow-y-auto fixed flex flex-col justify-between items-center top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0`} aria-label="Sidebar">
                <div className="h-full px-3 py-4 bg-white w-full">
                    <div className="flex items-center pl-2.5 mb-5 py-4 gap-4 cursor-pointer">
                        <Image
                            src={require("../public/images/logo.png")}
                            height={100}
                            width={100}
                            className='h-10 w-10'
                            alt="Logo"
                        />
                        <span className="self-center text-md font-semibold whitespace-nowrap">Academy</span>
                    </div>
                    <ul className="space-y-2 font-medium pl-3">
                        <li>
                            <div onClick={() => dispatch(changePage("Dashboard"))} className={"relative flex items-center p-2 text-gray-900 rounded-lg " + (currentPage === "Dashboard" ? "bg-main-400 hover:bg-main-400 font-semibold" : "hover:bg-main-200 cursor-pointer")}>
                                <MdDashboard className={"absolute w-6 h-6 fill-zinc-500 transition duration-250 " + (currentPage === "Dashboard" ? "animate-wiggle opacity-100" : "opacity-0")} />
                                <MdOutlineDashboard className={"absolute w-6 h-6 fill-zinc-500 transition duration-250 " + (currentPage !== "Dashboard" ? "opacity-100" : "opacity-0")} />
                                <span className="ml-10 text-zinc-500">Dashboard</span>
                            </div>
                        </li>
                        <li>
                            <div onClick={() => dispatch(changePage("Courses"))} className={"relative flex items-center p-2 text-gray-900 rounded-lg " + (currentPage === "Courses" ? "bg-main-400 hover:bg-main-400 font-semibold" : "hover:bg-main-200 cursor-pointer")}>
                                <BsBriefcaseFill className={"absolute w-6 h-6 fill-zinc-500 transition duration-250 " + (currentPage === "Courses" ? "animate-wiggle opacity-100" : "opacity-0")} />
                                <BsBriefcase className={"absolute w-6 h-6 fill-zinc-500 transition duration-250 " + (currentPage !== "Courses" ? "opacity-100" : "opacity-0")} />
                                <span className="ml-10 text-zinc-500">Courses</span>
                            </div>
                        </li>
                        <li>
                            <div onClick={() => dispatch(changePage("Chat"))} className={"relative flex items-center p-2 text-gray-900 rounded-lg " + (currentPage === "Chat" ? "bg-main-400 hover:bg-main-400 font-semibold" : "hover:bg-main-200 cursor-pointer")}>
                                <MdChat className={"absolute w-6 h-6 fill-zinc-500 transition duration-250 " + (currentPage === "Chat" ? "animate-wiggle opacity-100" : "opacity-0")} />
                                <MdOutlineChat className={"absolute w-6 h-6 fill-zinc-500 transition duration-250 " + (currentPage !== "Chat" ? "opacity-100" : "opacity-0")} />
                                <span className="ml-10 text-zinc-500">Chat</span>
                            </div>
                        </li>
                        <li>
                            <div onClick={() => dispatch(changePage("Grades"))} className={"relative flex items-center p-2 text-gray-900 rounded-lg " + (currentPage === "Grades" ? "bg-main-400 hover:bg-main-400 font-semibold" : "hover:bg-main-200 cursor-pointer")}>
                                <RiPencilRuler2Fill className={"absolute w-6 h-6 fill-zinc-500 transition duration-250 " + (currentPage === "Grades" ? "animate-wiggle opacity-100" : "opacity-0")} />
                                <RiPencilRuler2Line className={"absolute w-6 h-6 fill-zinc-500 transition duration-250 " + (currentPage !== "Grades" ? "opacity-100" : "opacity-0")} />
                                <span className="ml-10 text-zinc-500">Grades</span>
                            </div>
                        </li>
                        <li>
                            <div onClick={() => dispatch(changePage("Schedule"))} className={"relative flex items-center p-2 text-gray-900 rounded-lg " + (currentPage === "Schedule" ? "bg-main-400 hover:bg-main-400 font-semibold" : "hover:bg-main-200 cursor-pointer")}>
                                <BsCalendar3WeekFill className={"absolute w-6 h-6 fill-zinc-500 transition duration-250 " + (currentPage === "Schedule" ? "animate-wiggle opacity-100" : "opacity-0")} />
                                <BsCalendar3Week className={"absolute w-6 h-6 fill-zinc-500 transition duration-250 " + (currentPage !== "Schedule" ? "opacity-100" : "opacity-0")} />
                                <span className="ml-10 text-zinc-500">Schedule</span>
                            </div>
                        </li>
                        <li>
                            <div onClick={() => dispatch(changePage("Settings"))} className={"relative flex items-center p-2 text-gray-900 rounded-lg " + (currentPage === "Settings" ? "bg-main-400 hover:bg-main-400 font-semibold" : "hover:bg-main-200 cursor-pointer")}>
                                <RiSettings4Fill className={"absolute w-6 h-6 fill-zinc-500 transition duration-250 " + (currentPage === "Settings" ? "animate-wiggle opacity-100" : "opacity-0")} />
                                <RiSettings4Line className={"absolute w-6 h-6 fill-zinc-500 transition duration-250 " + (currentPage !== "Settings" ? "opacity-100" : "opacity-0")} />
                                <span className="ml-10 text-zinc-500">Settings</span>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className='bg-white w-full flex justify-center items-center'>
                    <div className="flex flex-col justify-end items-center my-6 bg-main-200 w-10/12 rounded-xl">
                        <Image
                            src={require("../public/images/premium.png")}
                            height={500}
                            width={500}
                            className='w-20 h-24 -translate-y-4'
                            alt="Logo"
                        />
                        <b className="text-center w-full font-bold text-sm my-2">Premium Subsciption</b>
                        <span className="text-center text-xs font-medium w-9/12">Buy premium and get access to new courses</span>
                        <button className="bg-main-500 rounded-lg text-center mt-6 mb-4 py-2 w-11/12 border border-main-500 hover:border-black">
                            <span className="text-sm font-semibold text-black dark:text-black">More detailed</span>
                        </button>
                    </div>
                </div>
            </aside>
        </>
    );
};