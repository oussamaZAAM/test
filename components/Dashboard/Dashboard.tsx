import { BsBell } from "react-icons/bs";
import CourseCard from "./CourseCard";
import MyCourseRow from "./MyCourseRow";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/GlobalRedux/store";
import { changeMyCourses } from "@/app/GlobalRedux/Features/myCourses/myCoursesSlice";

const howMuchCoursesToDisplay = 4;

export default function Dashboard() {
    const myCourses = useSelector((state: RootState) => state.myCourses);
    const dispatch = useDispatch();
    useEffect(() => {
        async function fetchCourses(url: string, token: string) {
            try {
                const response = await axios.get(url, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                // Get the data needed ready
                const { data } = response.data;

                for (let i = 0; i < howMuchCoursesToDisplay; i++) {

                    // Change the data
                    dispatch(changeMyCourses({
                        name: data[i].name,
                        created_at: data[i].created_at,
                        order: data[i].order,
                        price: data[i].price,
                        uuid: data[i].uuid
                    }));
                }
            } catch (error) {
                // Handle the error
                alert("API Error");
            }
        }
        fetchCourses("https://api.teachizy.fr/api/v1/trainings", "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvYXBpLnRlYWNoaXp5LmZyXC9hcGlcL3YxXC9sb2dpbiIsImlhdCI6MTY4NTUxOTQyNSwiZXhwIjoxNjg1Nzc4NjI1LCJuYmYiOjE2ODU1MTk0MjUsImp0aSI6IjRtYmVFMjVYYVZwU2oxYUMiLCJzdWIiOiJmMGMzNGM1Yy05NmRhLTRkNzktODhjZC1mMjUzNjNlMTEyZTEiLCJwcnYiOiI4N2UwYWYxZWY5ZmQxNTgxMmZkZWM5NzE1M2ExNGUwYjA0NzU0NmFhIiwidHlwZSI6IlVTRVIifQ.0KB8adSzJBxELVugpF1e-3wrEdD9OtqaWn27aNZOBoo");
    }, [])

    return (
        <div className="flex flex-col justify-start items-start p-4 md:ml-64 w-8/12">

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
            <div className="flex flex-col justify-start items-stretch max-w-[300px] sm:max-w-[412px] md:max-w-[512px] xl:max-w-[768px] my-4 gap-3">
                <span className="text-xl font-semibold text-start my-2">New Courses</span>
                <div className="flex justify-start items-center gap-2 overflow-x-auto">
                    <CourseCard course={{ name: "Geography", lessons: 12 }} />
                    <CourseCard course={{ name: "Javascript", lessons: 1 }} />
                    <CourseCard course={{ name: "Photography", lessons: 0 }} />
                    <CourseCard course={{ name: "Others", lessons: 100 }} />
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
                        <thead className="text-sm font-thin text-zinc-400">
                            <tr>
                                <th scope="col" className="py-3">
                                    Course name
                                </th>
                                <th scope="col" className="w-[60px] md:w-[80px] xl:w-[100px] py-3 text-xs md:text-sm">
                                    Start
                                </th>
                                <th scope="col" className="w-[60px] md:w-[80px] xl:w-[100px] py-3 text-xs md:text-sm">
                                    Order
                                </th>
                                <th scope="col" className="w-[60px] md:w-[80px] xl:w-[100px] py-3 text-xs md:text-sm">
                                    Price
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {myCourses.length > 0
                                ? myCourses.map(course => {
                                    return (
                                        <MyCourseRow key={course.uuid} course={course} />
                                    )
                                })
                                :
                                <tr className="bg-white font-semibold">
                                    <td className="h-8 animate-pulse bg-gray-300 rounded-full py-1.5"></td>
                                    <td className="h-8 animate-pulse bg-gray-300 rounded-full py-1.5 w-[60px] md:w-[80px] xl:w-[100px] mx-2"></td>
                                    <td className="h-8 animate-pulse bg-gray-300 rounded-full py-1.5 w-[60px] md:w-[80px] xl:w-[100px] mx-2"></td>
                                    <td className="h-8 animate-pulse bg-gray-300 rounded-full py-1.5 w-[60px] md:w-[80px] xl:w-[100px] mx-2"></td>
                                </tr>
                            }
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    )
}