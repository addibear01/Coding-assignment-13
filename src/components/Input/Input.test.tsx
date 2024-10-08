import { render } from '@testing-library/react';
import Input from './Input';

test('renders the Input component', () => {
  const { getByPlaceholderText } = render(<Input size="small" placeholder="Small Input" />);
  const inputElement = getByPlaceholderText(/Small Input/i);
  expect(inputElement).toBeInTheDocument();
});

test('renders the disabled Input component', () => {
  const { getByPlaceholderText } = render(<Input size="small" disabled placeholder="Disabled Input" />);
  const inputElement = getByPlaceholderText(/Disabled Input/i);
  expect(inputElement).toBeDisabled();
});
