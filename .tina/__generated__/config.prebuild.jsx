// .tina/config.ts
import { defineStaticConfig } from "tinacms";
var branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";
var config_default = defineStaticConfig({
  branch,
  clientId: null,
  // Get this from tina.io
  token: null,
  // Get this from tina.io
  build: {
    outputFolder: "admin",
    publicFolder: "public"
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public"
    }
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "src/content/posts",
        format: "md",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true
          },
          {
            type: "string",
            name: "description",
            label: "Description"
          },
          {
            type: "image",
            name: "heroImage",
            label: "Hero Image"
          },
          {
            type: "datetime",
            name: "pubDate",
            label: "Publish Date",
            ui: {
              dateFormat: "DD MMMM YYYY"
            }
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
            templates: [
              {
                name: "Counter",
                label: "Counter",
                fields: [
                  {
                    name: "variableExample",
                    label: "Variable Example",
                    type: "string"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        name: "link",
        label: "Links",
        path: "src/content/links",
        format: "json",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true
          },
          {
            type: "string",
            name: "url",
            label: "URL",
            required: true
          },
          {
            type: "string",
            name: "description",
            label: "Description"
          }
        ]
      },
      {
        name: "settings",
        label: "Global settings",
        path: "src/content/settings",
        format: "md",
        fields: [
          {
            type: "string",
            name: "type",
            label: "Type",
            options: [
              { value: "footer", label: "Footer" },
              { value: "header", label: "Header" }
            ],
            ui: {
              component: "hidden"
            },
            required: true
          },
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true
          }
        ],
        ui: {
          allowedActions: {
            create: false,
            delete: false
          }
        }
      }
    ]
  }
});
export {
  config_default as default
};
