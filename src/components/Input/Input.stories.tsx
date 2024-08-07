import { StoryFn, Meta } from '@storybook/react';
import Input from './input';

export default {
  title: 'Components/Input',
  component: Input,
} as Meta;

const Template: StoryFn<{ size: 'small'; disabled?: boolean; placeholder?: string }> = (args) => <Input {...args} />;

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  placeholder: 'Small Input',
};

export const Disabled = Template.bind({});
Disabled.args = {
  size: 'small',
  disabled: true,
  placeholder: 'Disabled Input',
};
