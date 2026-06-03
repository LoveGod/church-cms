import type { GlobalConfig } from 'payload'
import { isAuthenticated } from '../access/authenticated'
import { isAdminOrEditor } from '../access/adminOrEditor'

export const Navigation: GlobalConfig = {
  slug: 'navigation',

  access: {
    read: (User) => isAuthenticated(User),
    update: (User) => isAdminOrEditor(User),
    //create: (User) => isAdminOrEditor(User),
    //delete: (User) => isAdminOrEditor(User),
  },

  fields: [
    {
      name: 'items',
      type: 'array',
      localized: true,
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
        },

        {
          name: 'url',
          type: 'text',
          required: true,
        },

        {
          name: 'openInNewTab',
          type: 'checkbox',
          defaultValue: false,
        },

        {
          name: 'children',
          type: 'array',
          fields: [
            {
              name: 'label',
              type: 'text',
            },
            {
              name: 'url',
              type: 'text',
            },
          ],
        },
      ],
    },
  ],
}
