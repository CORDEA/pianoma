import {Question} from "../Question"

export const START = 'START'
export const END = 'END'
export const ANSWER = 'ANSWER'

interface StartAction {
    type: typeof START,
    notes: Question
}

interface EndAction {
    type: typeof END
}

interface AnswerAction {
    type: typeof ANSWER,
    note: string
}

export type AppActionTypes = StartAction | EndAction | AnswerAction
