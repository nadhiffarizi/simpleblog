import { Entry } from "contentful";
import { TypeSimpleBlog } from "../contentful/contentfulTypes";

// random number of entries
const getRandomEntries = (arr: Entry<TypeSimpleBlog, undefined, string>[] | undefined, limit: number) => {
    if (arr === undefined) {
        return null
    }

    const arrRandPosts: Entry<TypeSimpleBlog, undefined, string>[] = []
    let randNumbers: number[] = []
    let countPosts: number = 0

    // 5 entries
    if (limit > arr.length) {
        countPosts = arr.length

    } else {
        countPosts = limit

    }

    for (let i = 0; i < countPosts; i++) {
        let randNumber = Math.floor(Math.random() * (arr.length - 1))
        while (randNumbers.includes(randNumber)) {
            randNumber = Math.floor(Math.random() * (arr.length - 1))
        }
        randNumbers.push(randNumber)
        arrRandPosts.push(arr[randNumber])

    }

    return arrRandPosts
}

export default getRandomEntries;