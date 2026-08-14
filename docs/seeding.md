# Seeding dummy content

The seed script uses Payload's Local API, so it connects directly to the database configured by `DATABASE_URL`. It creates or updates a small, linked set of dummy content:

- two users (an admin and an editor)
- one staff member, sermon series, two topics, and two tags
- one published sermon and one published landing page

The script is idempotent: running it again updates the records with the same email or slug. It does not delete existing data.

## Run it

1. Set `DATABASE_URL` and `PAYLOAD_SECRET` in `.env` (or otherwise make them available in your shell). Use a non-production database.
2. Run the database migrations/schema setup required by your Payload database adapter.
3. Execute:

   ```bash
   pnpm seed
   ```

The dummy accounts use `admin@example.test` and `editor@example.test`. Both use the password `ChangeMe123!`; change or remove them after using the seed data outside local development.

## Customize content

Edit [scripts/seed/data.ts](../scripts/seed/data.ts) for text, users, taxonomy, and rich-text values. Keep relationship-dependent documents in [scripts/seed/seed.ts](../scripts/seed/seed.ts), where their IDs are available after creation. The entry point in [scripts/seed/index.ts](../scripts/seed/index.ts) is deliberately small and only initializes Payload before running the seed.
