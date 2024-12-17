import contentfulClient from "../contentful/contentfulClient";
import { ITypeSimpleBlog } from "../contentful/contentfulTypes/TypeSimpleBlog";

const getPostsByCategory = async (category: string) => {

    try {
        const data = await contentfulClient.getEntries<ITypeSimpleBlog>({
            content_type: "simpleBlog",
            limit: 5,
            "fields.category": category
        })
        return data

    } catch (error) {
        console.log(error)
    }
}

export default getPostsByCategory;