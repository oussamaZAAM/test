import HomeworkProgress from "./HomeworkProgress"

function Homework() {
    return (
        <>
            {/* Homework Progress */}
            <div className="flex justify-start items-center w-full mb-4 mt-6">
                <span className="text-2xl font-semibold text-start">Homework Progress</span>
            </div>
            <div className="flex flex-col justify-start items-stretch gap-2 w-full">
                <HomeworkProgress clicked={true} />
                <HomeworkProgress clicked={false} />
            </div>
        </>
    )
}

export default Homework