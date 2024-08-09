import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import Section from './Section'; // Ensure the path and case are correct
import '../MySection.css'; // Ensure this file exists and the path is correct

export default {
  title: 'Components/Section',
  component: Section,
} as Meta;

const Template: StoryFn<{ variant: 'primary' | 'disabled'; children: React.ReactNode }> = (args) => <Section {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  children: 'Primary Section',
};

export const Disabled = Template.bind({});
Disabled.args = {
  variant: 'disabled',
  children: 'Disabled Section',
};
