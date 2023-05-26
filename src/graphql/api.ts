import { GraphQLClient } from "graphql-request";
import { getSdk } from "./generated/cms.generated";

const CMS_URL = `https://graphql.contentful.com/content/v1/spaces/${
  process.env.CMS_SPACE ?? ""
}/environments/${process.env.CMS_ENV ?? "master"}`;

const getAuthHeader = (preview: boolean) => {
  return `Bearer ${
    !preview ? process.env.CMS_PROD_TOKEN! : process.env.CMS_PREVIEW_TOKEN!
  }`;
};

const client = (preview = false) =>
  new GraphQLClient(CMS_URL, {
    headers: {
      Authorization: getAuthHeader(preview),
    },
  });

export const sdk = (preview = false) => getSdk(client(preview));
