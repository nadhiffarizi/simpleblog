import type { Asset, Entry, EntryFields, EntrySkeletonType, LocaleCode, ChainModifiers } from "contentful";

export interface TypeCategorySimpleBlogFields {
    name: EntryFields.Symbol;
    description: EntryFields.Symbol;
    headlineCategory: Asset;
}

export type TypeCategorySimpleBlog = EntrySkeletonType<TypeCategorySimpleBlogFields>;
export type TypeBlogPost<Modifiers extends ChainModifiers,
    Locales extends LocaleCode = LocaleCode> = Entry<TypeCategorySimpleBlog, Modifiers, Locales>;
