export interface Question {
    trebles: QuestionNotes[]
    basses: QuestionNotes[]
}

export interface QuestionNotes {
    notes: QuestionNote[]
    stem: string
}

export interface QuestionNote {
    note: string[]
    suffix: string | null
}
