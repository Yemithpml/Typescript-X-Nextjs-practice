//Arrays

let names: string[] = ["Yemi", "Victor", "Angel"]
let ages: number[] = [22, 19, 17, 21]

names.push("Tiara")
ages.push(20)

//Type inference with arrays

let cars = ["BMW", "Honda", "Porshe", "CyberTruck"]
cars.push("Camry")

let car = cars[0]

let Students = ["Cris", 19, true]
let student = Students[1]

//Object Literals

let user: {fName: string, age: number, passed: boolean} = {
    fName: "Yemi",
    age: 19,
    passed: true
}

user.fName = "Vic"
user.age = 21
user.passed = false

//Type inference with object literals
let tasks = {
    name: "Clean",
    id: 1,
    isDone: false,
}

tasks.name = "learn"
tasks.id = 2
tasks.isDone = true

const task = tasks.name
