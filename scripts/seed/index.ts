import 'dotenv/config'
import { getPayload } from 'payload'
import config from '../../src/payload.config'
import { seed } from './seed'

async function main() {
  const payload = await getPayload({ config })

  try {
    const summary = await seed(payload)
    payload.logger.info(`Dummy content seeded: ${JSON.stringify(summary)}`)
  } finally {
    await payload.destroy()
  }
}

main()
  .then(() => {
    process.exit(0)
  })
  .catch((error: unknown) => {
    console.error('Seeding failed:', error)
    process.exit(1)
  })
