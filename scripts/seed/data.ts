import { paragraph } from './rich-text'
import type { SeedImage } from './media'

export const seedImages: SeedImage[] = [
  {
    key: 'hero-welcome',
    alt: 'Congregation worshipping together in a bright sanctuary',
    width: 1920,
    height: 1080,
    color: '#1e3a5f',
    label: 'Welcome Home',
  },
  {
    key: 'hero-visit',
    alt: 'Friendly church entrance with open doors',
    width: 1920,
    height: 1080,
    color: '#2d3748',
    label: 'Plan Your Visit',
  },
  {
    key: 'cta-new-here',
    alt: 'People chatting over coffee after a service',
    width: 1920,
    height: 800,
    color: '#234e52',
    label: 'New Here?',
  },
  {
    key: 'og-welcome',
    alt: 'Open Bible on a wooden table with warm light',
    width: 1200,
    height: 630,
    color: '#744210',
    label: 'Welcome',
  },
  {
    key: 'og-visit',
    alt: 'Church building exterior on a sunny morning',
    width: 1200,
    height: 630,
    color: '#553c9a',
    label: 'Visit Us',
  },
  {
    key: 'series-rooted-in-hope',
    alt: 'Sunrise over calm water symbolizing hope',
    width: 1200,
    height: 675,
    color: '#c05621',
    label: 'Rooted in Hope',
  },
  {
    key: 'series-everyday-discipleship',
    alt: 'Neighbours sharing a meal together',
    width: 1200,
    height: 675,
    color: '#2f855a',
    label: 'Everyday Discipleship',
  },
  {
    key: 'staff-pastor-jordan-lee',
    alt: 'Portrait placeholder for Pastor Jordan Lee',
    width: 800,
    height: 800,
    color: '#4a5568',
    label: 'Pastor Jordan Lee',
  },
  {
    key: 'staff-pastor-alex-morgan',
    alt: 'Portrait placeholder for Pastor Alex Morgan',
    width: 800,
    height: 800,
    color: '#4c51bf',
    label: 'Pastor Alex Morgan',
  },
  {
    key: 'staff-sarah-chen',
    alt: 'Portrait placeholder for Sarah Chen',
    width: 800,
    height: 800,
    color: '#b83280',
    label: 'Sarah Chen',
  },
  {
    key: 'sermon-hope-for-today',
    alt: 'Open hands lifted toward light',
    width: 1200,
    height: 675,
    color: '#dd6b20',
    label: 'Hope for Today',
  },
  {
    key: 'sermon-anchored-in-faith',
    alt: 'Anchor resting on rocky shore',
    width: 1200,
    height: 675,
    color: '#2b6cb0',
    label: 'Anchored in Faith',
  },
  {
    key: 'sermon-prayer-that-moves-mountains',
    alt: 'Mountain peaks above the clouds',
    width: 1200,
    height: 675,
    color: '#6b46c1',
    label: 'Prayer That Moves Mountains',
  },
  {
    key: 'sermon-living-with-expectation',
    alt: 'Path leading toward a bright horizon',
    width: 1200,
    height: 675,
    color: '#d69e2e',
    label: 'Living with Expectation',
  },
  {
    key: 'sermon-love-your-neighbour',
    alt: 'Two neighbours talking across a fence',
    width: 1200,
    height: 675,
    color: '#38a169',
    label: 'Love Your Neighbour',
  },
  {
    key: 'sermon-serving-together',
    alt: 'Volunteers serving food at a community table',
    width: 1200,
    height: 675,
    color: '#e53e3e',
    label: 'Serving Together',
  },
  {
    key: 'event-sunday-worship',
    alt: 'Worship band leading a congregation in song',
    width: 1200,
    height: 675,
    color: '#3182ce',
    label: 'Sunday Worship',
  },
  {
    key: 'event-community-bbq',
    alt: 'Families gathered for an outdoor barbecue',
    width: 1200,
    height: 675,
    color: '#d53f8c',
    label: 'Community BBQ',
  },
  {
    key: 'event-youth-night',
    alt: 'Teens laughing together in a youth room',
    width: 1200,
    height: 675,
    color: '#805ad5',
    label: 'Youth Night',
  },
]

