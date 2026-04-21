// Mock for @/sanity/lib/image — avoids importing ESM @sanity/image-url in Jest
export const urlFor = (_source: unknown) => ({
  width: (_w: number) => ({
    height: (_h: number) => ({
      url: () => 'https://cdn.sanity.io/mock-image.png',
    }),
  }),
  url: () => 'https://cdn.sanity.io/mock-image.png',
})
