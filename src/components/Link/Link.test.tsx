import { render } from '@testing-library/react';
import Link from './link';
// import { isLinkDisabled } from './link.lib';

test('renders the Link component', () => {
  const { getByText } = render(<Link variant="primary" href="#">Primary Link</Link>);
  const linkElement = getByText(/Primary Link/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders the disabled Link component', () => {
  const { getByText } = render(<Link variant="disabled" href="#">Disabled Link</Link>);
  const linkElement = getByText(/Disabled Link/i);
  expect(linkElement).toHaveClass('disabled');
});
