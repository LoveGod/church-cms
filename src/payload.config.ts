//import { postgresAdapter } from '@payloadcms/db-postgres'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Staff } from './collections/Staff'
import { SermonSeries } from './collections/SemonSeries'
import { Sermons } from './collections/Sermons'
import { Topics } from './collections/Topics'
import { Tags } from './collections/Tags'
import { LegalPages } from './collections/pages/LegalPages'
import { Navigation } from './collections/globals/Navigation'
import { Footer } from './collections/globals/Footer'
import { GlobalSettings } from './collections/globals/GlobalSettings'
import { LandingPages } from './collections/pages/LandingPages'
import { HomepageLayout } from './collections/globals/HomepageLayout'
import { Events } from './collections/Events'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [
    Users,
    Media,
    Staff,
    SermonSeries,
    Sermons,
    Events,
    Topics,
    Tags,
    LandingPages,
    LegalPages,
  ],
  globals: [HomepageLayout, GlobalSettings, Navigation, Footer],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  /*db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL || '',
    },
  }),*/
  db: mongooseAdapter({
    url: process.env.DATABASE_URL || '',
  }),
  sharp,
  plugins: [],
  localization: {
    locales: [
      {
        label: 'English',
        code: 'en',
      },
      {
        label: 'Deutsch',
        code: 'de',
      },
    ],
    defaultLocale: 'en',
    fallback: true,
  },
  cors: {
    origins: ['http://localhost:3000'],
  },
})
