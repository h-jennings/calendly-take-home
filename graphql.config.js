const path = require("path");
require("dotenv").config({ path: path.join(__dirname, ".env.local") });

module.exports = {
  projects: {
    app: {
      schema: ["./schema.generated.graphql"],
      documents: ["./src/graphql/**/*.ts"],
      extensions: {
        endpoints: {
          default: {
            url: `https://graphql.contentful.com/content/v1/spaces/${
              process.env.CMS_SPACE
            }/environments/${process.env.CMS_ENV ?? "master"}`,
            headers: { Authorization: `Bearer ${process.env.CMS_PROD_TOKEN}` },
          },
        },
      },
    },
  },
};
