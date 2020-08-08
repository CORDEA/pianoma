export const START = "START"
export const END = "END"
export const ANSWER = "ANSWER"
export const AUTO = "AUTO"
export const ENABLE_GUIDE = "ENABLE_GUIDE"

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

interface EnableGuideAction {
    type: typeof ENABLE_GUIDE,
    enableGuide: boolean
}

export type AppActionTypes = StartAction | EndAction | AnswerAction | AutoAction | EnableGuideAction
