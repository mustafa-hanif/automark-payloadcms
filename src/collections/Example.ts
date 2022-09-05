import { CollectionConfig } from "payload/types";

const Example: CollectionConfig = {
  slug: "example-collection",
  fields: [
    {
      name: "slider", // required
      type: "array", // required
      label: "Image Slider",
      minRows: 2,
      maxRows: 10,
      labels: {
        singular: "Slide",
        plural: "Slides",
      },
      fields: [
        {
          name: "caption",
          type: "text",
        },
      ],
    },
  ],
};

export default Example;
