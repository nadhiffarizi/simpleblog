import * as React from "react";
import {
  documentToReactComponents,
  Options,
} from "@contentful/rich-text-react-renderer";
import {
  Block,
  BLOCKS,
  INLINES,
  Inline,
  Document as RichTextDocument,
} from "@contentful/rich-text-types";

export default function RichText({
  document,
}: {
  document: RichTextDocument | undefined;
}) {
  if (!document) return null;
  const RICHTEXT_OPTIONS: Options = {
    renderNode: {
      [BLOCKS.DOCUMENT]: (node: Block | Inline, children: React.ReactNode) => {
        return (
          <div className="w-full h-full leading-relaxed text-justify">
            {children}
          </div>
        );
        {
          /**div for article */
        }
      },
      [BLOCKS.HEADING_2]: (node: Block | Inline, children: React.ReactNode) => {
        return (
          <h2 className="text-xl text-black my-2 leading-normal">{children}</h2>
        );
      },
      [BLOCKS.PARAGRAPH]: (node: Block | Inline, children: React.ReactNode) => {
        return <p className="my-4">{children}</p>;
      },
      [INLINES.HYPERLINK]: (
        node: Block | Inline,
        children: React.ReactNode
      ) => {
        return <a className="text-blue-700 font-semibold ">{children}</a>;
      },
    },
  };

  return <>{documentToReactComponents(document, RICHTEXT_OPTIONS)}</>;
}
