import { StoryFn, Meta } from '@storybook/react';
import Link from './link';
// import { LinkProps } from './link.types';
import '../MyLink.css';

export default {
  title: 'Components/Link',
  component: Link,
} as Meta;

const Template: StoryFn<{ variant: 'primary' | 'black' | 'blue' | 'hover' | 'disabled'; href: string; children: React.ReactNode }> = (args) => <Link {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  href: '#',
  children: 'Primary Link',
};

export const Black = Template.bind({});
Black.args = {
  variant: 'black',
  href: '#',
  children: 'Black Link',
};

export const Blue = Template.bind({});
Blue.args = {
  variant: 'blue',
  href: '#',
  children: 'Blue Link',
};

export const Hover = Template.bind({});
Hover.args = {
  variant: 'hover',
  href: '#',
  children: 'Hover Link',
};

export const Disabled = Template.bind({});
Disabled.args = {
  variant: 'disabled',
  href: '#',
  children: 'Disabled Link',
};
