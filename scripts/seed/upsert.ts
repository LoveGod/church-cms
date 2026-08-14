import type { CollectionSlug, DataFromCollectionSlug, Payload, RequiredDataFromCollectionSlug } from 'payload'

type SeedPayload = {
  create: <TSlug extends CollectionSlug>(args: {
    collection: TSlug
    data: RequiredDataFromCollectionSlug<TSlug>
    locale: 'en'
    overrideAccess: true
  }) => Promise<DataFromCollectionSlug<TSlug>>
  find: <TSlug extends CollectionSlug>(args: {
    collection: TSlug
    depth: 0
    limit: 1
    locale: 'en'
    overrideAccess: true
    where: Record<string, { equals: string }>
  }) => Promise<{ docs: DataFromCollectionSlug<TSlug>[] }>
  update: <TSlug extends CollectionSlug>(args: {
    collection: TSlug
    id: string
    data: RequiredDataFromCollectionSlug<TSlug>
    locale: 'en'
    overrideAccess: true
  }) => Promise<DataFromCollectionSlug<TSlug>>
}

/** Create a document once, then update that same document on later seed runs. */
export async function upsertByField<TSlug extends CollectionSlug>({
  payload,
  collection,
  field,
  value,
  data,
}: {
  payload: Payload
  collection: TSlug
  field: string
  value: string
  data: RequiredDataFromCollectionSlug<TSlug>
}) {
  // Payload's overloaded Local API methods cannot retain a generic collection slug
  // through an upsert helper, so narrow only the methods used by this script.
  const localPayload = payload as unknown as SeedPayload
  const existing = await localPayload.find({
    collection,
    depth: 0,
    limit: 1,
    locale: 'en',
    overrideAccess: true,
    where: { [field]: { equals: value } },
  })

  if (existing.docs[0]) {
    return localPayload.update({
      collection,
      id: existing.docs[0].id,
      data,
      locale: 'en',
      overrideAccess: true,
    })
  }

  return localPayload.create({ collection, data, locale: 'en', overrideAccess: true })
}
