import { CollectionConfig } from 'payload/types'
import payload from 'payload'

const Categories : CollectionConfig = {
  slug: 'category',
  access : {
    read : () => true,
    update : () => true,
    delete : () => true,
    create : () => true
  },
  hooks: {
    afterOperation: [
      async (args) => {
        if (args.operation == "create") {
          payload.create({
            collection: "logs",
            data: {
              collect: "Category",
              action: "Create",
              timestamp: new Date(),
            },
          });
        } else if (args.operation == "update") {
          payload.create({
            collection: "logs",
            data: {
              collect: "Category",
              action: "Update",
              timestamp: new Date(),
            }
          });
        } else if (args.operation == "delete") {
          payload.create({
            collection: "logs",
            data: {
              collect: "Category",
              action: "Delete",
              timestamp: new Date(),
            }
          });
        }
      },
    ],
  },
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      label: 'Category-Name',
      type: 'text',
      required: true,
    },
  ],
}

export default Categories