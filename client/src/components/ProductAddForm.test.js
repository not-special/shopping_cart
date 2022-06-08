import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import ProductAddForm from './ProductAddForm'

describe("ProductAddForm", () => {
  let func;
  beforeEach(() => {
    func = jest.fn();
    render(<ProductAddForm onSubmit={func} />)
  })
  it("contains Add Product header", () => {
    const heading = screen.getByRole("heading", { level: 3 });
    expect(heading).toHaveTextContent("Add Product")
  })
})

