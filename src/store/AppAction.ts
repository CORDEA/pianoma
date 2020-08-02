export const START = "START"
export const END = "END"
export const ANSWER = "ANSWER"
export const AUTO = "AUTO"

interface StartAction {
    type: typeof START
}

interface EndAction {
    type: typeof END
}

interface AnswerAction {
    type: typeof ANSWER,
    note: string
}

interface AutoAction {
    type: typeof AUTO,
    isAuto: boolean
}

export type AppActionTypes = StartAction | EndAction | AnswerAction | AutoAction
