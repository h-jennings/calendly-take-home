import { gql } from "graphql-request";

export const SEO_FRAGMENT = gql`
  fragment SeoFragment on MetadataSeo {
    title
    description
    hideFromSearch
  }
`;
