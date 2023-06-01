import Image from "next/image";
import { MdArrowForwardIos } from "react-icons/md";
import Course from "@/interfaces/Course";

interface CourseCardProps {
    course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
    switch (course.name) {
        case "Geography":
            return (
                <div className="flex flex-col justify-start items-center rounded-xl p-3 min-w-[184px] cursor-pointer bg-orange-100">
                    <div className="flex justify-start items-center rounded-lg py-5 px-8 bg-orange-300"><Image
                        src={require("../../public/images/geography.png")}
                        width={500}
                        height={500}
                        className="h-20 w-24"
                        alt="Geography"
                    />
                    </div>
                    <span className="text-sm font-semibold text-start my-2 w-full">{course.name}</span>
                    <span className="text-xs font-light text-start mb-2 w-full">{course.lessons} lesson{(course.lessons > 1) ? "s" : ""}</span>
                    <div className="flex justify-between items-center w-full">
                        <div className="relative flex justify-center items-center w-full">
                            <Image
                                src={require("../../public/images/avatar 1.png")}
                                width={100}
                                height={100}
                                className="absolute left-0 h-6 w-6 rounded-full"
                                alt="Avatar"
                            />
                            <Image
                                src={require("../../public/images/avatar 2.png")}
                                width={100}
                                height={100}
                                className="absolute left-5 h-6 w-6 rounded-full z-10"
                                alt="Avatar"
                            />
                            <Image
                                src={require("../../public/images/avatar 3.png")}
                                width={100}
                                height={100}
                                className="absolute left-10 h-6 w-6 rounded-full z-20"
                                alt="Avatar"
                            />
                        </div>
                        <div className="flex justify-center items-center p-2 rounded-lg border-[1.65px] border-dotted bg-orange-300 border-orange-300 hover:bg-orange-100">
                            <MdArrowForwardIos />
                        </div>
                    </div>
                </div>
            )
        case "Javascript":
            return (
                <div className="flex flex-col justify-start items-center rounded-xl p-3 min-w-[184px] cursor-pointer bg-violet-100">
                    <div className="flex justify-start items-center rounded-lg py-5 px-8 bg-violet-300">
                        <Image
                            src={require("../../public/images/javascript.png")}
                            width={500}
                            height={500}
                            className="h-20 w-24"
                            alt="Javascript"
                        />
                    </div>
                    <span className="text-sm font-semibold text-start my-2 w-full">{course.name}</span>
                    <span className="text-xs font-light text-start mb-2 w-full">{course.lessons} lesson{(course.lessons > 1) ? "s" : ""}</span>
                    <div className="flex justify-between items-center w-full">
                        <div className="relative flex justify-center items-center w-full">
                            <Image
                                src={require("../../public/images/avatar 1.png")}
                                width={100}
                                height={100}
                                className="absolute left-0 h-6 w-6 rounded-full"
                                alt="Avatar"
                            />
                            <Image
                                src={require("../../public/images/avatar 2.png")}
                                width={100}
                                height={100}
                                className="absolute left-5 h-6 w-6 rounded-full z-10"
                                alt="Avatar"
                            />
                            <Image
                                src={require("../../public/images/avatar 3.png")}
                                width={100}
                                height={100}
                                className="absolute left-10 h-6 w-6 rounded-full z-20"
                                alt="Avatar"
                            />
                        </div>
                        <div className="flex justify-center items-center p-2 rounded-lg border-[1.65px] border-dotted bg-violet-300 border-violet-300 hover:bg-violet-100">
                            <MdArrowForwardIos />
                        </div>
                    </div>
                </div>
            )
        case "Photography":
            return (
                <div className="flex flex-col justify-start items-center rounded-xl p-3 min-w-[184px] cursor-pointer bg-cyan-100">
                    <div className="flex justify-start items-center rounded-lg py-5 px-8 bg-cyan-300">
                        <Image
                            src={require("../../public/images/photography.png")}
                            width={500}
                            height={500}
                            className="h-20 w-24"
                            alt="Photography"
                        />
                    </div>
                    <span className="text-sm font-semibold text-start my-2 w-full">{course.name}</span>
                    <span className="text-xs font-light text-start mb-2 w-full">{course.lessons} lesson{(course.lessons > 1) ? "s" : ""}</span>
                    <div className="flex justify-between items-center w-full">
                        <div className="relative flex justify-center items-center w-full">
                            <Image
                                src={require("../../public/images/avatar 1.png")}
                                width={100}
                                height={100}
                                className="absolute left-0 h-6 w-6 rounded-full"
                                alt="Avatar"
                            />
                            <Image
                                src={require("../../public/images/avatar 2.png")}
                                width={100}
                                height={100}
                                className="absolute left-5 h-6 w-6 rounded-full z-10"
                                alt="Avatar"
                            />
                            <Image
                                src={require("../../public/images/avatar 3.png")}
                                width={100}
                                height={100}
                                className="absolute left-10 h-6 w-6 rounded-full z-20"
                                alt="Avatar"
                            />
                        </div>
                        <div className="flex justify-center items-center p-2 rounded-lg border-[1.65px] border-dotted bg-cyan-300 border-cyan-300 hover:bg-cyan-100">
                            <MdArrowForwardIos />
                        </div>
                    </div>
                </div>
            )
        default:
            return (
                <div className="flex flex-col justify-start items-center rounded-xl p-3 min-w-[184px] cursor-pointer bg-zinc-100">
                    <div className="flex justify-start items-center rounded-lg py-5 px-8 bg-zinc-300">
                        <Image
                            src={require("../../public/images/logo.png")}
                            width={500}
                            height={500}
                            className="h-20 w-24"
                            alt="Photography"
                        />
                    </div>
                    <span className="text-sm font-semibold text-start my-2 w-full">{course.name}</span>
                    <span className="text-xs font-light text-start mb-2 w-full">{course.lessons} lesson{(course.lessons > 1) ? "s" : ""}</span>
                    <div className="flex justify-between items-center w-full">
                        <div className="relative flex justify-center items-center w-full">
                            <Image
                                src={require("../../public/images/avatar 1.png")}
                                width={100}
                                height={100}
                                className="absolute left-0 h-6 w-6 rounded-full"
                                alt="Avatar"
                            />
                            <Image
                                src={require("../../public/images/avatar 2.png")}
                                width={100}
                                height={100}
                                className="absolute left-5 h-6 w-6 rounded-full z-10"
                                alt="Avatar"
                            />
                            <Image
                                src={require("../../public/images/avatar 3.png")}
                                width={100}
                                height={100}
                                className="absolute left-10 h-6 w-6 rounded-full z-20"
                                alt="Avatar"
                            />
                        </div>
                        <div className="flex justify-center items-center p-2 rounded-lg border-[1.65px] border-dotted bg-zinc-300 border-zinc-300 hover:bg-zinc-100">
                            <MdArrowForwardIos />
                        </div>
                    </div>
                </div>
            )
    }
}