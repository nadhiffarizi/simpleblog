import type { Asset, Entry, EntryFields, EntrySkeletonType, ChainModifiers, LocaleCode, EntryFieldTypes } from "contentful";

export interface TypeSimpleBlogFields {
    title: EntryFields.Symbol;
    slug: EntryFields.Symbol;
    author: EntryFields.Symbol;
    category: EntryFields.Symbol;
    article: EntryFields.RichText;
    headlineImage: Asset;
}

export type ITypeSimpleBlog = {
    contentTypeId: 'simpleBlog'
    fields: {
        title: EntryFieldTypes.Symbol;
        slug: EntryFieldTypes.Symbol;
        author: EntryFieldTypes.Symbol;
        category: EntryFieldTypes.Symbol;
        article: EntryFieldTypes.RichText;
    }
}


export interface IContentfulAsset {
    sys: { id: string },
    fields: {
        file: {
            url: string;
            details?: any;
            fileName?: string;
            contentType?: string;
        }
    }
}

export type TypeSimpleBlog = EntrySkeletonType<TypeSimpleBlogFields>;
export type TypeBlogPost<Modifiers extends ChainModifiers,
    Locales extends LocaleCode = LocaleCode> = Entry<TypeSimpleBlog, Modifiers, Locales>;