import { Entry } from "contentful";
import contentfulClient from "../contentful/contentfulClient";
import { TypeSimpleBlog, TypeSimpleBlogFields } from "../contentful/contentfulTypes";
const getArticle = async (slug: string) => {

    try {
        const data = await contentfulClient.getEntries<TypeSimpleBlog>({
            content_type: "simpleBlog",
            limit: 1,
            "query": slug
        });
        return data

    } catch (error) {
        console.log(error)
    }
}

export default getArticle;