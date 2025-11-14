//type aliases
// with Tupules
type Rgb = [number, number, number]

function getRandomColor(): Rgb {
    const r = Math.floor(Math.random() * 255)
    const g = Math.floor(Math.random() * 255)
    const b = Math.floor(Math.random() * 225)

    return [r,g,b]
}

const color1 = getRandomColor()
const color2 = getRandomColor()
console.log(color1, color2)

//with Object literals

type User = {
    name: string
    score: number
}

const user1: User = {
    name: "Yemi",
    score: 85
} 

function userInfo(user: User) : void {
    console.log(`${user.name} has a score of ${user.score}`)
}

userInfo(user1)
userInfo({name: "Angel", score: 78})