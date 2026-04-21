// Mock for @sanity/client — avoids ESM/nanoid parse error in Jest
const createClient = (_config: unknown) => ({
  fetch: async (_query: string, _params?: unknown) => null,
})

export { createClient }
export default createClient
