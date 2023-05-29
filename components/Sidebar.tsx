import { changePage } from '@/app/GlobalRedux/Features/currentPage/currentPageSlice';
import { toggle } from '@/app/GlobalRedux/Features/sidebar/sidebarSlice';
import { RootState } from '@/app/GlobalRedux/store';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';

const Sidebar = () => {
    const isOpen = useSelector((state: RootState) => state.sidebar.isOpen);
    const currentPage = useSelector((state: RootState) => state.currentPage.value);

    const dispatch = useDispatch();

    console.log(currentPage)

    return (
        <div>
            <button onClick={() => dispatch(toggle())} data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" className={`hamburger ${isOpen ? 'z-50 right-0 mr-3' : 'left-0 ml-3'} fixed top-0 items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200`}>
                <span className="sr-only">Open sidebar</span>
                {isOpen
                    ? <svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="m249-207-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z" /></svg>
                    : <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                    </svg>}
            </button>

            <aside id="logo-sidebar" className={`sidebar ${isOpen ? 'open' : ''} fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0`} aria-label="Sidebar">
                <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50">
                    <div className="flex items-center pl-2.5 mb-5 py-6 gap-4 cursor-pointer">
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
                            <div onClick={() => dispatch(changePage("Dashboard"))} className={"flex items-center p-2 text-gray-900 rounded-lg " + (currentPage === "Dashboard" ? "bg-main-400 hover:bg-main-400 font-semibold" : "hover:bg-main-200 cursor-pointer")}>
                                <svg aria-hidden="true" className="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
                                <span className="ml-3">Dashboard</span>
                            </div>
                        </li>
                        <li>
                            <div onClick={() => dispatch(changePage("Courses"))} className={"flex items-center p-2 text-gray-900 rounded-lg " + (currentPage === "Courses" ? "bg-main-400 hover:bg-main-400 font-semibold" : "hover:bg-main-200 cursor-pointer")}>
                                <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 400 group-hover:text-gray-900" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
                                <span className="flex-1 ml-3 whitespace-nowrap">Courses</span>
                            </div>
                        </li>
                        <li>
                            <div onClick={() => dispatch(changePage("Chat"))} className={"flex items-center p-2 text-gray-900 rounded-lg " + (currentPage === "Chat" ? "bg-main-400 hover:bg-main-400 font-semibold" : "hover:bg-main-200 cursor-pointer")}>
                                <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path><path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path></svg>
                                <span className="flex-1 ml-3 whitespace-nowrap">Chat</span>
                            </div>
                        </li>
                        <li>
                            <div onClick={() => dispatch(changePage("Grades"))} className={"flex items-center p-2 text-gray-900 rounded-lg " + (currentPage === "Grades" ? "bg-main-400 hover:bg-main-400 font-semibold" : "hover:bg-main-200 cursor-pointer")}>
                                <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
                                <span className="flex-1 ml-3 whitespace-nowrap">Grades</span>
                            </div>
                        </li>
                        <li>
                            <div onClick={() => dispatch(changePage("Schedule"))} className={"flex items-center p-2 text-gray-900 rounded-lg " + (currentPage === "Schedule" ? "bg-main-400 hover:bg-main-400 font-semibold" : "hover:bg-main-200 cursor-pointer")}>
                                <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd"></path></svg>
                                <span className="flex-1 ml-3 whitespace-nowrap">Schedule</span>
                            </div>
                        </li>
                        <li>
                            <div onClick={() => dispatch(changePage("Settings"))} className={"flex items-center p-2 text-gray-900 rounded-lg " + (currentPage === "Settings" ? "bg-main-400 hover:bg-main-400 font-semibold" : "hover:bg-main-200 cursor-pointer")}>
                                <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd"></path></svg>
                                <span className="flex-1 ml-3 whitespace-nowrap">Settings</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </aside>
        </div>
    );
};

export default Sidebar