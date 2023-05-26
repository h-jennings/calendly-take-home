import { gql } from "graphql-request";
import { SEO_FRAGMENT } from "../fragments/seo.fragments";

export const GET_SEO = gql`
  query getSeo($id: String!) {
    metadataSeo(id: $id) {
      ...SeoFragment
    }
  }
  ${SEO_FRAGMENT}
`;
