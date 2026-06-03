import type { CollectionConfig } from 'payload'
import { isAuthenticated } from './access/authenticated'
import { isAdminOrEditor } from './access/adminOrEditor'
import { slugField } from 'payload'

export const Tags: CollectionConfig = {
  slug: 'tags',

  admin: {
    useAsTitle: 'title',
    group: 'Taxonomy',
  },

  access: {
    read: (User) => isAuthenticated(User),
    create: (User) => isAdminOrEditor(User),
    update: (User) => isAdminOrEditor(User),
    delete: (User) => isAdminOrEditor(User),
  },

  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      localized: true,
    },

    slugField({
      useAsSlug: 'title',
      localized: true,
    }),
  ],
}
