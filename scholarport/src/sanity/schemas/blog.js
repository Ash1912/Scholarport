// src/sanity/schemas/blog.js
export default {
    name: "blog",
    title: "Blog",
    type: "document",
    fields: [
      {
        name: "title",
        type: "string",
      },
      {
        name: "content",
        type: "text",
      },
      {
        name: "slug",
        type: "slug",
        options: { source: "title" },
      },
    ],
  };
  