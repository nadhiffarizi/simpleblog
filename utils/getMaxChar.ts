const getMaxChar = (str: string | undefined, maxCharCount: number) => {

    if (str === undefined) {
        return "Empty Text"
    }

    let reviseStr = ""
    if (str.length > maxCharCount) {
        reviseStr = str.substring(0, maxCharCount - 5) // adding ...
        reviseStr = reviseStr + "..."
    } else {
        reviseStr = str
    }

    return reviseStr

}

export default getMaxChar;