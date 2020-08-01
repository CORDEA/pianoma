import {Question, QuestionNotes} from "./Question";

export const NOTES = [
    "C",
    "D",
    "E",
    "F",
    "G",
    "A",
    "B"
]

export class NotesGenerator {
    private readonly maxNotes: number
    private readonly maxConcurrency: number

    constructor(maxNotes: number, maxConcurrency: number) {
        this.maxNotes = maxNotes
        this.maxConcurrency = maxConcurrency
    }

    generate(): Question {
        const treble = this.generateNotes(Math.ceil(this.maxConcurrency / 2), true)
        const bass = this.generateNotes(Math.floor(this.maxConcurrency / 2), false)
        return {
            maxNotes: Math.max(treble.notes.length, bass.notes.length),
            trebles: [treble],
            basses: [bass]
        }
    }

    private generateNotes(maxConcurrency: number, isTreble: boolean): QuestionNotes {
        const isHalf = Math.random() >= 0.7
        const suffix = isHalf ? "h" : "q"
        const numberOfNotes = isHalf ? Math.floor(this.maxNotes / 2) : this.maxNotes
        const notes = Array.from(Array(numberOfNotes).keys()).map(i => {
                const concurrency = Math.floor(Math.random() * maxConcurrency) + 1
                return {
                    note: Array.from(Array(concurrency).keys())
                        .map(_ => NotesGenerator.generateNote(isTreble)),
                    suffix: i === 0 ? suffix : null
                }
            }
        )
        return {
            stem: "up",
            notes: notes
        }
    }

    private static generateNote(isTreble: boolean): string {
        let mark
        switch (Math.floor(Math.random() * 3)) {
            case 0:
                mark = ""
                break
            case 1:
                mark = "#"
                break
            case 2:
                mark = "b"
                break
        }
        const name = NOTES[Math.floor(Math.random() * NOTES.length)]
        const level = Math.floor(Math.random() * 2) + (isTreble ? 4 : 2)
        return name + mark + level
    }
}
