import '@testing-library/jest-dom'

jest.mock('next/image', () => ({
  __esModule: true,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default: (props: any) => {
    // eslint-disable-next-line @next/next/no-img-element
    const React = require('react')
    // Strip Next.js-specific props that are invalid on plain <img>
    const { priority, fill, loader, quality, placeholder, blurDataURL, unoptimized, ...imgProps } = props
    void priority; void fill; void loader; void quality; void placeholder; void blurDataURL; void unoptimized
    return React.createElement('img', { ...imgProps, alt: imgProps.alt || '' })
  },
}))
