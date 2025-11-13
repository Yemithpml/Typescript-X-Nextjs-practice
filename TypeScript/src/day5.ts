//any type
let name: any 
name = "yemi"
name = true
name = 19

//any type in arrays
let student: any[] = [
    {
        name: "Yemi",
        age: 19,
        isCorrect: true
    }
]
console.log(student)

// functions & any
function averageValue(value: any): any {
    return value
}

const greet = averageValue("Hello, Yemi")
const age = averageValue(19)
const isRight = averageValue(true)

console.log(isRight)
console.log(greet)

//useful when migrating a code base from Js to Ts

//Tuples
let file: [string, number, boolean] = ["Yemi", 21, false]
console.log(file)

let hsla: [number, string, string, number]
hsla = [10, "100%", "60%", 100]

//functions with tuples

function useCords(): [number, number] {
    const lat = 21
    const long = 67

    return[lat, long]
}
const [lat, long] = useCords()
console.log(useCords())

//named Tuples
let user: [name: string, isAvailable: boolean]
user = ["Yemith", true]
console.log(user[1])