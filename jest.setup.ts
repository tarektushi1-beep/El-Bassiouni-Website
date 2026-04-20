import '@testing-library/jest-dom'

jest.mock('next/image', () => ({
  __esModule: true,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default: (props: any) => {
    // eslint-disable-next-line @next/next/no-img-element
    const React = require('react')
    return React.createElement('img', { ...props, alt: props.alt || '' })
  },
}))
