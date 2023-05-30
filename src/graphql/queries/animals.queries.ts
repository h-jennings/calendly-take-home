import { gql } from "graphql-request";
import { SEO_FRAGMENT } from "../fragments/seo.fragments";

export const GET_ANIMAL_PAGE = gql`
  query getAnimalPage($slug: String!) {
    pageAnimalCollection(where: { slug: $slug }, limit: 1) {
      items {
        name
        slug
        seo {
          ...SeoInfo
        }
        breedCollection {
          sys {
            id
          }
        }
      }
    }
  }

  ${SEO_FRAGMENT}
`;

export const GET_BREED_COLLECTION = gql`
  query getBreedCollection($id: String!) {
    breedCollection(id: $id) {
      breedsCollection(limit: 6) {
        items {
          sys {
            id
          }
          slug
          breed {
            ... on BreedDog {
              name
              bio {
                json
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_BREED_PAGE = gql`
  query getBreedPage($slug: String!) {
    pageBreedCollection(where: { slug: $slug }, limit: 1) {
      items {
        ...PageBreedInfo
      }
    }
  }
  fragment PageBreedInfo on PageBreed {
    sys {
      id
    }
    slug
    seo {
      ...SeoInfo
    }
    breed {
      ...BreedDogInfo
    }
  }
  fragment BreedDogInfo on BreedDog {
    __typename
    name
    bio {
      json
    }
    lifespan
    friendliness
    shedRate
  }

  ${SEO_FRAGMENT}
`;
