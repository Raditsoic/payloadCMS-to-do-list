import { CollectionConfig } from "payload/types";

const Logs: CollectionConfig = {
  slug: "logs",
  admin: {
    useAsTitle: "log",
  },
  access: {
    create:() => true,
    read: () => true,
  },
  fields: [
    {
      name: 'collect',
      label: "Collection",
      type: "text",
      required: true,
    },
    {
      name: "timestamp",
      type: "date",
      required : true
    },
    {
      name: "action",
      label: "Action",
      type: "text",
      required: true
    }
  ],
};

export default Logs;

