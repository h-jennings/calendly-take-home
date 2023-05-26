import { gql } from "graphql-request";

export const SEO_FRAGMENT = gql`
  fragment SeoInfo on MetadataSeo {
    title
    description
    hideFromSearch
  }
`;