export const seedUsers = [
  {
    email: 'admin@example.test',
    password: 'ChangeMe123!',
    firstName: 'Alex',
    lastName: 'Morgan',
    role: 'admin' as const,
  },
  {
    email: 'editor@example.test',
    password: 'ChangeMe123!',
    firstName: 'Jordan',
    lastName: 'Lee',
    role: 'editor' as const,
  },
]

export const seedStaff = [
  {
    name: 'Pastor Jordan Lee',
    imageKey: 'staff-pastor-jordan-lee',
    generateSlug: false,
    slug: 'pastor-jordan-lee',
    role: 'Lead Pastor',
    email: 'jordan.lee@example.test',
    bio: paragraph('Jordan loves helping people explore Scripture and live it out together.'),
    socialLinks: [{ platform: 'YouTube' as const, url: 'https://youtube.com/@example' }],
  },
  {
    name: 'Pastor Alex Morgan',
    imageKey: 'staff-pastor-alex-morgan',
    generateSlug: false,
    slug: 'pastor-alex-morgan',
    role: 'Associate Pastor',
    email: 'alex.morgan@example.test',
    bio: paragraph('Alex teaches with clarity and warmth, helping people apply the gospel to everyday life.'),
    socialLinks: [{ platform: 'Instagram' as const, url: 'https://instagram.com/example' }],
  },
  {
    name: 'Sarah Chen',
    imageKey: 'staff-sarah-chen',
    generateSlug: false,
    slug: 'sarah-chen',
    role: 'Worship & Creative Arts',
    email: 'sarah.chen@example.test',
    bio: paragraph('Sarah leads our community in worship and helps craft meaningful Sunday gatherings.'),
  },
]

export const seedSeries = [
  {
    title: 'Rooted in Hope',
    imageKey: 'series-rooted-in-hope',
    generateSlug: false,
    slug: 'rooted-in-hope',
    description: paragraph('A four-week journey through the hope we have in Christ.'),
    startDate: '2026-01-04T10:00:00.000Z',
    endDate: '2026-01-25T10:00:00.000Z',
    seo: {
      metaTitle: 'Rooted in Hope sermon series',
      metaDescription: 'Explore a four-week sermon series about lasting hope.',
    },
  },
  {
    title: 'Everyday Discipleship',
    imageKey: 'series-everyday-discipleship',
    generateSlug: false,
    slug: 'everyday-discipleship',
    description: paragraph('Practical teaching on following Jesus in work, home, and community.'),
    startDate: '2026-02-01T10:00:00.000Z',
    endDate: '2026-02-22T10:00:00.000Z',
    seo: {
      metaTitle: 'Everyday Discipleship sermon series',
      metaDescription: 'Learn what it looks like to follow Jesus in ordinary life.',
    },
  },
]

export const seedTopics = [
  {
    title: 'Hope',
    generateSlug: false,
    slug: 'hope',
    description: 'Finding steady hope in Jesus.',
  },
  {
    title: 'Prayer',
    generateSlug: false,
    slug: 'prayer',
    description: 'Growing in honest conversation with God.',
  },
  {
    title: 'Faith',
    generateSlug: false,
    slug: 'faith',
    description: 'Trusting God when the path ahead is uncertain.',
  },
  {
    title: 'Community',
    generateSlug: false,
    slug: 'community',
    description: 'Living out the gospel together as the body of Christ.',
  },
  {
    title: 'Worship',
    generateSlug: false,
    slug: 'worship',
    description: 'Responding to God with our whole lives.',
  },
]

export const seedTags = [
  { title: 'Sunday Service', generateSlug: false, slug: 'sunday-service' },
  { title: 'New Year', generateSlug: false, slug: 'new-year' },
  { title: 'Easter', generateSlug: false, slug: 'easter' },
  { title: 'Youth', generateSlug: false, slug: 'youth' },
  { title: 'Outreach', generateSlug: false, slug: 'outreach' },
]

export type SeedSermon = {
  slug: string
  imageKey: string
  title: string
  excerpt: string
  publishedDate: string
  speakerSlug: string
  seriesSlug?: string
  content: ReturnType<typeof paragraph>
  scriptureReferences: Array<{
    book: string
    chapter: number
    verseStart: number
    verseEnd?: number
  }>
  topicSlugs: string[]
  tagSlugs: string[]
  videoUrl?: string
  seo: {
    metaTitle: string
    metaDescription: string
  }
}

