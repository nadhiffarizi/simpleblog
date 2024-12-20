import { Entry } from "contentful";
import { TypeCategorySimpleBlog, TypeSimpleBlog } from "../../../contentful/contentfulTypes";

interface IPagePosts {
    featuredPost?: Entry<TypeSimpleBlog, undefined, string> | null | undefined;
    randPosts?: Entry<TypeSimpleBlog, undefined, string>[] | null;
    allPosts?: Entry<TypeSimpleBlog, undefined, string>[] | null;
    categoryNames?: Entry<TypeCategorySimpleBlog, undefined, string>[] | null;

}

export default IPagePosts;