import {Question, QuestionNotes} from "./Question";
import {Note} from "./Note";
import {NOTES} from "./Constants";

export class NotesGenerator {
    private readonly maxNotes: number
    private readonly maxConcurrency: number

    constructor(maxNotes: number, maxConcurrency: number) {
        this.maxNotes = maxNotes
        this.maxConcurrency = maxConcurrency
    }

    generate(): Question {
        const treble = this.generateNotes(Math.ceil(this.maxConcurrency / 2), true)
        const bassConcurrency = Math.floor(this.maxConcurrency / 2)
        const bass = bassConcurrency === 0 ? null : this.generateNotes(bassConcurrency, false)
        return {
            maxNotes: Math.max(treble.notes.length, bass?.notes?.length ?? 0),
            treble: treble,
            bass: bass
        }
    }

    private generateNotes(maxConcurrency: number, isTreble: boolean): QuestionNotes {
        const isHalf = Math.random() >= 0.7
        const tempo = isHalf ? "h" : "q"
        const numberOfNotes = isHalf ? Math.floor(this.maxNotes / 2) : this.maxNotes
        const notes = Array.from(Array(numberOfNotes).keys()).map(i => {
                const concurrency = Math.floor(Math.random() * maxConcurrency) + 1
                return {
                    concurrentNotes: Array.from(Array(concurrency).keys())
                        .map(_ => NotesGenerator.generateNote(isTreble)),
                    tempo: tempo
                }
            }
        )
        return {
            stem: "up",
            notes: notes
        }
    }

    private static generateNote(isTreble: boolean): Note {
        let pitch = ""
        switch (Math.floor(Math.random() * 3)) {
            case 0:
                pitch = "#"
                break
            case 1:
                pitch = "b"
                break
        }
        const name = NOTES[Math.floor(Math.random() * NOTES.length)]
        const level = Math.floor(Math.random() * 2) + (isTreble ? 4 : 2)
        return new Note(name, pitch, level)
    }
}
