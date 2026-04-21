// src/sanity/lib/client.ts
import { createClient } from '@sanity/client'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production'

// Only create the real client when a projectId is configured.
// Without one, all fetches return empty data so the site builds and runs
// with placeholder content until the owner adds credentials.
const sanityClient = projectId
  ? createClient({ projectId, dataset, apiVersion: '2024-04-20', useCdn: true })
  : null

export const client = {
  fetch: async <T>(
    query: string,
    params?: Record<string, unknown>,
    options?: Record<string, unknown>
  ): Promise<T> => {
    if (!sanityClient) return [] as unknown as T
    return sanityClient.fetch<T>(query, params, options)
  },
}
