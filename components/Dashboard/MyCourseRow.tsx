import { MyCourseState } from "@/interfaces/Course";
import { convertStringToDate, formatDateMMDD } from "@/public/utils";
import  { SiMaterialdesignicons } from "react-icons/si";

interface CourseCardProps {
    course: MyCourseState;
}

export default function MyCourseRow ({course}: CourseCardProps) {
    return (
        <tr className="bg-white font-semibold">
            <th scope="row" className="py-1.5 text-gray-900 whitespace-nowrap flex justify-start items-center gap-3">
                <div className="flex justify-center items-center p-4 rounded-xl bg-main-200">
                    <SiMaterialdesignicons className="h-6 w-6 fill-main-500" />
                </div>
                <div className="flex flex-col justify-start items-start gap-1">
                    <span className="truncate whitespace-normal mr-1">{course.name}</span>
                    <span className="text-xs font-medium text-zinc-300">10 lessons</span>
                </div>
            </th>
            <td className="py-1.5 w-[60px] md:w-[80px] xl:w-[100px] text-xs md:text-sm">
                {formatDateMMDD(convertStringToDate(course.created_at))}
            </td>
            <td className="py-1.5 w-[60px] md:w-[80px] xl:w-[100px] text-xs md:text-sm">
                {course.order}
            </td>
            <td className="py-1.5 w-[60px] md:w-[80px] xl:w-[100px] text-xs md:text-sm">
                {course.price} $
            </td>
        </tr>
    )
}