export const seedSermons: SeedSermon[] = [
  {
    slug: 'hope-for-today',
    imageKey: 'sermon-hope-for-today',
    title: 'Hope for Today',
    excerpt: 'God meets us with steadfast hope in every season.',
    publishedDate: '2026-01-04T10:00:00.000Z',
    speakerSlug: 'pastor-jordan-lee',
    seriesSlug: 'rooted-in-hope',
    content: paragraph(
      'Hope is not wishful thinking. It is a confident trust in God\'s faithfulness, even when the next step is unclear.',
    ),
    scriptureReferences: [{ book: 'Romans', chapter: 15, verseStart: 13 }],
    topicSlugs: ['hope'],
    tagSlugs: ['sunday-service', 'new-year'],
    seo: {
      metaTitle: 'Hope for Today',
      metaDescription: 'A sermon about confident hope in God.',
    },
  },
  {
    slug: 'anchored-in-faith',
    imageKey: 'sermon-anchored-in-faith',
    title: 'Anchored in Faith',
    excerpt: 'When storms come, faith keeps us rooted in Christ.',
    publishedDate: '2026-01-11T10:00:00.000Z',
    speakerSlug: 'pastor-jordan-lee',
    seriesSlug: 'rooted-in-hope',
    content: paragraph(
      'Faith is the anchor that holds us steady. It is not the absence of doubt, but the decision to trust God anyway.',
    ),
    scriptureReferences: [{ book: 'Hebrews', chapter: 11, verseStart: 1 }],
    topicSlugs: ['hope', 'faith'],
    tagSlugs: ['sunday-service'],
    seo: {
      metaTitle: 'Anchored in Faith',
      metaDescription: 'Discover how faith anchors us through life\'s storms.',
    },
  },
  {
    slug: 'prayer-that-moves-mountains',
    imageKey: 'sermon-prayer-that-moves-mountains',
    title: 'Prayer That Moves Mountains',
    excerpt: 'God invites us into bold, persistent prayer.',
    publishedDate: '2026-01-18T10:00:00.000Z',
    speakerSlug: 'pastor-alex-morgan',
    seriesSlug: 'rooted-in-hope',
    content: paragraph(
      'Prayer is not a last resort—it is our first response. God hears us and moves in ways we cannot imagine.',
    ),
    scriptureReferences: [{ book: 'James', chapter: 5, verseStart: 16 }],
    topicSlugs: ['prayer', 'faith'],
    tagSlugs: ['sunday-service'],
    seo: {
      metaTitle: 'Prayer That Moves Mountains',
      metaDescription: 'A message on the power and practice of prayer.',
    },
  },
  {
    slug: 'living-with-expectation',
    imageKey: 'sermon-living-with-expectation',
    title: 'Living with Expectation',
    excerpt: 'Hope shapes how we wait, work, and worship.',
    publishedDate: '2026-01-25T10:00:00.000Z',
    speakerSlug: 'pastor-jordan-lee',
    seriesSlug: 'rooted-in-hope',
    content: paragraph(
      'Because Christ is risen, we live with expectation. Every day is an opportunity to see God at work.',
    ),
    scriptureReferences: [{ book: '1 Peter', chapter: 1, verseStart: 3, verseEnd: 5 }],
    topicSlugs: ['hope', 'worship'],
    tagSlugs: ['sunday-service'],
    seo: {
      metaTitle: 'Living with Expectation',
      metaDescription: 'Closing message of the Rooted in Hope series.',
    },
  },
  {
    slug: 'love-your-neighbour',
    imageKey: 'sermon-love-your-neighbour',
    title: 'Love Your Neighbour',
    excerpt: 'Discipleship starts right where you live.',
    publishedDate: '2026-02-01T10:00:00.000Z',
    speakerSlug: 'pastor-alex-morgan',
    seriesSlug: 'everyday-discipleship',
    content: paragraph(
      'Jesus calls us to love our neighbours—not just the people we like, but the ones God places in our path.',
    ),
    scriptureReferences: [{ book: 'Luke', chapter: 10, verseStart: 27 }],
    topicSlugs: ['community'],
    tagSlugs: ['sunday-service', 'outreach'],
    seo: {
      metaTitle: 'Love Your Neighbour',
      metaDescription: 'Practical discipleship in your neighbourhood.',
    },
  },
  {
    slug: 'serving-together',
    imageKey: 'sermon-serving-together',
    title: 'Serving Together',
    excerpt: 'We grow when we serve one another.',
    publishedDate: '2026-02-08T10:00:00.000Z',
    speakerSlug: 'sarah-chen',
    seriesSlug: 'everyday-discipleship',
    content: paragraph(
      'Service is not a duty—it is a delight. When we use our gifts for others, the whole body of Christ flourishes.',
    ),
    scriptureReferences: [{ book: '1 Corinthians', chapter: 12, verseStart: 4, verseEnd: 7 }],
    topicSlugs: ['community', 'worship'],
    tagSlugs: ['sunday-service'],
    seo: {
      metaTitle: 'Serving Together',
      metaDescription: 'How serving shapes us into the image of Christ.',
    },
  },
]

