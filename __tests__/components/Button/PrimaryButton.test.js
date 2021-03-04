import React from 'react'
import { render, cleanup } from '@testing-library/react'
import PrimaryButton from '../../../src/components/Button'

describe('test this mega cool button', () => {
  it('is ok', () => {
    const label = 'Cool Button'
    const { getByText } = render(<PrimaryButton label={label} />)

    // TODO fix this
    expect(getByText(label)).toBeInTheDocument()
    // expect(true).toEqual(true)
  })
})
