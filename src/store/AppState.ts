import {Question} from "../Question";

export interface AppState {
    notes: Question
    answer: string[]
    result: string[]
    numberOfAnswers: number
    numberOfCorrectAnswers: number
    currentProgress: number
    inProgress: boolean,
    isAuto: boolean,
    enableGuide: boolean
}
