import { BsBell } from "react-icons/bs";
import CourseCard from "./CourseCard";
import MyCourseRow from "./MyCourseRow";

export default function Dashboard() {
    return (
        <div className="flex flex-col justify-start items-start p-4 md:ml-64">

            {/* Dashboard Header + searchbar + notifications */}
            <div className="flex justify-between items-center w-full my-4">
                <span className="text-3xl font-semibold text-start">Dashboard</span>
                <div className="flex justify-end items-center gap-2">
                    <div className="relative w-full">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg aria-hidden="true" className="w-5 h-5 text-zinc-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                        </div>
                        <input type="text" id="simple-search" className="shadow bg-white text-gray-900 text-sm rounded-md block w-full pl-10 p-2.5" placeholder="Search" required />
                    </div>
                    <div className="flex justify-center items-center p-2.5 rounded-md bg-white shadow">
                        <BsBell className="h-5 w-5" />
                    </div>
                </div>
            </div>

            {/* New Courses  */}
            <div className="flex flex-col justify-start items-stretch max-w-[512px] xl:max-w-[768px] my-4 gap-3">
                <span className="text-xl font-semibold text-start my-2">New Courses</span>
                <div className="flex justify-start items-center gap-2 overflow-x-scroll">
                    <CourseCard />
                    <CourseCard />
                    <CourseCard />
                    <CourseCard />
                    <CourseCard />
                </div>
            </div>

            {/* My Courses */}
            <div className="flex flex-col justify-start items-stretch w-full my-4 gap-3">
                <div className="flex justify-between items-center">
                    <span className="text-xl font-semibold text-start my-2">My Courses</span>
                    <span className="text-md font-regular text-end text-main-500 my-2 cursor-pointer hover:underline">View all</span>
                </div>

                <div className="relative overflow-x-auto">
                    <table className="w-full text-md text-left">
                        <thead className="text-sm font-thin text-zinc-300">
                            <tr>
                                <th scope="col" className="py-3">
                                    Course name
                                </th>
                                <th scope="col" className="w-[150px] py-3">
                                    Start
                                </th>
                                <th scope="col" className="w-[75px] py-3">
                                    Rate
                                </th>
                                <th scope="col" className="w-[120px] py-3">
                                    Level
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <MyCourseRow />
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    )
}