import { GraphQLClient } from "graphql-request";
import { draftMode } from "next/headers";
import "server-only";
import { getSdk } from "./generated/cms.generated";

const CMS_URL = `https://graphql.contentful.com/content/v1/spaces/${
  process.env.CMS_SPACE ?? ""
}/environments/${process.env.CMS_ENV ?? "master"}`;

const getAuthHeader = () => {
  const { isEnabled } = draftMode();
  return `Bearer ${
    !isEnabled ? process.env.CMS_PROD_TOKEN! : process.env.CMS_PREVIEW_TOKEN!
  }`;
};

const client = () => {
  return new GraphQLClient(CMS_URL, {
    headers: {
      Authorization: getAuthHeader(),
    },
  });
};

export const sdk = () => {
  return getSdk(client());
};
