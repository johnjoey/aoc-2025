import fs from 'fs'

const INPUT_URL = 'https://adventofcode.com/2025/day/1/input'
const START = 50
const MIN = 0
const MAX = 99

const inputText = fs.readFileSync('./day1/input.txt', 'utf8')

let numberOfZeros = 0

const inputSequence = inputText.split('\n')

let position = START

for (const input of inputSequence) {
    const direction = input.charAt(0)
    const number = input.substring(1)

    console.log('Current position:', position, 'Input:', input, 'Direction:', direction, 'Number:', number)

    if (direction === 'R') {
        position -= Number(number)
    } else if (direction === 'L') {
        position += Number(number)
    }

    if (position === 0) {
        numberOfZeros++
    } else if (position < 0) {
        position = 99 - position
    } else if (position > 99) {
        position = 0 + 99
    }
}

console.log('Number of times at position 0:', numberOfZeros)
