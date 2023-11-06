import { describe, test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from '../src/pages/App'

describe('<App />', () => {
  test('Should Render', () => {
    render(<App />)

    expect(screen.getByText('Condimentum consectectur')).toBeDefined()
  })
})
