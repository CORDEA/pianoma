import {Notes, RandomNotes} from "./RandomNotes";

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
    generate(maxNotes: number, maxConcurrency: number): RandomNotes {
        return {
            trebles: [this.generateNotes(maxNotes, Math.ceil(maxConcurrency / 2), true)],
            basses: [this.generateNotes(maxNotes, Math.floor(maxConcurrency / 2), false)]
        }
    }

    private generateNotes(maxNotes: number, maxConcurrency: number, isTreble: boolean): Notes {
        const isHalf = Math.random() >= 0.7
        const suffix = isHalf ? "h" : "q"
        const numberOfNotes = isHalf ? Math.floor(maxNotes / 2) : maxNotes
        const notes = Array.from(Array(numberOfNotes).keys()).map(i => {
                const concurrency = Math.floor(Math.random() * maxConcurrency) + 1
                let note = ""
                if (concurrency === 1) {
                    note = NotesGenerator.generateNote(isTreble)
                } else {
                    note = "(" + Array.from(Array(concurrency).keys())
                        .map(_ => NotesGenerator.generateNote(isTreble))
                        .join(" ") + ")"
                }
                if (i === 0) {
                    return note + "/" + suffix
                }
                return note
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
