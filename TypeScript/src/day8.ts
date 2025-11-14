//union types
//To use one or several different types with a variable

let someId: number | string

someId = 1
someId = "2"

let email: string | null = null

email = "yemithcodes@gmail.com"
email = null

type Id = number | string
let newId: Id

newId = 5
newId = "req"
