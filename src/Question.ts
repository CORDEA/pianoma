export interface Question {
    maxNotes: number
    treble: QuestionNotes
    bass: QuestionNotes | null
}

export interface QuestionNotes {
    notes: QuestionNote[]
    stem: string
}

export interface QuestionNote {
    note: string[]
    suffix: string | null
}
