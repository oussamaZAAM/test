import { MdArrowForwardIos } from 'react-icons/md';
import CircularProgressBar from './CircularProgressBar';

interface ProgressSpinnerProps {
    clicked: boolean;
  }

const HomeworkProgress: React.FC<ProgressSpinnerProps> = ({ clicked }) => {
    return (
        <div className={"flex justify-between items-center rounded-lg px-3 py-5 w-full "+(clicked ? "text-white bg-main-500" : "text-black bg-white shadow")}>
            <div className="flex justify-start items-center gap-2">
                <CircularProgressBar percentage={77} clicked={clicked} />
                <div className="flex flex-col justify-start items-start gap-1">
                    <span className="font-bold">Styling with CSS</span>
                    <span className="text-xs font-semibold">12 lessons</span>
                </div>
            </div>
            <div className="flex justify-center items-center">
                <MdArrowForwardIos />
            </div>
        </div>
    )
}

export default HomeworkProgress