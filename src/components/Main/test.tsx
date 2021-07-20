import { render, screen } from '@testing-library/react'
import Main from '.'

describe('<Main />', () => {
  it('shold render the heading', () => {
    const { container } = render(<Main />)
    expect(
      screen.getByRole('heading', { name: /Nephxlin/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
