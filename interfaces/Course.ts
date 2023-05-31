export default interface Course {
    name: string,
    lessons: number
}

export interface MyCourseState {
    name: string,
    created_at: string,
    order: number,
    price: number,
    uuid: string
}