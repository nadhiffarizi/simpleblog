import { TypeSimpleBlog } from "../contentful/contentfulTypes"
import { Entry } from "contentful"

const getRandomEntry = (arr: Entry<TypeSimpleBlog, undefined, string>[] | undefined) => {
    if (arr === undefined) {
        return null
    }
    const arrLength = arr.length
    let randomEntry = Math.floor(Math.random() * (arrLength - 1))
    return arr.at(randomEntry)

}

export default getRandomEntry;