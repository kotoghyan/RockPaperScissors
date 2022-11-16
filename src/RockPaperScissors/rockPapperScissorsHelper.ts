export type SelectionsType = {
    name: string,
    emoji: string,
    beats: string,
    id:number

}
export const SELECTIONS:Array<SelectionsType> = [
    {
        name: 'rock',
        emoji: '✊',
        beats: 'scissors',
        id: 0
    },
    {
        name: 'paper',
        emoji: '✋',
        beats: 'rock',
        id: 1
    },
    {
        name: 'scissors',
        emoji: '✌',
        beats: 'paper',
        id: 2
    }
]

