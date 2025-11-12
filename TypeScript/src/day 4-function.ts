//functions

function addNumbers(a: number, b: number) : number {
    return a + b
}

const subtractNumbers = (a: number, b: number): number => {
    return a - b
}

addNumbers(1 ,1)
subtractNumbers(2, 5)

function addList(items: number[]) {
    const total = items.reduce((item, sum) => item + sum, 0)
    console.log(total)
}
addList([12, 3, 4, 13, 44])

function greeting(name: string, greeting: string): string{
    return `${greeting}, ${name}`
}
console.log(greeting("Yemi", "Good evening"))

function findEvenAges(ages: number[]) {
    const evenAges = ages.filter(age => age % 2 === 0)
    console.log(evenAges)
}

findEvenAges([12, 15, 21, 34, 19, 22])