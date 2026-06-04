import type { CollectionConfig } from 'payload'
import { isAuthenticated } from '../access/authenticated'
import { isAdminOrEditor } from '../access/adminOrEditor'
import { slugField } from 'payload'
import { Hero, CTA, ScriptureQuote, RichText, SermonHighlight, EventHighlight } from '../../blocks'

export const LandingPages: CollectionConfig = {
  slug: 'landing-pages',

  defaultPopulate: {
    title: true,
    slug: true,
  },

  admin: {
    useAsTitle: 'title',
    group: 'Pages',
    defaultColumns: ['title', 'slug', 'updatedAt'],
  },

  versions: {
    drafts: {
      autosave: true,
      schedulePublish: true,
    },
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

    {
      type: 'tabs',
      tabs: [
        {
          fields: [
            {
              name: 'hero',
              type: 'blocks',
              blocks: [Hero],
            },
          ],
          label: 'Hero',
        },
        {
          fields: [
            {
              name: 'layout',
              type: 'blocks',
              localized: true,
              blocks: [CTA, ScriptureQuote, RichText, SermonHighlight, EventHighlight],
              required: true,
              admin: {
                initCollapsed: true,
              },
            },
          ],
          label: 'Content',
        },
        {
          fields: [
            {
              name: 'metaTitle',
              type: 'text',
              localized: true,
            },
            {
              name: 'metaDescription',
              type: 'textarea',
              localized: true,
            },
            {
              name: 'ogImage',
              type: 'upload',
              relationTo: 'media',
            },
          ],
          label: 'SEO',
        },
      ],
    },
    /*{
      name: 'heroImage',
      type: 'upload',
      relationTo: 'media',
    },*/
  ],
}
