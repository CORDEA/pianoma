import {Question} from "../Question";

export interface AppState {
    notes: Question
    answer: string[]
    result: string[]
    currentProgress: number
    inProgress: boolean
}
