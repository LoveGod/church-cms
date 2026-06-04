import type { CollectionConfig } from 'payload'
import { isAdminOrEditor } from './access/adminOrEditor'
import { isAuthenticated } from './access/authenticated'
import { slugField } from 'payload'

export const Sermons: CollectionConfig = {
  slug: 'sermons',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'speaker', 'publishedDate', '_status'],
    group: 'Content',
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
    // -------------------
    // Basic Information
    // -------------------
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
    /*{
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      localized: true,
      admin: {
        position: 'sidebar',
      },
      hooks: {
        beforeValidate: [
          ({ value, data }) => {
            if (value) return value

            return data?.title
              ?.toLowerCase()
              .replace(/ /g, '-')
              .replace(/[^\w-]+/g, '')
          },
        ],
      },
    },*/
    {
      name: 'excerpt',
      type: 'textarea',
      localized: true,
    },
    {
      name: 'publishedDate',
      type: 'date',
      required: true,
      admin: {
        date: {
          pickerAppearance: 'dayAndTime',
        },
      },
    },

    // -------------------
    // Speaker & Series
    // -------------------
    {
      label: 'Preacher & Series',
      type: 'collapsible', // required
      admin: {
        initCollapsed: true,
      },
      fields: [
        {
          name: 'speaker',
          type: 'relationship',
          relationTo: 'staff',
          required: true,
        },
        {
          name: 'series',
          type: 'relationship',
          relationTo: 'sermon-series',
        },
      ],
    },

    // -------------------
    // Media
    // -------------------
    {
      label: 'Media',
      type: 'collapsible', // required
      admin: {
        initCollapsed: true,
      },
      fields: [
        {
          name: 'featuredImage',
          type: 'upload',
          relationTo: 'media',
        },
        {
          name: 'videoUrl',
          type: 'text',
          label: 'Video URL (YouTube, Vimeo, etc.)',
        },
        {
          name: 'audioUrl',
          type: 'text',
          label: 'Audio URL',
        },
      ],
    },

    // -------------------
    // Content
    // -------------------
    {
      label: 'Content',
      type: 'collapsible', // required
      admin: {
        initCollapsed: true,
      },
      fields: [
        {
          name: 'content',
          type: 'richText',
          required: true,
          localized: true,
        },
        {
          name: 'notes',
          type: 'richText',
          localized: true,
        },
        {
          name: 'transcript',
          type: 'richText',
          localized: true,
        },
      ],
    },
    // -------------------
    // Scripture References
    // -------------------
    {
      name: 'scriptureReferences',
      type: 'array',
      fields: [
        {
          name: 'book',
          type: 'text',
          required: true,
        },
        {
          name: 'chapter',
          type: 'number',
          required: true,
        },
        {
          name: 'verseStart',
          type: 'number',
          required: true,
        },
        {
          name: 'verseEnd',
          type: 'number',
        },
      ],
    },
    // -------------------
    // Topics & Tags
    // -------------------
    {
      label: 'Topics & Tags',
      type: 'collapsible', // required
      admin: {
        initCollapsed: true,
      },
      fields: [
        {
          name: 'topics',
          type: 'relationship',
          relationTo: 'topics',
          hasMany: true,
        },
        {
          name: 'tags',
          type: 'relationship',
          relationTo: 'tags',
          hasMany: true,
        },
      ],
    },
    // -------------------
    // SEO
    // -------------------
    {
      label: 'SEO',
      type: 'collapsible', // required
      admin: {
        initCollapsed: true,
      },
      fields: [
        {
          name: 'seo',
          type: 'group',
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
        },
      ],
    },
  ],
}
