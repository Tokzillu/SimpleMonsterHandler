import { getRandomIntInclusive } from "./utilities.js"
import { v4 as uuidv4 } from "uuid"

enum elements {
    earth = `Earth`,
    wind = `Wind`,
    water = `Water`,
    energy = `Energy`,
    fire = `Fire`,
    spirit = `Spirit`,
    shadow = `Shadow`,
    nature = `Nature`
}
//  {Stamina, Stability, Resilience, fertility(for breeding purposes), teamwork}
enum stats {
    strength = 'Strength',
    teamwork = 'Teamwork',
    mutationStability = 'Mutation Stability',
    fertility = ' Fertility',
    stamina = 'Stamina',
    cuteness = 'Cuteness',
    intelligence = 'Intelligence',


}

interface ICreature {
    uuid: string
    name: string
    species: string
    birthdate: Date
    elementValues: Record<elements, number>
    type: elements
    skills: string
    stats: number
    happiness: number
}

interface ISpecies {
    name: string
    type: elements
    stats: number
}

function generateCreature(): ICreature {
    return {
        uuid: uuidv4(),
        name: "",
        species: "",
        birthdate: new Date(),
        elementValues: {
            Earth : Math.random(),
            Wind : Math.random(),
            Water : Math.random(),
            Energy : Math.random(),
            Fire : Math.random(),
            Spirit : Math.random(),
            Shadow : Math.random(),
            Nature : Math.random(),
        },
        type: ,
        skills: "",
        stats: 0,
        happiness: 0,
    }
}

function printCreature(creature: ICreature): void {
    console.log(`${creature.name}`);
}
let creature = generateCreature(

)

printCreature(creature)