export type SeedEvent = {
  slug: string
  imageKey: string
  title: string
  excerpt: string
  content: ReturnType<typeof paragraph>
  startDate: string
  endDate?: string
  allDay?: boolean
  location: {
    name: string
    address: string
    googleMapsUrl?: string
  }
  registrationUrl?: string
  recurring?: {
    enabled: boolean
    frequency?: 'daily' | 'weekly' | 'monthly'
  }
  seo: {
    metaTitle: string
    metaDescription: string
  }
}

export const seedEvents: SeedEvent[] = [
  {
    slug: 'sunday-worship',
    imageKey: 'event-sunday-worship',
    title: 'Sunday Worship',
    excerpt: 'Gather with us every Sunday for worship, teaching, and community.',
    content: paragraph(
      'Join us for a time of singing, prayer, and teaching from Scripture. All are welcome—come as you are.',
    ),
    startDate: '2026-02-09T09:00:00.000Z',
    endDate: '2026-02-09T11:00:00.000Z',
    location: {
      name: 'Main Sanctuary',
      address: '123 Grace Street, Example City',
      googleMapsUrl: 'https://maps.google.com/?q=123+Grace+Street',
    },
    recurring: { enabled: true, frequency: 'weekly' },
    seo: {
      metaTitle: 'Sunday Worship',
      metaDescription: 'Weekly worship gathering at our church.',
    },
  },
  {
    slug: 'community-bbq',
    imageKey: 'event-community-bbq',
    title: 'Community BBQ',
    excerpt: 'Food, games, and conversation for the whole neighbourhood.',
    content: paragraph(
      'Bring a friend and enjoy an afternoon of food and fellowship. Kids activities and live music included.',
    ),
    startDate: '2026-03-15T14:00:00.000Z',
    endDate: '2026-03-15T18:00:00.000Z',
    location: {
      name: 'Church Lawn',
      address: '123 Grace Street, Example City',
    },
    registrationUrl: 'https://example.test/events/community-bbq',
    seo: {
      metaTitle: 'Community BBQ',
      metaDescription: 'An afternoon of food and fellowship for the neighbourhood.',
    },
  },
  {
    slug: 'youth-night',
    imageKey: 'event-youth-night',
    title: 'Youth Night',
    excerpt: 'An evening of worship, games, and Bible study for teens.',
    content: paragraph(
      'Students in grades 7–12 are invited for worship, small groups, and fun. Snacks provided.',
    ),
    startDate: '2026-02-14T18:30:00.000Z',
    endDate: '2026-02-14T21:00:00.000Z',
    location: {
      name: 'Youth Room',
      address: '123 Grace Street, Example City',
    },
    seo: {
      metaTitle: 'Youth Night',
      metaDescription: 'Weekly gathering for students in grades 7–12.',
    },
  },
]

export const pageContent = paragraph(
  'We are a community learning to follow Jesus, love our neighbours, and serve our city.',
)

export const visitPageContent = paragraph(
  'Whether you are exploring faith for the first time or looking for a church home, we would love to meet you.',
)
