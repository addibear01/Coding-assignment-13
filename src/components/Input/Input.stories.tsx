import { StoryFn, Meta } from '@storybook/react';
import Input from './Input'; // Corrected import to match the file name
import '../MyInput.css'; // Ensure this file exists and the path is correct

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
