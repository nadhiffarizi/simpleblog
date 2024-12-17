import contentfulClient from "../contentful/contentfulClient";
import { TypeSimpleBlog, TypeSimpleBlogFields } from "../contentful/contentfulTypes";
const getAllBlogPosts = async () => {

    try {
        const data = await contentfulClient.getEntries<TypeSimpleBlog>({
            content_type: "simpleBlog",
            limit: 20
        });

        console.log("data in getAllBlogs", data)
        return data


    } catch (error) {
        console.log("Error in fetching all blogs", error)
    }
}

export default getAllBlogPosts;