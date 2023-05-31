import {
  Options,
  documentToReactComponents,
} from "@contentful/rich-text-react-renderer";
import { BLOCKS, Document } from "@contentful/rich-text-types";
import { Text } from "./text";

interface ContentfulRichTextProps {
  json: Document | undefined;
  options?: Options;
}

export const ContentfulRichText = ({
  json,
  options = {},
}: ContentfulRichTextProps) => {
  if (!json) return null;

  const mergedOptions: Options = {
    renderNode: {
      ...DEFAULT_OPTIONS.renderNode,
      ...options.renderNode,
    },
    renderMark: {
      ...DEFAULT_OPTIONS.renderMark,
      ...options.renderMark,
    },
  };

  return <>{documentToReactComponents(json, mergedOptions)}</>;
};
const DEFAULT_OPTIONS: Options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (_node, children) => (
      <Text as="p" prose="true">
        {children}
      </Text>
    ),
  },
};
