export class Note {
    base: string
    pitch: string
    level: number

    constructor(
        base: string,
        pitch: string,
        level: number
    ) {
        this.base = base
        this.pitch = pitch
        this.level = level
    }

    format(): string {
        return this.base + this.pitch + this.level
    }
}
