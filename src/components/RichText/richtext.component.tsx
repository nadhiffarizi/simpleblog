import * as React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import {
  BLOCKS,
  INLINES,
  Document as RichTextDocument,
} from "@contentful/rich-text-types";

export default function RichText({
  document,
}: {
  document: RichTextDocument | undefined;
}) {
  if (!document) return null;
  const RICHTEXT_OPTIONS = {
    renderNode: {
      [BLOCKS.DOCUMENT]: (node: any, children: React.ReactNode) => {
        return (
          <div className="w-full h-full leading-relaxed text-justify">
            {children}
          </div>
        );
        {
          /**div for article */
        }
      },
      [BLOCKS.HEADING_2]: (node: any, children: React.ReactNode) => {
        return (
          <h2 className="text-xl text-black my-2 leading-normal">{children}</h2>
        );
      },
      [BLOCKS.PARAGRAPH]: (node: any, children: React.ReactNode) => {
        return <p className="my-4">{children}</p>;
      },
      [INLINES.HYPERLINK]: (node: any, children: React.ReactNode) => {
        return <a className="text-blue-700 font-semibold ">{children}</a>;
      },
    },
  };

  return <>{documentToReactComponents(document, RICHTEXT_OPTIONS)}</>;
}
