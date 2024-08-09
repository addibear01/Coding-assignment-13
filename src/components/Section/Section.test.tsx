import { render } from '@testing-library/react';
// import { isSectionDisabled } from './section.lib';
import Section from './Section';

test('renders the Section component', () => {
  const { getByText } = render(<Section variant="primary">Primary Section</Section>);
  const sectionElement = getByText(/Primary Section/i);
  expect(sectionElement).toBeInTheDocument();
});
