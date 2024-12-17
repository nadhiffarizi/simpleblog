import type { Asset, Entry, EntryFields, EntrySkeletonType } from "contentful";

export interface TypeBlogPostFields {
    title: EntryFields.Symbol;
    slug?: EntryFields.Symbol;
    body: EntryFields.RichText;
    image: Asset;
}

export type TypeBlogPost = EntrySkeletonType<TypeBlogPostFields>;
