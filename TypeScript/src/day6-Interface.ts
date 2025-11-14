// Interface

interface Author {
    name: string
    avatar: string
}

const authorInfo: Author = {
    name: "Yemith",
    avatar: "/img/yemith.jpeg"
}

interface Users {
    uid: number
    author: Author
    title: string
    tags: string[]
    create_at: Date
}

const newUser: Users = {
    uid: 1,
    author: authorInfo,
    title: "Introduction",
    tags: ["lifestyle", "tech"],
    create_at: new Date()
}

console.log(newUser)

//dictating how an object looks in terms of the properties it has
//  and the types of those properties

//as function argument types

function createUser(user: Users): void {
    console.log(`Created new user ${user.author.name} and he loves ${user.tags} videos`)
}

createUser(newUser)

//using interface with arrays

let users: Users[] = []
users.push(newUser)