import Image from "next/image";
import { MdArrowForwardIos } from "react-icons/md";

export default function CourseCard() {
    return (
        <div className="flex flex-col justify-start items-center rounded-xl p-3 min-w-[184px] bg-orange-100">
            <div className="flex justify-start items-center rounded-lg py-5 px-8 bg-orange-300">
                <Image
                    src={require("../public/images/geography.png")}
                    width={500}
                    height={500}
                    className="h-20 w-24"
                    alt="Geography"
                />
            </div>
            <span className="text-sm font-semibold text-start my-2 w-full">Geography</span>
            <span className="text-xs font-light text-start mb-2 w-full">12 lessons</span>
            <div className="flex justify-between items-center w-full">
                <div className="relative flex justify-center items-center w-full">
                    <Image
                        src={require("../public/images/avatar 1.png")}
                        width={100}
                        height={100}
                        className="absolute left-0 h-6 w-6 rounded-full"
                        alt="Avatar"
                    />
                    <Image
                        src={require("../public/images/avatar 2.png")}
                        width={100}
                        height={100}
                        className="absolute left-5 h-6 w-6 rounded-full z-10"
                        alt="Avatar"
                    />
                    <Image
                        src={require("../public/images/avatar 3.png")}
                        width={100}
                        height={100}
                        className="absolute left-10 h-6 w-6 rounded-full z-20"
                        alt="Avatar"
                    />
                </div>
                <div className="flex justify-center items-center p-2 bg-orange-300 rounded-lg border-[1.65px] border-dotted border-orange-300 hover:border-orange-100">
                    <MdArrowForwardIos />
                </div>
            </div>
        </div>
    )
}