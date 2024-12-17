import contentfulClient from "../contentful/contentfulClient";
import { TypeCategorySimpleBlog, TypeCategorySimpleBlogFields } from "../contentful/contentfulTypes";
const getCategoriesName = async () => {

    try {
        const data = await contentfulClient.getEntries<TypeCategorySimpleBlog>({
            content_type: "categorySimpleBlog",
        });
        return data

    } catch (error) {
        console.log("Error in fetching all blogs", error)
    }
}

export default getCategoriesName;