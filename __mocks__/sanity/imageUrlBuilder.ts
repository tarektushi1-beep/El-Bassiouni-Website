// Mock for @sanity/image-url — avoids ESM parse error in Jest
const imageUrlBuilder = (_client: unknown) => ({
  image: (_source: unknown) => ({
    width: (_w: number) => ({
      height: (_h: number) => ({
        url: () => 'https://cdn.sanity.io/mock-image.png',
      }),
      url: () => 'https://cdn.sanity.io/mock-image.png',
    }),
    url: () => 'https://cdn.sanity.io/mock-image.png',
  }),
})

export default imageUrlBuilder
