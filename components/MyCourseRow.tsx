import  { SiMaterialdesignicons } from "react-icons/si";

export default function MyCourseRow() {
    return (
        <tr className="bg-white font-semibold">
            <th scope="row" className="py-1.5 text-gray-900 whitespace-nowrap flex justify-start items-center gap-3">
                <div className="flex justify-center items-center p-4 rounded-xl bg-main-200">
                    <SiMaterialdesignicons className="h-6 w-6 fill-main-500" />
                </div>
                <div className="flex flex-col justify-start items-start gap-1">
                    <span className="">Web Design</span>
                    <span className="text-xs font-medium text-zinc-300">10 lessons</span>
                </div>
            </th>
            <td className="w-[150px] py-1.5">
                May 12
            </td>
            <td className="w-[75px] py-1.5">
                4.8
            </td>
            <td className="w-[120px] py-1.5">
                Elementary
            </td>
        </tr>
    )
}