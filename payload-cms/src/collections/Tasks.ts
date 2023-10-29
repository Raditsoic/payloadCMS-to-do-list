import { CollectionConfig } from 'payload/types'
import payload from 'payload'

const Tasks: CollectionConfig = {
  slug: 'task',
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
              collect: "Task",
              action : "Create",
              timestamp: new Date()
            },
          });
        } else if (args.operation == "update") {
          payload.create({
            collection: "logs",
            data: {
              collect: "Task",
              action : "Update",
              timestamp: new Date()
            },
          });
        } else if (args.operation == "delete") {
          payload.create({
            collection: "logs",
            data: {
              collect: "Task",
              action: "Delete",
              timestamp: new Date()
            },
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
        label: 'Task-Name',
        type: 'text',
        required: true,
    },
    {
        name: 'deadline',
        label: 'Deadline',
        type: 'date',
        admin: {
        date: {
            pickerAppearance: 'dayOnly',
            displayFormat: 'd MMM yyy',
        },
        },
    },
    {
        name: 'category',
        label: 'Category',
        type: 'relationship',
        relationTo: 'category',
        required: true,
    },
    {
        name: 'priority',
        label: 'Priority',
        type: 'radio',
        options: [
            {
              label: 'lowPriority',
              value: 'low',
            },
            {
              label: 'mediumPriority',
              value: 'medium',
            },
            {
                label: 'highPriority',
                value: 'high',
            }
          ],
          defaultValue: 'low', 
          admin: {
            layout: 'horizontal',
          },
    },
    {
        name: 'status',
        label: 'Status',
        type: "select",
        options: ["notCompleted", "Completed"], 
        required: true,
    },
  ],
}

export default Tasks
