import sharp from 'sharp'
import type { Media } from '../../src/payload-types'
import type { Payload } from 'payload'

export type SeedImage = {
  key: string
  alt: string
  width: number
  height: number
  color: string
  label: string
}

async function createPlaceholderImage(image: SeedImage): Promise<Buffer> {
  const fontSize = Math.max(16, Math.min(image.width, image.height) / 14)
  const svg = `
    <svg width="${image.width}" height="${image.height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="${image.color}"/>
      <rect x="24" y="24" width="${image.width - 48}" height="${image.height - 48}" fill="none" stroke="#ffffff" stroke-opacity="0.25" stroke-width="2"/>
      <text
        x="50%"
        y="50%"
        dominant-baseline="middle"
        text-anchor="middle"
        font-family="sans-serif"
        font-size="${fontSize}"
        fill="#ffffff"
        opacity="0.92"
      >${image.label}</text>
    </svg>
  `

  return sharp(Buffer.from(svg)).png().toBuffer()
}

/** Create placeholder media once, then reuse it on later seed runs. */
export async function upsertMedia(
  payload: Payload,
  image: SeedImage,
): Promise<Media> {
  const filename = `seed-${image.key}.png`
  const existing = await payload.find({
    collection: 'media',
    depth: 0,
    limit: 1,
    locale: 'en',
    overrideAccess: true,
    where: { filename: { equals: filename } },
  })

  if (existing.docs[0]) {
    return existing.docs[0]
  }

  const data = await createPlaceholderImage(image)

  return payload.create({
    collection: 'media',
    data: { alt: image.alt },
    file: {
      data,
      mimetype: 'image/png',
      name: filename,
      size: data.length,
    },
    locale: 'en',
    overrideAccess: true,
  })
}

export async function seedMedia(payload: Payload, images: SeedImage[]): Promise<Map<string, Media>> {
  const media = await Promise.all(images.map((image) => upsertMedia(payload, image)))
  return new Map(media.map((doc, index) => [images[index]!.key, doc]))
}
