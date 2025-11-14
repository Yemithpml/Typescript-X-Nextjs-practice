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

//Union type pitfall

function swapType(id: Id) : Id {
    //can only use props and methods common to
    //both number and string types
    //parseInt(id) is not allowed

    //parseInt(id)

    return id
}

//Type guards
//checking the type before trying to execute the code

type UId = string | number

function swapUidType(uid: UId): UId {
    if (typeof uid === "string") {
        //can now use string methods
        return parseInt(uid)
    } else {
        // can use number methods and properties
        return uid.toString(uid)
    }
}

const uidOne = swapUidType(1)