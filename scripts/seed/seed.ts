import type { Payload } from 'payload'
import {
  pageContent,
  seedEvents,
  seedImages,
  seedSeries,
  seedSermons,
  seedStaff,
  seedTags,
  seedTopics,
  seedUsers,
  visitPageContent,
} from './data'
import { seedMedia } from './media'
import { upsertByField } from './upsert'

export async function seed(payload: Payload) {
  for (const user of seedUsers) {
    await upsertByField({
      payload,
      collection: 'users',
      field: 'email',
      value: user.email,
      data: user,
    })
  }

  const mediaByKey = await seedMedia(payload, seedImages)

  const staff = await Promise.all(
    seedStaff.map(({ imageKey, ...member }) =>
      upsertByField({
        payload,
        collection: 'staff',
        field: 'slug',
        value: member.slug,
        data: { ...member, photo: mediaByKey.get(imageKey)!.id },
      }),
    ),
  )
  const staffBySlug = new Map(staff.map((member) => [member.slug, member]))

  const series = await Promise.all(
    seedSeries.map(({ imageKey, ...item }) =>
      upsertByField({
        payload,
        collection: 'sermon-series',
        field: 'slug',
        value: item.slug,
        data: { ...item, coverImage: mediaByKey.get(imageKey)!.id },
      }),
    ),
  )
  const seriesBySlug = new Map(series.map((item) => [item.slug, item]))

  const topics = await Promise.all(
    seedTopics.map((topic) =>
      upsertByField({ payload, collection: 'topics', field: 'slug', value: topic.slug, data: topic }),
    ),
  )
  const topicsBySlug = new Map(topics.map((topic) => [topic.slug, topic]))

  const tags = await Promise.all(
    seedTags.map((tag) =>
      upsertByField({ payload, collection: 'tags', field: 'slug', value: tag.slug, data: tag }),
    ),
  )
  const tagsBySlug = new Map(tags.map((tag) => [tag.slug, tag]))

  const sermons = await Promise.all(
    seedSermons.map(({ imageKey, ...sermon }) => {
      const featuredImage = mediaByKey.get(imageKey)!.id

      return upsertByField({
        payload,
        collection: 'sermons',
        field: 'slug',
        value: sermon.slug,
        data: {
          title: sermon.title,
          generateSlug: false,
          slug: sermon.slug,
          excerpt: sermon.excerpt,
          publishedDate: sermon.publishedDate,
          speaker: staffBySlug.get(sermon.speakerSlug)!.id,
          series: sermon.seriesSlug ? seriesBySlug.get(sermon.seriesSlug)!.id : undefined,
          featuredImage,
          content: sermon.content,
          scriptureReferences: sermon.scriptureReferences,
          topics: sermon.topicSlugs.map((slug) => topicsBySlug.get(slug)!.id),
          tags: sermon.tagSlugs.map((slug) => tagsBySlug.get(slug)!.id),
          videoUrl: sermon.videoUrl,
          seo: { ...sermon.seo, ogImage: featuredImage },
          _status: 'published',
        },
      })
    }),
  )
  const sermonsBySlug = new Map(sermons.map((sermon) => [sermon.slug, sermon]))

  const events = await Promise.all(
    seedEvents.map(({ imageKey, ...event }) => {
      const featuredImage = mediaByKey.get(imageKey)!.id

      return upsertByField({
        payload,
        collection: 'events',
        field: 'slug',
        value: event.slug,
        data: {
          title: event.title,
          generateSlug: false,
          slug: event.slug,
          excerpt: event.excerpt,
          content: event.content,
          featuredImage,
          startDate: event.startDate,
          endDate: event.endDate,
          allDay: event.allDay,
          location: event.location,
          registrationUrl: event.registrationUrl,
          recurring: event.recurring,
          seo: { ...event.seo, ogImage: featuredImage },
          _status: 'published',
        },
      })
    }),
  )
  const eventsBySlug = new Map(events.map((event) => [event.slug, event]))

  const featuredSermon = sermonsBySlug.get('hope-for-today')!
  const recentSermonSlugs = ['hope-for-today', 'anchored-in-faith', 'prayer-that-moves-mountains']

  const visitPage = await upsertByField({
    payload,
    collection: 'landing-pages',
    field: 'slug',
    value: 'visit',
    data: {
      title: 'Plan Your Visit',
      generateSlug: false,
      slug: 'visit',
      hero: [
        {
          blockType: 'hero',
          headline: 'We would love to meet you',
          subline: 'Here is everything you need to know before your first Sunday with us.',
          variant: 'image',
          image: mediaByKey.get('hero-visit')!.id,
          primaryCta: {
            label: 'See upcoming events',
            linkType: 'internal',
            internalLink: { relationTo: 'events', value: eventsBySlug.get('sunday-worship')!.id },
          },
          secondaryCta: { label: 'Contact us', linkType: 'external', externalUrl: 'https://example.test/contact' },
        },
      ],
      layout: [
        { blockType: 'richText', content: visitPageContent, width: 'default' },
        {
          blockType: 'eventHighlight',
          heading: 'When we gather',
          events: [eventsBySlug.get('sunday-worship')!.id],
          layout: 'featured',
          showLocation: true,
        },
        {
          blockType: 'sermon-feed',
          heading: 'Get a taste of our teaching',
          mode: 'recent',
          limit: 3,
          cta: { label: 'Browse all sermons', url: '/sermons' },
        },
      ],
      metaTitle: 'Plan Your Visit',
      metaDescription: 'Everything you need to know before visiting us for the first time.',
      ogImage: mediaByKey.get('og-visit')!.id,
      _status: 'published',
    },
  })

  await upsertByField({
    payload,
    collection: 'landing-pages',
    field: 'slug',
    value: 'welcome',
    data: {
      title: 'Welcome',
      generateSlug: false,
      slug: 'welcome',
      hero: [
        {
          blockType: 'hero',
          headline: 'Welcome home',
          subline: 'Come and discover a place to belong.',
          variant: 'image',
          image: mediaByKey.get('hero-welcome')!.id,
          primaryCta: {
            label: 'Listen to a sermon',
            linkType: 'internal',
            internalLink: { relationTo: 'sermons', value: featuredSermon.id },
          },
          secondaryCta: { label: 'Plan your visit', linkType: 'external', externalUrl: 'https://example.test/visit' },
        },
      ],
      layout: [
        { blockType: 'richText', content: pageContent, width: 'default' },
        {
          blockType: 'scriptureQuote',
          verseText: 'May the God of hope fill you with all joy and peace as you trust in him.',
          reference: 'Romans 15:13',
          translation: 'NIV',
        },
        {
          blockType: 'sermonHighlight',
          heading: 'Recent messages',
          description: 'Catch up on the latest sermons from our teaching team.',
          sermons: recentSermonSlugs.map((slug) => sermonsBySlug.get(slug)!.id),
          layout: 'grid',
          showSeries: true,
        },
        {
          blockType: 'eventHighlight',
          heading: 'Upcoming events',
          description: 'Join us for worship, fellowship, and community gatherings.',
          events: ['sunday-worship', 'community-bbq', 'youth-night'].map((slug) => eventsBySlug.get(slug)!.id),
          layout: 'grid',
          showLocation: true,
        },
        {
          blockType: 'sermon-feed',
          heading: 'More sermons',
          description: 'Browse messages from our Rooted in Hope series.',
          mode: 'series',
          series: seriesBySlug.get('rooted-in-hope')!.id,
          limit: 4,
          cta: { label: 'View all sermons', url: '/sermons' },
        },
        {
          blockType: 'cta',
          heading: 'New here?',
          body: visitPageContent,
          background: 'image',
          backgroundImage: mediaByKey.get('cta-new-here')!.id,
          buttons: [
            {
              label: 'Plan your visit',
              linkType: 'internal',
              internalLink: { relationTo: 'landing-pages', value: visitPage.id },
            },
            {
              label: 'Contact us',
              linkType: 'external',
              externalUrl: 'https://example.test/contact',
            },
          ],
        },
      ],
      metaTitle: 'Welcome',
      metaDescription: 'Welcome to our church community.',
      ogImage: mediaByKey.get('og-welcome')!.id,
      _status: 'published',
    },
  })

  return {
    users: seedUsers.length,
    media: mediaByKey.size,
    staff: staff.length,
    series: series.length,
    topics: topics.length,
    tags: tags.length,
    sermons: sermons.length,
    events: events.length,
    landingPages: 2,
  }
}
